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
      keyframes: {
        line: {
          "0%": {
            width: 0,
          },
          "100%": {
            width: "100%",
          },
        },

        vertical: {
          "0%": {
            height: 0,
          },
          "100%": {
            height: "100%",
          },
        },
      },
      animation: {
        line: "line 4s linear",
        "line-vertical": "vertical linear",
      },
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
