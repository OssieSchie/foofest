/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-grey-00": "#262323",
        "dark-grey-50": "#26232380",
        "lighter-grey-00": "#292525",
        "white-off-00": "#f5ecec",
        "white-off-20": "#f5ecec40",
        "accent-00": "#bf6d32",
      },
    },
  },
  plugins: [],
};
