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
			transparent: "transparent",
			white: "#ffffff",
		},
		fontFamily: {
			DEFAULT: "acumin-pro-wide",
		},
		fontSize: {
			DEFAULT: "1rem",
			sm: "1.25rem",
			md: "1.5rem",
			lg: "3rem",
			xl: "4.5rem",
			xxl: "18rem",
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
			md: "768px",
			lg: "1280px",
		},
		textShadow: {
			["outline-white"]:
				"-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff",
			["outline-white-transparent"]:
				"-1px -1px 0 rgba(255,255,255,0.175), 1px -1px 0 rgba(255,255,255,0.175), -1px 1px 0 rgba(255,255,255,0.175), 1px 1px 0 rgba(255,255,255,0.175)",
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
		require("tailwindcss-textshadow"),
	],
};
