import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Avro", ...fontFamily.sans], // Set Avro as the primary sans-serif font
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Calpir Green Shades
        "calpir-green": {
          50: "hsl(var(--calpir-green-50))",
          100: "hsl(var(--calpir-green-100))",
          200: "hsl(var(--calpir-green-200))",
          300: "hsl(var(--calpir-green-300))",
          400: "hsl(var(--calpir-green-400))",
          500: "hsl(var(--calpir-green-500))",
          600: "hsl(var(--calpir-green-600))",
          700: "hsl(var(--calpir-green-700))",
          800: "hsl(var(--calpir-green-800))",
          900: "hsl(var(--calpir-green-900))",
        },
        // Diverse Palette Shades
        "palette-blue": {
          50: "hsl(var(--palette-blue-50))",
          100: "hsl(var(--palette-blue-100))",
          200: "hsl(var(--palette-blue-200))",
          300: "hsl(var(--palette-blue-300))",
          400: "hsl(var(--palette-blue-400))",
          500: "hsl(var(--palette-blue-500))",
          600: "hsl(var(--palette-blue-600))",
          700: "hsl(var(--palette-blue-700))",
          800: "hsl(var(--palette-blue-800))",
          900: "hsl(var(--palette-blue-900))",
        },
        "palette-purple": {
          50: "hsl(var(--palette-purple-50))",
          100: "hsl(var(--palette-purple-100))",
          200: "hsl(var(--palette-purple-200))",
          300: "hsl(var(--palette-purple-300))",
          400: "hsl(var(--palette-purple-400))",
          500: "hsl(var(--palette-purple-500))",
          600: "hsl(var(--palette-purple-600))",
          700: "hsl(var(--palette-purple-700))",
          800: "hsl(var(--palette-purple-800))",
          900: "hsl(var(--palette-purple-900))",
        },
        "palette-orange": {
          50: "hsl(var(--palette-orange-50))",
          100: "hsl(var(--palette-orange-100))",
          200: "hsl(var(--palette-orange-200))",
          300: "hsl(var(--palette-orange-300))",
          400: "hsl(var(--palette-orange-400))",
          500: "hsl(var(--palette-orange-500))",
          600: "hsl(var(--palette-orange-600))",
          700: "hsl(var(--palette-orange-700))",
          800: "hsl(var(--palette-orange-800))",
          900: "hsl(var(--palette-orange-900))",
        },
        "palette-red": {
          50: "hsl(var(--palette-red-50))",
          100: "hsl(var(--palette-red-100))",
          200: "hsl(var(--palette-red-200))",
          300: "hsl(var(--palette-red-300))",
          400: "hsl(var(--palette-red-400))",
          500: "hsl(var(--palette-red-500))",
          600: "hsl(var(--palette-red-600))",
          700: "hsl(var(--palette-red-700))",
          800: "hsl(var(--palette-red-800))",
          900: "hsl(var(--palette-red-900))",
        },
        "palette-yellow": {
          50: "hsl(var(--palette-yellow-50))",
          100: "hsl(var(--palette-yellow-100))",
          200: "hsl(var(--palette-yellow-200))",
          300: "hsl(var(--palette-yellow-300))",
          400: "hsl(var(--palette-yellow-400))",
          500: "hsl(var(--palette-yellow-500))",
          600: "hsl(var(--palette-yellow-600))",
          700: "hsl(var(--palette-yellow-700))",
          800: "hsl(var(--palette-yellow-800))",
          900: "hsl(var(--palette-yellow-900))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.5rem", // Added for more arched boxes
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;