import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006FEE",
        secondary: "#7828C8",
        success: "#17C964",
        warning: "#F5A524",
        purple: "#6F25BA",
        zinc: "#E4E4E7",
        default: "#71717A"
      },
      fontFamily: {
        tinos: ['Tinos', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        md: '10px',
        lg: '20px',
        xlg: '30px',
        xxlg: '50px',
      },
      borderWidth: {
        sm: '1px',
        'width-medium': '3px',
        lg: '3px',
        xlg: '4px',
      },
      borderRadius: {
        'medium': '5px',
        'large': '15px',
        'card-radius': '6px',
      },
      fontSize: {
        medium: '16px',
        small: '14px',
        large: '18px',
        // tested on retina display, the only value that achieves pixel perfection
        chip: '14.55px',
        // units
        'card-top': '52px'
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
