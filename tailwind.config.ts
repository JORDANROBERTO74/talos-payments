import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#0e7c6b",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#f2b84b",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#0a1f2c",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Talos brand scale — warm, premium
        ink: {
          DEFAULT: "#0a1f2c",
          soft: "#43514d",
          mute: "#66736e",
        },
        sand: {
          DEFAULT: "#fbf7ef",
          deep: "#f2ebdd",
          line: "#e5dbc9",
        },
        teal: {
          DEFAULT: "#0e7c6b",
          deep: "#0a5e51",
          soft: "#e3f2ed",
        },
        amber: {
          DEFAULT: "#f2b84b",
          deep: "#9a6a12",
          soft: "#fdf1d6",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 24px 60px -32px rgba(10, 31, 44, 0.35)",
        lift: "0 40px 90px -40px rgba(10, 31, 44, 0.45)",
        ring: "0 0 0 1px rgba(10, 31, 44, 0.06)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
