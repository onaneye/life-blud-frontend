/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        gilory:['Gilroy Medium', 'sans-serif'],
        'gilroy-bold':['Gilroy Bold', 'sans-serif'],
        'gilroy-medium':['Gilroy Medium', 'sans-serif'],
        helvetica:['Helvetica', 'sans-serif']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      '[type="radio"]:checked + label':{
        backgroundColor:'#red-800',
      }
    },
  },
  plugins: [],
};
