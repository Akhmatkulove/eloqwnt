// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      VITE_APPWRITE_ENDPOINT: process.env.VITE_APPWRITE_ENDPOINT,
      VITE_APPWRITE_PROJECT: process.env.VITE_APPWRITE_PROJECT,
      VITE_DATABASE_ID: process.env.VITE_DATABASE_ID,
      VITE_WORKS_ID: process.env.VITE_WORKS_ID,
      VITE_WORK_ITEM_ID: process.env.VITE_WORK_ITEM_ID,
      VITE_SHEETS_URL: process.env.VITE_SHEETS_URL,
    },
  },
  app: {
    pageTransition: { name: "_page", mode: "out-in" },
    layoutTransition: {
      name: "_layout",
      mode: "out-in",
    },
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport:
        "width=device-width,initial-scale=1,user-scalable=yes,maximum-scale=3",
      title: "Eloqwnt",
      meta: [
        { name: "description", content: "eloqwnt" },
        { name: "color-scheme", content: "light dark" },
        { name: "og:type", content: "article" },
      ],
      link: [],
    },
  },
  devServer: {
    port: 5173,
  },

  css: ["~/assets/css/style.scss"],
  modules: ["nuxt-primevue"],
  primevue: {
    options: {
      ripple: true,
    },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      prefix: "Prime",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/helper.scss";',
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["gsap"],
  },
});
