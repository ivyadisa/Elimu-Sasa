/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/global.css",
  ],

  theme: {
    extend: {
      colors: {
        /* PRIMARY (Blue system) */
        primary: "#2568D6",
        "primary-light": "#E8F0FE",
        "primary-hover": "#1E4FB5",

        /* SECONDARY (Green system) */
        secondary: "#32A852",
        "secondary-light": "#EAF7EE",

        /* LAYOUT COLORS */
        background: "#F8FAFC",
        card: "#FFFFFF",
        border: "#E2E8F0",

        /* TEXT SYSTEM */
        "text-main": "#0F172A",
        "text-muted": "#64748B",
        "text-light": "#94A3B8",

        /* STATUS COLORS (important for your system) */
        success: "#32A852",
        warning: "#F59E0B",
        danger: "#EF4444",
      },

      /* OPTIONAL: smooth animations for UI feel */
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.05)",
      },

      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
    },
  },

  plugins: [],
};