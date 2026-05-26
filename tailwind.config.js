/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#fff8e7",
          100: "#f2dfab",
          300: "#d7c38a",
          500: "#c7a65a",
          700: "#8e7034",
          900: "#071426",
        },
        accent: {
          300: "#9fc2e8",
          500: "#2e5f93",
          700: "#143555",
        },
      },
      boxShadow: {
        soft: "0 24px 80px -30px rgba(199, 166, 90, 0.38)",
        card: "0 18px 60px -38px rgba(7, 20, 38, 0.95)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 700ms ease-out both",
      },
    },
  },
  plugins: [],
};
