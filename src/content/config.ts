import {defineCollection, z} from "astro:content";

export const BlogSchema = z.object({
	title: z.string(),
	date: z.string(),
	summary: z.string(),
});

const blogCollection = defineCollection({
	type: 'content',
	schema: BlogSchema
});

const simpleCollection = defineCollection({
	type: 'content',
});

export const collections = {
	'blog': blogCollection,
	'simple': simpleCollection,
}
