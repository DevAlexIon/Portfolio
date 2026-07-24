/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Teal — cool, distinct from UseRepurposer amber; not purple/coral
        primary: "#2EC4B6",
        "primary-dark": "#24A99D",
        "primary-light": "#5ED4C8",
        accent: "#7EE0D6",
        "accent-dark": "#4ACFC2",
        background: "#090B0C",
        surface: "#111516",
        ink: "#F0F5F4",
        muted: "#8A9694",
        divider: "#1C2423",
        deep: "#060808",
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ['"Inter"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        body: ['"Inter"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "4rem",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
