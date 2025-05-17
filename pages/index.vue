<script setup lang="ts">
const { data } = await useAsyncData(() => queryCollection('pages').path('/pages').first())

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
})
</script>

<template>
  <ContentRenderer v-if="data.body" :value="data" />
  <div v-else>
    Home not found
  </div>
</template>
