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
          50: "#ecfeff",
          100: "#cffafe",
          300: "#67e8f9",
          500: "#06b6d4",
          700: "#0e7490",
          900: "#082f49",
        },
        accent: {
          300: "#86efac",
          500: "#22c55e",
          700: "#15803d",
        },
      },
      boxShadow: {
        soft: "0 18px 60px -24px rgba(6, 182, 212, 0.45)",
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
