/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				jetblack: '#2d2c2f',
				redCustom: '#Ef3340'
			},
			textColor: {
				ghostwhite: '#F1F0F5'
			},
			backgroundImage: {
				'bg-hero': "url('assets/bg.jpg')",
			}
		},
	},
	plugins: [],
}
