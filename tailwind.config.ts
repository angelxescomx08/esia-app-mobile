import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      azul: "#1157A1",
      gris: "#D4D4D4",
      "azul-claro": "#729FC9",
      blanco: "#fff",
    },
  },
  plugins: [],
} satisfies Config;
