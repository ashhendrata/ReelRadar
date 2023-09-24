module.exports = {
  mode: "jit",
  purge: 
    ["./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans'],
      },
      fontSize: {
        'xxs': '3rem', 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      background: "#0D1118", //almost black
      primary: "#FFFFFF", //white
      secondary: "#9E9E9E", //gray
      active: "#141EFC", //blue
    },
  },

  variants: {
  },
  plugins: [],
};