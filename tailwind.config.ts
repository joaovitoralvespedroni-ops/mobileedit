import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#02040a",
          900: "#050a18",
          800: "#0a1328",
          700: "#111d3a",
        },
        neon: {
          DEFAULT: "#1e90ff",
          400: "#4db3ff",
          300: "#7fd0ff",
          cyan: "#22d3ee",
          deep: "#1d4ed8",
        },
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(30,144,255,.55)" },
          "50%": { boxShadow: "0 0 0 14px rgba(30,144,255,0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
