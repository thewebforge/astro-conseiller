/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: colors.indigo,
        accent: colors.indigo,
        links: colors.indigo,
        visited: colors.indigo,
        canvas: colors.slate,
        success: colors.green,
        error: colors.red,
        warning: colors.orange,
        info: colors.blue,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
