/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-600": "#7F56D9",
      "primary-700": "#6941C6",
     


      skyblue: "#399CC8",
      blue: "#612ADB",
      DarkSkyblue: "#3ECEF1",
      black: "#000000",
      white: "#FFFFFF",
      "gray-600": "#475467",
      "gray-700": "#344054",
      "gray-500": "#667085",
      "red-500": "#ff087",
      

      
      "gray-900": "#101828",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["18px", "30px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      xxl: ["35px", "43px"],
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    letterSpacing: {
      tightest: "-0.96px",
      tighter: "-1.2px",
      tight: "-0.72px",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    extend: {},
  },
  plugins: [],
};