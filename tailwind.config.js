/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				back: '#101933',
				backAccent: '#152D49',
				backHilghligt: '#17254A',
				baseColor: '#8396BD',
				accentColor: '#c5d0ec',
				highlightColor: '#58e5b1',
			},
			fontFamily: {
				main: 'Inter',
			},
			textColor: {
				baseColor: '#8396BD',
				accentColor: '#c5d0ec',
				highlightColor: '#58e5b1',
			},
		},
	},
	plugins: [],
};
