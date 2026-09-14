export default {
  content: ['./index.html', './lesson1.html', './lesson2.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { prompt: ['Prompt', 'sans-serif'], sarabun: ['Sarabun', 'sans-serif'], mono: ['Fira Code', 'monospace'] },
      colors: { brand: { 50: '#eef2ff', 100: '#e0e7ff', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 900: '#1e1b4b' } },
    },
  },
}
