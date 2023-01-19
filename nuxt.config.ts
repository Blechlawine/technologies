export default defineNuxtConfig({
    extends: "@nuxt-themes/docus",
    telemetry: false,
    app: {
        baseURL: process.env.NODE_ENV === "production" ? "/technologies/" : "/",
        head: {
            script: [
                {
                    key: "shynet",
                    src: "https://shynet.zmarc.de/ingress/d9ed8937-cfc3-4482-a0be-955ed70dde0e/script.js",
                    defer: true,
                },
            ],
        },
    },
});
