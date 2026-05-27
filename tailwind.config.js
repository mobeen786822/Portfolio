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
          50: "#eff6ff",
          100: "#dbeafe",
          300: "#9fc2e8",
          500: "#2e5f93",
          700: "#0d2138",
          900: "#071426",
        },
        accent: {
          300: "#d7c38a",
          500: "#c7a65a",
          700: "#8e7034",
        },
      },
      boxShadow: {
        soft: "0 30px 100px -42px rgba(46, 95, 147, 0.9)",
        card: "0 20px 70px -42px rgba(1, 8, 18, 0.95)",
        glow: "0 24px 80px -45px rgba(46, 95, 147, 0.95), 0 0 0 1px rgba(199, 166, 90, 0.08)",
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
