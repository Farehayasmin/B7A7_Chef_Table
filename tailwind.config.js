/* eslint-disable no-undef */

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "350px", max: "639px" },
      },
    },
  },
  plugins: [daisyui],
};
