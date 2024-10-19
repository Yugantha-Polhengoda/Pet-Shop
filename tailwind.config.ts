import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Orbitron-font': ["Orbitron", "sans-serif"],
        'Poppins-font': ["Poppins", "sans-serif"],
        'Maname-font': ["Maname", "sans-serif"],
        'RobotoMono-font': ["Roboto Mono", "monospace"],
        'Playfair-font': ["Playfair Display", "monospace"],
        'NotoSerif-font': ["Noto Serif Khitan Small Script", "serif"],
      },
      fontSize: {
        'custom-Ss': '5px',
        'custom-xs': '10px',
        'custom-sm': '16px',
      },
      colors: {
        customGray: '#4e4e4e',
      },
      boxShadow: {
        'custom-shadow': '0 .3rem .1rem rgba(0, 0, 0, .2)',
      },
      padding: {
        'custom-p': '14px',
      },
      dropShadow: {
        'box-Hover': 'inset 0 -4px 20px rgba(111, 65, 210, .5)',
      },
      width: {
        '350': '350px',
        '410': '410px',
        '600': '600px',
        '55%': '55%',
      },
      spacing: {
        'customX': '498px',
        'customXs': '655px',
       }
    },
  },
  plugins: [],
};

export default config;
