import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#090D16",
          deep: "#060910",
          surface: "#0D1322",
          elevated: "#111C30",
          border: "#1B2436",
        },
        accent: {
          violet: "#6366F1",
          cyan: "#22D3EE",
        },
        muted: "#94A0B8",
      },
      boxShadow: {
        glow: "0 0 32px rgba(99, 102, 241, 0.35)",
        "glow-sm": "0 0 14px rgba(99, 102, 241, 0.28)",
        "glow-cyan": "0 0 32px rgba(34, 211, 238, 0.3)",
        card: "0 10px 40px rgba(0, 0, 0, 0.35)",
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};
export default config;