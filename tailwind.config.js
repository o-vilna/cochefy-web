/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary - брендові сині кольори
        primary: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d6ff",
          300: "#a5b8ff",
          400: "#8191ff",
          500: "#0B64F4", // Основний брендовий синій
          600: "#013270", // Темно-синій
          700: "#011B3C", // Дуже темно-синій
          800: "#001529",
          900: "#000a14",
        },

        // Secondary - сірі кольори
        secondary: {
          50: "#f8f9fa",
          100: "#f1f3f4",
          200: "#e8eaed",
          300: "#dadce0",
          400: "#bdc1c6",
          500: "#757575", // Основний сірий
          600: "#5f6368",
          700: "#3c4043",
          800: "#202124",
          900: "#1a1a1a",
        },

        // Accent - фіолетовий
        accent: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#D3BDFF",
          600: "#a855f7",
          700: "#9333ea",
          800: "#7c3aed",
          900: "#6b21a8",
        },

        // Utility кольори
        utility: {
          "bg-white": "#FFFFFF",
          "border-transparent": "#0000001A", // 10% прозорості
          "bg-overlay": "#6672A838", // 22% прозорості
        },
      },

      // Градієнти
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(164.54deg, #013270 -56.61%, #011B3C 97.88%)",
      },
    },
  },
  plugins: [],
};
