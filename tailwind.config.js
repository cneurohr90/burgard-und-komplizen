/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,njk}"],
	theme: {
		animation: {
			"stack-to-front": "stack-to-front 500ms ease-in-out",
			"stack-to-back": "stack-to-back 500ms ease-in-out",
		},
		borderWidth: {
			DEFAULT: "1px",
		},
		colors: {
			black: "#000000",
			grey: "#393b3e",
			transparent: "transparent",
			white: "#ffffff",
		},
		fontFamily: {
			DEFAULT: "acumin-pro-wide",
		},
		fontSize: {
			DEFAULT: "1rem", // 16px
			md: "1.125rem", // 18px
			lg: "1.375rem", // 22px
			xl: "4.5rem", // 72px
			"md@md": "1.25rem", // 20px
			"lg@md": "1.75rem", // 28px"
			"xl@md": "10rem", // 160px
			"xl@lg": "13.75rem", // 220px
			// sm: "1.25rem", // 20px
			// md: "1.5rem", // 24px
			// lg: "3rem", // 48px
			// xl: "4.5rem", // 72px
			// xxl: "13.75rem", // 220px
		},
		keyframes: {
			"stack-to-front": {
				"0%": { "z-index": "calc(var(--prev-z-index) - 1)" },
				"49.9%": { "z-index": "calc(var(--prev-z-index) - 1)" },
				"50%": { margin: "0 120% 0 -120%", "z-index": "var(--z-index)" },
			},
			"stack-to-back": {
				"0%": { "z-index": "calc(var(--prev-z-index) + 1)" },
				"49.9%": { "z-index": "calc(var(--prev-z-index) + 1)" },
				"50%": { margin: "0 120% 0 -120%", "z-index": "var(--z-index)" },
			},
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1280px",
		},
		transitionDuration: {
			DEFAULT: "300ms",
			long: "500ms",
		},
		transitionTimingFunction: {
			DEFAULT: "ease-in-out",
		},
	},
	plugins: [
		require("tailwind-plugin-grid-areas"),
		require("tailwind-scrollbar"),
		require("tailwindcss-3d"),
		require("tailwindcss-noscript"),
	],
};
