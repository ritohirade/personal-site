import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "custom-gray": "#1B1B1B",
        "skills-gray": "#323232",
      },
      textColor: {
        "custom-gray": "#8B8B8B",
      },
      whitespace: {
        "pre-line": "pre-line",
      },
    },
  },
  plugins: [],
};
export default config;
