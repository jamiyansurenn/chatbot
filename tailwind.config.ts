import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B0B0F",
        card: "#111827"
      },
      boxShadow: {
        glow: "0 0 30px rgba(168, 85, 247, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
