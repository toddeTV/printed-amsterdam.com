<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const yearStart = 2025
const yearCurrent = new Date().getFullYear()
const yearSpan = yearStart === yearCurrent ? yearStart : `${yearStart} - ${yearCurrent}`

const items: NavigationMenuItem[] = [
  {
    label: 'Become a sponsor',
    to: '',
  },
  // {
  //   label: 'Location',
  //   to: '/faq/location',
  // },
  {
    label: 'Contact',
    to: '',
  },
  // {
  //   label: 'Apply as Speaker',
  //   to: '',
  // },
  {
    label: 'Privacy Policy',
    to: '',
  },
  {
    label: 'Legal Notice',
    to: '',
  },
]
</script>

<template>
  <USeparator class="h-px" />

  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ yearSpan }}
      </p>
    </template>

    <UNavigationMenu
      :items="items"
      :ui="{
        list: 'flex-col xs:flex-row',
        item: 'p-0',
      }"
      variant="link"
    />

    <template #right>
      <UButton
        aria-label="X"
        color="neutral"
        icon="i-simple-icons-x"
        target="_blank"
        to="https://x.com/PrintedEurope"
        variant="ghost"
      />
      <UButton
        aria-label="X"
        color="neutral"
        icon="i-simple-icons-instagram"
        target="_blank"
        to="https://www.instagram.com/printedeurope"
        variant="ghost"
      />
      <UButton
        aria-label="X"
        color="neutral"
        icon="i-simple-icons-linkedin"
        target="_blank"
        to="https://www.linkedin.com/company/printed-worldconference"
        variant="ghost"
      />
      <UButton
        aria-label="GitHub"
        color="neutral"
        icon="i-simple-icons-github"
        target="_blank"
        to="https://github.com/toddeTV/printed-europe.com"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
