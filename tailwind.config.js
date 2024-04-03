/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        paypalDark: "#253b80",
        paypalLight1: "#0079C1",
        paypalLight2: "#0093d5",
        paypalGrey1: "#accee3",
        paypalGrey2: "#e5eff6",
        paypalSecondary: "#f6f5ef",
      },
    },
  },
  plugins: [],
};
