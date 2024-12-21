import { z, defineCollection } from 'astro:content';

const defaultSchema = z.object({
  title: z.string(),
  pubDate: z.date().optional(),
  lang: z.string().optional(),
});

const imprintsCollection = defineCollection({
  type: 'content',
  schema: defaultSchema, // Adjust fields if needed
});

const policiesCollection = defineCollection({
  type: 'content',
  schema: defaultSchema, // Adjust fields if needed
});

export const collections = {
  imprints: imprintsCollection,
  policies: policiesCollection,
};
