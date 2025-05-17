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
      source: 'stages/**/*.yml',
      schema: z.object({
        slug: z.string().describe('The UNIQUE slug of the stage. This is used to identify and link the stage to other collections.'),
        name: z.string().describe('The name of the stage.'),
        place: z.string().optional().describe('An optional string indicating the location (building/room/address/etc.).'),
      }),
    }),

    speakers: defineCollection({
      type: 'page',
      source: 'speakers/**/*.md',
      schema: z.object({
        slug: z.string().describe('The UNIQUE slug of the speaker. This is used to identify and link the speaker to other collections. Use `firstname-lastname` as convention.'),
        name: z.string().describe('The name of the speaker.'),
        description: z.string().describe('A short description of the speaker - one line, best only a few words!'),
        // biography: z.string().describe('A biography of the speaker. This is shown on the speaker page.'), // this is the body of the markdown file itself
        image: z.string().editor({ input: 'media' }).describe('The image of the speaker.'),
        company: z.string().optional().describe('The name of the company the speaker works for.'),
        socialMedia: z.array(z.object({
          url: z.string().url().describe('Put in the full URL to the account/channel/etc.'),
          description: z.string().optional().describe('An optional description for the link.'),
          icon: z.string().optional().editor({ input: 'icon' }).describe('Optionally override the icon if it is not correctly detected.'),
        })).default([]),
      }),
    }),

    talks: defineCollection({
      type: 'page',
      source: 'talks/**/*.md',
      schema: z.object({
        slug: z.string().describe('The UNIQUE slug of the talk. This is used to identify and link the stage to other collections.'),
        type: z.enum(['talk', 'panel', 'workshop']).describe('The type of the talk.'),
        title: z.string().describe('The title of the talk.'),
        // abstract: z.string().describe('The abstract of the talk.'), // this is the body of the markdown file itself
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
