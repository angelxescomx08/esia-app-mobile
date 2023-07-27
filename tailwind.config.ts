import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      azul: "#1157A1",
      gris: "#D4D4D4"
    },
  },
  plugins: [],
} satisfies Config;
