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
        slug: z.string().describe('The slug of the stage. This is used to identify and link the stage to other collections.'),
        name: z.string(),
        place: z.string().optional().describe('An optional string indicating the location (building/room/address/etc.).'),
      }),
    }),

    speakers: defineCollection({
      type: 'data',
      source: 'speakers/**/*.json',
      schema: z.object({
        slug: z.string().describe('The slug of the speaker. This is used to identify and link the speaker to other collections. Use `firstname-lastname` as convention.'),

        name: z.string(),
        description: z.string(),
        biography: z.string(),
        image: z.string().editor({ input: 'media' }).describe('The image of the speaker.'),

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
        type: z.enum(['talk', 'panel', 'workshop']).describe('The type of the talk.'),
        title: z.string(),
        description: z.string(),
        speakers: z.array(z.string()).default([]).describe('An array of speaker slugs.'),
        dateTime: z.date().describe('The date and time of the talk when it takes place.'),
        stage: z.string().describe('The slug of the stage where the talk takes place.'),
        resources: z.array(z.object({
          url: z.string().url().describe('Put in the full URL to the resource.'),
          description: z.string().optional().describe('An optional description for the link.'),
          icon: z.string().optional().editor({ input: 'icon' }).describe('Optionally override the icon if it is not correctly detected.'),
        })).default([]),
      }),
    }),
  },
})
