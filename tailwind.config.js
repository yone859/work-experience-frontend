/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      colors: {
        // 'カラー名': 'カラーコード'
        'name-bgcollar': '#DBEEF4',
        'name-collar': '#4F81BD',
        'self-bgcollar': '#C6D9F1',
        'self-table-collar': '#376092',
        'black': '#17375E',
        'green': '#EBF1DE',
        'dark-green': '#00B050',
      },
    },
  },
  plugins: [],
};
