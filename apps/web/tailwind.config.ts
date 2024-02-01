import { type Config } from "tailwindcss";

const config = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
