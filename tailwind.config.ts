import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sora: ["sora", "sans-serif"],
      urbanist: ["urbanist", "sans-serif"],
      poppins: ["poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-text":
          "linear-gradient(90deg, #4B1A72 0%, #7B4DDF 50%, #4B1A72 100%)",
      },
      backgroundPosition: {
        "custom-y": "center -125px",
        "custom-330": "center -330px",
        "custom-110": "center 110px",
      },
      backgroundClip: {
        text: "text",
      },
      textFillColor: {
        transparent: "transparent",
      },
      colors: {
        primary_black: "#1C1C1C",
        primary_white: "#F5F8FF",
        primary_blue: "#545CF6",
        primary_orange: "#F9752B",
        // green
        primary_green: "#93EF1E",
        secondary_green: "#B7F355",
        // purple
        primary_purple: "#6C549F",
        secondary_purple: "#A799C5",
        tertiary_purple: "#C4BBD8",
        light_purple: "#E2DDEC",
      },
    },
  },
  plugins: [addVariablesForColors, require("tailwind-scrollbar")],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
