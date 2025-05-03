import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxtjs/i18n", "@vueuse/nuxt", "@nuxt/fonts", "shadcn-nuxt"],
  i18n: {
    defaultLocale: "en",
    restructureDir: "app/i18n",
    locales: [
      { code: "en", name: "English", file: "en.ts" },
      { code: "pt-BR", name: "Português", file: "pt-BR.ts" },
    ],
  },
  shadcn: {
    prefix: "",
    componentDir: "~/app/components/ui",
  },
});
