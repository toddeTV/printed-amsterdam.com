import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // -------- static pages

    pages: defineCollection({
      type: 'page',
      source: 'pages/**/*.md',
    }),

    // -------- linked data

    stages: defineCollection({
      type: 'data',
      source: 'stages/**/*.json',
      schema: z.object({
        name: z.string(),
        place: z.string().optional().describe('An optional string indicating the location (building/room/address).'),
      }),
    }),

    speakers: defineCollection({
      type: 'data',
      source: 'speakers/**/*.json',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        biography: z.string(),
        image: z.string(),

        company: z.string().optional(),

        socialMedia: z.array(z.object({
          url: z.string().url().describe('Put in the full URL to the account/channel/etc.'),
          description: z.string().optional().describe('An optional description for the link.'),
          icon: z.string().optional().editor({ input: 'icon' }).describe('Optionally override the icon if it is not correctly detected.'),
        })).default([]),
      }),
    }),

    talks: defineCollection({
      type: 'data',
      source: 'talks/**/*.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        speakers: z.array(z.string()),
      }),
    }),
  },
})
