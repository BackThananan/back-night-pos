<template>
  <div class="flex flex-col py-5 md:py-7 px-7 bg-primary-600/20 rounded-lg">
    <p class="text-xl font-medium text-dark dark:text-white mb-3">{{title}}</p>
    <ol class="flex items-center whitespace-nowrap">
      <template v-for="item in links">
        <li class="flex items-center">
          <a class="opacity-80 text-sm text-light-link dark:text-dark-link leading-none" :href="item.to">
            {{ item.label }}
          </a>
        </li>
        <li class="last:hidden">
          <div class="p-0.5 rounded-full bg-light-link dark:bg-dark-link mx-2.5 flex items-center"></div>
        </li>
      </template>
    </ol>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  links: {
    label: string,
    to: string
  }[]
}>()
</script>

