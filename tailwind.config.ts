import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // xxsm: '365px',
      xsm: '480px',
      sm: '550px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      // https://coolors.co/3a015c-987284-35012c-eadeda-11001c
      colors: {
        'bg-light': '#efe2c9', //Tan
        'bg-dark': '#2c3827', //Green
        'nav': '#313729',  //Slightly darker green
        'nav-open': '#4e5e41',  //Slightly lighter green
        'nav-line': '#597733',  //Much ligher green
        'text-light': '#ffffff',  //White
        'text-accent': '#c59d5f', //Tan
        'text-dark': '#000000',   //Black
        'link': '#dca300',   //Gold
      },
      height: {
        'screen-width': '100vw'
      }
  },
},
  plugins: [],
};
export default config;
