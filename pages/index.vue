<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(route.path, () => queryCollection('index').first())

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Landing Page not Found',
    fatal: true,
  })
}

const title = data.value.seo.title || data.value.title
const description = data.value.seo.description || data.value.description

useSeoMeta({
  title,
  ogTitle: title,

  description,
  ogDescription: description,
})
</script>

<template>
  <template v-if="data">
    Home goes here
    <ContentRenderer v-if="data.body" :value="data" />
    <div v-else>
      Home not found
    </div>
  </template>
</template>
