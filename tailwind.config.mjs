/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#032525",
        "primary-green": "#135351",
        "accent-yellow": "#D5A10E",
        "light-gray": "#687B7B",
      },
    },
  },
  plugins: [],
};
