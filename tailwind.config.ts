import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main_background: "var(--main-background)",
        card_backround: "var(--card-background)",
        utils_background: "var(--utils-background)",
      },
    },
  },
  plugins: [],
} satisfies Config;
