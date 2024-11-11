<template>
  <header
      class="sticky h-[60px] top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap text-sm bg-white/[0.5] dark:bg-dark/[0.5] backdrop-blur-md">
    <div class="w-full h-full mx-auto px-4 lg:py-1 py-3 lg:px-4">
      <div class="relative flex w-full h-full items-center justify-between ">
        <UButton
            :ui="{rounded: 'rounded-full'}"
            size="lg" color="gray" variant="ghost" icon="i-heroicons-bars-3-20-solid"></UButton>
        <div class="flex gap-4">
          <UButton
              :ui="{rounded: 'rounded-full'}"
              size="lg" color="gray" variant="ghost"
              :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              @click="isDark = !isDark"
          >
          </UButton>
          <UAvatar
              size="md"
              src="https://avatars.githubusercontent.com/u/739984?v=4"
              alt="Avatar"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>
