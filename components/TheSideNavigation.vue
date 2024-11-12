<template>
  <aside
      class="hidden md:block h-screen border-r border-light-border dark:border-dark-border shrink-0 sticky top-0 inset-x-0"
      :class="isSmall ? 'w-[74px]' : 'w-[270px]'"
  >

    <logo-brand-side-navigation :is-small="isSmall" />

    <menus-side-navigation :is-small="isSmall" />

  </aside>
</template>

<script setup lang="ts">
import LogoBrandSideNavigation from "~/components/sideNavigation/LogoBrandSideNavigation.vue";
import MenusSideNavigation from "~/components/sideNavigation/MenusSideNavigation.vue";

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isSmall = computed<boolean>({
  get() {
    return props.modelValue
  },
  set(value: boolean) {
    emit('update:modelValue', value)
  },
})
</script>

