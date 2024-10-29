import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e1e8f0", // Very Light Dark Blue
          100: "#b3c2d8", // Light Dark Blue
          200: "#7f9bbf", // Lighter Dark Blue
          300: "#4d749e", // Soft Dark Blue
          400: "#2b557f", // Medium Dark Blue
          500: "#132040", // Base Dark Blue (#132040)
          600: "#0f1a34", // Darker Dark Blue
          700: "#0c1428", // Deeper Dark Blue
          800: "#091020", // Dark Navy
          900: "#050c14", // Very Dark Navy
        },

        // Primary Colors (Dark Mode)
        "dark-primary": {
          50: "#132040",
          100: "#1a2a59",
          200: "#203372",
          300: "#283c8b",
          400: "#3046a4",
          500: "#3b51c3",
          600: "#4a5dce",
          700: "#5a6ad7",
          800: "#6a78e0",
          900: "#7987e9",
        },

        secondary: {
          50: "#f5ebd8", // Very Light Gold Brown
          100: "#ead3b2", // Light Gold Brown
          200: "#d1b58b", // Lighter Gold Brown
          300: "#b89e65", // Soft Gold Brown
          400: "#a68855", // Medium Gold Brown
          500: "#9B7B4A", // Base Gold Brown (#9B7B4A)
          600: "#836036", // Darker Gold Brown
          700: "#6d502d", // Deeper Gold Brown
          800: "#59402a", // Dark Gold Brown
          900: "#3f2e1d", // Very Dark Gold Brown
        },

        // Secondary Colors (Golden) for Dark Mode
        "dark-secondary": {
          50: "#332b1a",
          100: "#4c3f26",
          200: "#665334",
          300: "#7f6742",
          400: "#997b4f",
          500: "#b3915c",
          600: "#cca56a",
          700: "#e6b978",
          800: "#ffcc85",
          900: "#ffd699",
        },

        // Text Colors
        "text-primary": "#1a1a1a", // Light Mode Main Text
        "dark-text-primary": "#ffffff", // Dark Mode Main Text
        "text-secondary": "#4a4a4a", // Light Mode Subtext
        "dark-text-secondary": "#cccccc", // Dark Mode Subtext
        "text-muted": "#6b6b6b", // Light Mode Muted Text
        "dark-text-muted": "#b3b3b3", // Dark Mode Muted Text
        "text-placeholder": "#a8a8a8", // Light Mode Placeholder
        "dark-text-placeholder": "#8c8c8c", // Dark Mode Placeholder

        // Background Colors
        "bg-main": "#ffffff", // Light Mode Main Background
        "dark-bg-main": "#121212", // Dark Mode Main Background
        "bg-secondary": "#f7f7f7", // Light Mode Secondary Background
        "dark-bg-secondary": "#1e1e1e", // Dark Mode Secondary Background
        "bg-muted": "#e0e0e0", // Light Mode Muted Background
        "dark-bg-muted": "#2b2b2b", // Dark Mode Muted Background
        "bg-input": "#f0f0f0", // Light Mode Input Background
        "dark-bg-input": "#333333", // Dark Mode Input Background
        "bg-card": "#ffffff", // Light Mode Card Background
        "dark-bg-card": "#252525", // Dark Mode Card Background

        // Shadow Colors
        "shadow-base": "rgba(0, 0, 0, 0.1)", // Light Mode Shadow
        "dark-shadow-base": "rgba(255, 255, 255, 0.05)", // Dark Mode Shadow
        "shadow-hover": "rgba(0, 0, 0, 0.15)", // Light Mode Hover Shadow
        "dark-shadow-hover": "rgba(255, 255, 255, 0.1)", // Dark Mode Hover Shadow
        "shadow-focus": "rgba(0, 0, 0, 0.2)", // Light Mode Focus Shadow
        "dark-shadow-focus": "rgba(255, 255, 255, 0.15)", // Dark Mode Focus Shadow

        // Button and Input States
        "btn-primary": "#1a80ff", // Light Mode Primary Button
        "dark-btn-primary": "#3046a4", // Dark Mode Primary Button
        "btn-primary-hover": "#0066cc", // Light Mode Primary Hover
        "dark-btn-primary-hover": "#3b51c3", // Dark Mode Primary Hover
        "btn-primary-active": "#003d7d", // Light Mode Primary Active
        "dark-btn-primary-active": "#4a5dce", // Dark Mode Primary Active
        "btn-secondary": "#57b479", // Light Mode Secondary Button
        "dark-btn-secondary": "#278759", // Dark Mode Secondary Button
        "btn-secondary-hover": "#3a9460", // Light Mode Secondary Hover
        "dark-btn-secondary-hover": "#2d9f68", // Dark Mode Secondary Hover
        "btn-secondary-active": "#2e7550", // Light Mode Secondary Active
        "dark-btn-secondary-active": "#34b777", // Dark Mode Secondary Active
        "btn-disabled": "#a8a8a8", // Disabled Button
        "dark-btn-disabled": "#8c8c8c", // Dark Mode Disabled Button

        // Input Border and States
        "input-border": "#d1d1d1", // Light Mode Input Border
        "dark-input-border": "#444444", // Dark Mode Input Border
        "input-focus": "#1a80ff", // Light Mode Input Focus
        "dark-input-focus": "#3046a4", // Dark Mode Input Focus
        "input-error": "#d9534f", // Error State (Both Modes)
      },
      boxShadow: {
        "inner-custom": "inset 0px 0px 20px 0px rgba(0, 0, 0, 0.08)",
      },

      keyframes: {
        scrollRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-75%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scrollRight: "scrollRight 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
