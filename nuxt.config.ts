import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Jahan Shah",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/x-icon", href: "/favicon-light.ico", media: "(prefers-color-scheme: light)" },
        { rel: "icon", type: "image/x-icon", href: "/favicon-dark.ico", media: "(prefers-color-scheme: dark)" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "lenis/nuxt",
    "@vueuse/nuxt",
    "motion-v/nuxt",
    "@nuxtjs/device",
  ],
});
