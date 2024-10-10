// @ts-check
import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sectionize from '@hbsnow/rehype-sectionize';


// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind()],
	markdown: {
		rehypePlugins: [sectionize],
	},
});
