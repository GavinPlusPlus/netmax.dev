/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx,js,jsx}",
	],
	theme: {
		animation: {
			'fade-in': 'fade-in 0.5s ease-out',
			'fade-out': 'fade-out 0.5s ease-out',
		},
	},
	plugins: [require("tailwindcss-animate")],
}

