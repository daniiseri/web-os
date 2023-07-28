/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        clientCard: 'linear-gradient(270deg, #6a7bf3, #93d5ff)',
        productCard: 'linear-gradient(270deg, #e18c3e, #ffd096)',
        serviceCard: 'linear-gradient(270deg, #10a6b5, #5cede9)',
        orderCard: 'linear-gradient(270deg, #e7276e, #fd9eb1)',
        saleCard: 'linear-gradient(270deg, #15b698, #62eba6)',
        releases: 'linear-gradient(270deg, #f1b50c, #f5da56)'
      },
    },
  },
  plugins: [],
}
