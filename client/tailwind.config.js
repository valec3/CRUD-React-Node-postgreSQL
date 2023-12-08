/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1a56db",
				secondary: "#ff6f00",
				tertiary: "#ffcc80",
				quaternary: "#ff9800",
				quinary: "#ff5722",
				senary: "#ff3d00",
			},
		},
	},
	plugins: [],
};
