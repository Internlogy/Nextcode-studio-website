/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#2f7bf6", dark: "#1d5fd0", soft: "#f5f8ff", tint: "#e8f0ff" },
        ink: { DEFAULT: "#0b1220", muted: "#46526a" },
        line: "#e4e9f2",
        accent: "#ffb020",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 8px 20px -8px rgba(47,123,246,.7)",
        card: "0 20px 36px -22px rgba(47,123,246,.5)",
      },
    },
  },
  plugins: [],
};
