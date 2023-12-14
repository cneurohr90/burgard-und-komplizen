/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,njk}"],
	theme: {
		borderWidth: {
			DEFAULT: "1px",
		},
		colors: {
			black: "#000000",
			white: "#ffffff",
		},
		fontFamily: {
			DEFAULT: "acumin-pro-wide",
		},
		fontSize: {
			DEFAULT: "1rem",
			md: "1.5rem",
			lg: "3rem",
			xl: "4rem",
			xxl: "18rem",
		},
		textShadow: {
			["outline-white"]:
				"-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff",
			["outline-white-transparent"]:
				"-1px -1px 0 rgba(255,255,255,0.175), 1px -1px 0 rgba(255,255,255,0.175), -1px 1px 0 rgba(255,255,255,0.175), 1px 1px 0 rgba(255,255,255,0.175)",
		},
	},
	plugins: [require("tailwindcss-textshadow"), require("tailwind-scrollbar")],
};
