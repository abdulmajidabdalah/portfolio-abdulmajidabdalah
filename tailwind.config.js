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
    extend: {
      colors: {
        "dark-primary": "#2C3333",
        "blue-primary": "#0E8388",
        "blue-secondary": "#2E4F4F",
        light: "#CBE4DE",
      },
    },
  },
  plugins: [require("daisyui")],
};
