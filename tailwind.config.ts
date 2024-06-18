import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      colors: {
        "alabaster": "#F2F0E6",
        "anti-flash-white": "#F1F5F8",
        "iris": "#514ECC",
        "iris-dark": "#1a193e",
        "night": "#080F0F",
        "dark-green": "#273C2C",
        "dark-purple": "#0f0b10",
      },
      fontFamily: {
        serif: ["DM Serif Display", ...fontFamily.serif],
        sans: ["DM Sans", "Kdam Thmor Pro", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
