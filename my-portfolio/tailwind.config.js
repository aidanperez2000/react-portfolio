/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/styles/styles.css"  // Ensure Tailwind scans your CSS file
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  