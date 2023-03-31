export default defineNuxtPlugin((nuxtApp) => {
    // This is a lightweight and privacy-friendly analytics script from Shynet, a self-hosted
    // analytics tool. To give you full visibility into how your data is being monitored, this
    // file is intentionally not minified or obfuscated. To learn more about Shynet (and to view
    // its source code), visit <https://github.com/milesmcc/shynet>.
    //
    // This script only sends the current URL, the referrer URL, and the page load time. That's it!

    const Shynet = {
        idempotency: null as string | null,
        heartbeatTaskId: null as NodeJS.Timer | null,
        skipHeartbeat: false,
    };

    function sendHeartbeat() {
        try {
            if (document.hidden || Shynet.skipHeartbeat) {
                return;
            }

            Shynet.skipHeartbeat = true;
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                "https://shynet.zmarc.de/ingress/d9ed8937-cfc3-4482-a0be-955ed70dde0e/script.js",
                true,
            );
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function () {
                Shynet.skipHeartbeat = false;
            };
            xhr.onerror = function () {
                Shynet.skipHeartbeat = false;
            };
            xhr.send(
                JSON.stringify({
                    idempotency: Shynet.idempotency,
                    referrer: document.referrer,
                    location: window.location.href,
                    loadTime:
                        window.performance.timing.domContentLoadedEventEnd -
                        window.performance.timing.navigationStart,
                }),
            );
        } catch (e) {}
    }

    function newPageLoad() {
        if (Shynet.heartbeatTaskId != null) {
            clearInterval(Shynet.heartbeatTaskId);
        }
        Shynet.idempotency =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
        Shynet.skipHeartbeat = false;
        Shynet.heartbeatTaskId = setInterval(sendHeartbeat, 5000);
        sendHeartbeat();
    }

    nuxtApp.hook("app:mounted", () => {
        newPageLoad();
    });

    nuxtApp.hook("page:finish", (pageComponent) => {
        newPageLoad();
    });
});
