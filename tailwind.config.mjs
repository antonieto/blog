/** @type {import('tailwindcss').Config} */


const themes = {
	'gruvbox': {
		'bg': {
			dim: '#F3EAC7',
			0: '#F9F5D7',
			1: '#F5EDCA',
			2: '#F3EAC7',
			3: '#F2E5BC',
			4: '#EEE0B7',
			5: '#EBDBB2',
		},
		'bg_statusline': {
			1: '#F5EDCA',
			2: '#F3EAC7',
			3: '#EEE0B7',
		},
		'bg_diff': {
			blue: '#E0E9D3',
			green: '#E4EDC8',
			red: '#F8E4C9',
		},
		'bg_visual': {
			green: '#DDE5C2',
			blue: '#D9E1CC',
			yellow: '#F9EABF',
			red: '#F0DDC3',
		},
		'bg_current_word': '#F3EAC7',
		'fg': {
			0: '#514036',
			1: '#514036',
		},
		'red': '#AF2528',
		'orange': '#B94C07',
		'yellow': '#B4730E',
		'green': '#72761E',
		'aqua': '#477A5B',
		'blue': '#266B79',
		'purple': '#924F79',
		'bg_red': '#AE5858',
		'bg_green': '#6F8352',
		'bg_yellow': '#A96B2C',
		'grey': {
			0: '#A89984',
			1: '#928374',
			2: '#7C6F64',
		}
	}
};

const theme = themes.gruvbox;

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'theme': theme,
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
