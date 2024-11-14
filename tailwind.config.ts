import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greyishbrown: {
          900: "#464646",
        },
        flyblue: {
          500: "#1773dc",
        },
        pumpkinorange: {
          500: "#ff7913",
        },
      },
      fontFamily: {
        iransansFaNum: ["var(--font-iransans-fa-num)"],
        iransans: ["var(--font-iransans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
