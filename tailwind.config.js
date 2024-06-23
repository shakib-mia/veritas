/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      serif: ["Marcellus", "serif"],
      ["sans-serif"]: ["Archivo", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#BF9874",
        },

        blue: {
          light: {
            DEFAULT: "#667C99",
            2: "#EAF1FA",
          },
          DEFAULT: "#001025",
        },

        gray: {
          DEFAULT: "#808080",
        },
      },
    },
  },
  plugins: [],
};
