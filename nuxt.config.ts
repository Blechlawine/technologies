export default defineNuxtConfig({
    extends: "@nuxt-themes/docus",
    telemetry: false,
    app: {
        baseURL: process.env.NODE_ENV === "production" ? "/technologies/" : "/",
    },
});
