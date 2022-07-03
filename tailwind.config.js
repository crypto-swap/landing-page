module.exports = {
  
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '4.167%': '4.167%', 
      },
      colors: {
        'bg-light': '#EFEFEF', // bg- prefixes to avoid conflicts with other names
        'bg-dark': '#1B1E31',
        'bg-card-light': '#F7F8F8',
        'bg-card-dark': '#1F2237', // same as text-light
        'text-light': '#1F2237',
        'text-dark': '#EFEFEF',
        // blues
        'menu-blue': '#363C5F',
        'royal-blue': '#163A91',
        'button-blue': '#2669F5',
        'bg-blue': '#5090EA',
        'font-blue': '#4B86FF',
      },
      animation: {
        'spin-once': 'spin 0.5s ease-in-out 1 reverse',
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        'card': '3px 3px 3px #c7c7c7, -3px -3px 3px #ffffff',
        'card-dark': '3px 3px 3px #171a29, -3px -3px 3px  #272b45',
        'button':
          '-1px -1px 3px #4479e6,-1px -1px 2px #4479e6,1px 1px 1px #4479e6,1px 1px 2px #272b45',
        'button-dark':
          '-1px -1px 3px #225fdd,-1px -1px 2px #225fdd,1px 1px 1px #225fdd,1px 1px 2px #2a74ff',
        'button-hover':
          'inset 3px 3px 3px #c7c7c7, inset -3px -3px 3px #ffffff',
        'button-hover-dark':
          'inset 3px 3px 3px #171a29, inset -3px -3px 3px  #272b45',
        'green-card':
          '5px 5px 0px #609664, -5px -5px 0px #82cc88',
        'green-card-hover':
          'inset 15px 15px 15px #609664, inset -15px -15px 15px #82cc88',
        'blue-card':
          '5px 5px 0px #4072d9, -5px -5px 0px #569aff',
        'blue-card-hover':
          'inset 15px 15px 15px #4072d9, inset -15px -15px 15px #569aff',
        'grey-card':
          '5px 5px 0px #2e3351, -5px -5px 0px #3e456d',
        'grey-card-hover':
          'inset 15px 15px 15px #2e3351, inset -15px -15px 15px #3e456d',
        'blue-button':
          '2px 2px 0px #2059d0, -2px -2px 0px #2c79ff',
        'blue-button-hover':
          'inset 3px 3px 0px #2059d0, inset -3px -3px 0px #2c79ff',
        'purple-gradient-button': 
          'inset .2rem .2rem 1rem #7E05F0, inset -.2rem -.2rem 1rem #5b0eeb',
        'purple-gradient-button-hover': 
          '6px 6px 8px 0px #171a29, -6px -6px 8px 0 #171a29 , inset -4px -4px 6px 0px rgba(255, 255, 255, .2), inset 4px 4px 6px 0 rgba(0, 0, 0, .4)',
      },
      backgroundImage : {
        'intro-background': "url('/assets/intro_backgrounds.png')",
      },
    },
  },
  plugins: [],
};
