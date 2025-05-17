<script setup lang="ts">
import type { SpeakersCollectionItem, StagesCollectionItem, TalksCollectionItem } from '@nuxt/content'

const route = useRoute()

const { data: stages } = await useAsyncData(`${route.path}-stages`, () => queryCollection('stages').all())
const { data: speakers } = await useAsyncData(`${route.path}-speakers`, () => queryCollection('speakers').all())
const { data: talks } = await useAsyncData(`${route.path}-talks`, () => queryCollection('talks').all())

type ProcessedDataType = Omit<TalksCollectionItem, 'speakers' | 'stage'> & {
  speakers: SpeakersCollectionItem[]
  stage: StagesCollectionItem | null
}

const processedData = computed<ProcessedDataType[]>(() => {
  if (!talks.value || talks.value.length === 0) {
    return []
  }

  return talks.value.map((talk) => {
    const stage_hit = stages.value?.find(stage => stage.slug === talk.stage)
    const speakers_hit = speakers.value?.filter(speaker =>
      talk.speakers?.includes(speaker.slug),
    )

    return {
      ...talk,
      speakers: speakers_hit ?? [],
      stage: stage_hit ?? null,
    }
  })
})

const title = 'Schedule'
const description = 'List of talks for the event with time and stage information'

useSeoMeta({
  title,
  ogTitle: title,

  description,
  ogDescription: description,
})
</script>

<template>
  <template v-if="talks">
    <AppHeader :description="description" :title="title" />

    <div v-for="talk in processedData" :key="talk.slug">
      <NuxtLink :to="`/talks/${talk.slug}`">
        {{ talk.title }} at {{ talk.dateTime }}
      </NuxtLink>
    </div>
  </template>
</template>
