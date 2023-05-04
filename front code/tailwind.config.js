/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#F8F8F8",
          green: {
            1: "#08A893",
            2: "#00C9AF",
            3: "#418242",
          },
          brown: {
            1: "#86622D",
            2: "#A37E47",
            3: "#B5986C",
            4: "#F1ECE3",
          },
          gray: "#DFE0DF",
          placeholder: "#9B9893",
        },
      },
      fontFamily: {
        vazir: ["Vazir"],
      },
    },
  },
};
