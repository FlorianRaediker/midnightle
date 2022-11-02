const colors = require("tailwindcss/colors")

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        short: { raw: '(max-height: 650px)' },
        xshort: { raw: '(max-height: 560px)' },
        xxshort: { raw: '(max-height: 490px)' },
      },
      colors: {
        background: "var(--color-background)",

        // cells (hover: and active: for keyboard)
        empty: "var(--color-empty)",
        filledText: "var(--color-filled-text)",
        filledBorder: "var(--color-filled-border)",
        absent: "var(--color-absent)",
        present: {
          DEFAULT: "var(--color-present)",
          hover: "var(--color-present-hover)",
          active: "var(--color-present-active)",
        },
        correct: {
          DEFAULT: "var(--color-correct)",
          hover: "var(--color-correct-hover)",
          active: "var(--color-correct-active)",
        },

        // keyboard
        key: {
          DEFAULT: "var(--color-key)",
          hover: "var(--color-key-hover)",
          active: "var(--color-key-active)",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
