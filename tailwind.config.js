/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'general': 'var(--bg-general)'
      },
      backgroundColor: {
        'primary-10': 'var(--bg-general-10, rgba(#RRGGBB, 144, 220, 0.1))',
        'primary-20': 'var(--bg-general-20, rgba(52, 144, 220, 0.2))',
        'primary-30': 'var(--bg-general-30, rgba(52, 144, 220, 0.3))',
        'primary-40': 'var(--bg-general-40, rgba(52, 144, 220, 0.4))',
        'primary-50': 'var(--bg-general-50, rgba(52, 144, 220, 0.5))',
        'primary-60': 'var(--bg-general-60, rgba(52, 144, 220, 0.6))',
        'primary-70': 'var(--bg-general-70, rgba(52, 144, 220, 0.7))',
        'primary-80': 'var(--bg-general-80, rgba(52, 144, 220, 0.8))',
        'primary-90': 'var(--bg-general-90, rgba(52, 144, 220, 0.9))',
        'primary-100': 'var(--bg-general-100, rgba(52, 144, 220, 1))',
        // ... otros niveles de opacidad
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  corePlugins: {
    // Habilita la opacidad en los colores personalizados
    backgroundOpacity: true,
    textOpacity: true,
  },
  plugins: [],
}

