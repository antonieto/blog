/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent:         'var(--color-accent)',
			bg:             'var(--color-bg)',
				surface:        'var(--color-surface)',
				'surface-hover':'var(--color-surface-hover)',
				border:         'var(--color-border)',
				fg:             'var(--color-fg)',
				'fg-muted':     'var(--color-fg-muted)',
				scrollbar:      'var(--color-scrollbar)',
				red:            'var(--color-red)',
				orange:         'var(--color-orange)',
				yellow:         'var(--color-yellow)',
				green:          'var(--color-green)',
				aqua:           'var(--color-aqua)',
				blue:           'var(--color-blue)',
				purple:         'var(--color-purple)',
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
