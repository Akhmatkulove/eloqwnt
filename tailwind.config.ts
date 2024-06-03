/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "bg-main": "#e5e9eb",
        black: "#000000",
        gray: "#E5E9EB",
        "gray-second": "rgba(0, 0, 0, 0.4)",
      },
    },
    screens: {
      "2xl": { max: "1500px" },
      xl: { max: "1200px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "620px" },
      phone: { max: "479px" },
    },
  },
  plugins: [],
};
