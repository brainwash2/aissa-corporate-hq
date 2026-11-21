import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  // Explicitly pointing to all folders in src
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css,js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: { DEFAULT: "var(--color-primary)", foreground: "var(--color-primary-foreground)" },
        secondary: { DEFAULT: "var(--color-secondary)", foreground: "var(--color-secondary-foreground)" },
        muted: { DEFAULT: "var(--color-muted)", foreground: "var(--color-muted-foreground)" },
        accent: { DEFAULT: "var(--color-accent)", foreground: "var(--color-accent-foreground)" },
        card: { DEFAULT: "var(--color-card)", foreground: "var(--color-card-foreground)" },
        cyan: "var(--color-cyan)",
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
      },
      fontFamily: {
        headline: ['Fira Code', 'monospace'],
        body: ['JetBrains Mono', 'monospace'],
        cta: ['Orbitron', 'sans-serif'],
        accent: ['Share Tech Mono', 'monospace'],
      },
      animation: {
        "glitch": "glitch 0.3s ease-in-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 10px var(--color-primary)" },
          "50%": { boxShadow: "0 0 20px var(--color-primary), 0 0 30px var(--color-primary)" },
        },
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
};
export default config;