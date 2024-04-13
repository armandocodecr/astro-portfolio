/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			boxShadow: {
				custom: '-1px 0px 66px 45px #17171C',
				customWhite: '-1px 0px 66px 45px #ffffff',
			},
			backgroundImage: {
				'fade': 'linear-gradient(90deg, #17171C 0%, transparent 30%, transparent 70%, #17171C 100%)',
				'fade-white': 'linear-gradient(90deg, #ffffff 0%, transparent 30%, transparent 70%, #ffffff 100%)',
			},
		},
	},
	plugins: [
		require('@headlessui/tailwindcss'),
    	require('@headlessui/tailwindcss')({ prefix: 'ui' })
	],
}
