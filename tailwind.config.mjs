/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',    // Energetic Blue - CTA buttons, headings
        accent: '#FF5733',     // Vibrant Orange - Highlights, prices
        background: '#F8F9FA', // Soft Gray - Page background
        textColor: '#343A40',  // Dark Gray - Body text
        secondary: '#28A745',  // Light Green - Success messages
      },
      fontFamily: {
        sans: ['var(--font-opensans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
