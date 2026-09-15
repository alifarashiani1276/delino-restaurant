/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindFormPlugin from "@tailwindcss/forms";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[class="dark-mode"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: withOpacity("--color-primary-900"),
          800: withOpacity("--color-primary-800"),
          700: withOpacity("--color-primary-700"),
          600: withOpacity("--color-primary-600"),
          500: withOpacity("--color-primary-500"),
          400: withOpacity("--color-primary-400"),
          300: withOpacity("--color-primary-300"),
          200: withOpacity("--color-primary-200"),
          100: withOpacity("--color-primary-100"),
        },
        secondary: {
          900: withOpacity("--color-secondary-900"),
          800: withOpacity("--color-secondary-800"),
          700: withOpacity("--color-secondary-700"),
          600: withOpacity("--color-secondary-600"),
          500: withOpacity("--color-secondary-500"),
          400: withOpacity("--color-secondary-400"),
          300: withOpacity("--color-secondary-300"),
          200: withOpacity("--color-secondary-200"),
          100: withOpacity("--color-secondary-100"),
          50: withOpacity("--color-secondary-50"),
          0: withOpacity("--color-secondary-0"),
        },
        success: withOpacity("--color-success"),
        warning: withOpacity("--color-warning"),
        error: withOpacity("--color-error"),

        // توکن‌های سطحی (بین لایت/دارک تغییر می‌کنن)
        canvas: withOpacity("--color-bg"),
        surface: withOpacity("--color-surface"),
        "surface-alt": withOpacity("--color-surface-alt"),
        ink: withOpacity("--color-text"),
        muted: withOpacity("--color-muted"),
        line: withOpacity("--color-border"),
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        sans: ["Vazir", ...fontFamily.sans],
      },

      // سایز فونت‌های واکنش‌گرا (fluid): تو صفحه‌های کوچیک خودکار کوچیک‌تر می‌شن
      // و تو صفحه‌های بزرگ به سایز کامل می‌رسن؛ روی همه‌ی text-* های پروژه اعمال میشه
      fontSize: {
        xs: ["clamp(0.7rem, 0.66rem + 0.2vw, 0.75rem)", { lineHeight: "1rem" }],
        sm: [
          "clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem)",
          { lineHeight: "1.25rem" },
        ],
        base: [
          "clamp(0.9rem, 0.84rem + 0.3vw, 1rem)",
          { lineHeight: "1.5rem" },
        ],
        lg: [
          "clamp(1rem, 0.92rem + 0.4vw, 1.125rem)",
          { lineHeight: "1.75rem" },
        ],
        xl: ["clamp(1.1rem, 1rem + 0.5vw, 1.25rem)", { lineHeight: "1.75rem" }],
        "2xl": [
          "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
          { lineHeight: "2rem" },
        ],
        "3xl": [
          "clamp(1.5rem, 1.25rem + 1.25vw, 1.875rem)",
          { lineHeight: "2.25rem" },
        ],
        "4xl": [
          "clamp(1.75rem, 1.4rem + 1.75vw, 2.25rem)",
          { lineHeight: "2.5rem" },
        ],
        "5xl": ["clamp(2.1rem, 1.6rem + 2.5vw, 3rem)", { lineHeight: "1.1" }],
        "6xl": [
          "clamp(2.5rem, 1.8rem + 3.5vw, 3.75rem)",
          { lineHeight: "1.1" },
        ],
      },
    },
  },
  plugins: [
    tailwindFormPlugin({
      strategy: "class",
    }),
  ],
};
