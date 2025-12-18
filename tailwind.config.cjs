/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
      },

      /* 🔥 ADD THESE ANIMATIONS 🔥 */
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(12px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-delay-1": "fadeIn 0.8s ease-out forwards 0.4s",
        "fade-in-delay-2": "fadeIn 0.8s ease-out forwards 0.8s",
        "fade-in-delay-3": "fadeIn 0.8s ease-out forwards 0.12s",
        "fade-in-delay-4": "fadeIn 0.8s ease-out forwards 0.16s",
      },
    },
  },
  plugins: [],
};




