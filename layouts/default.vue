<template>
  <main>
    <div class="flex">
      <the-side-navigation v-model="isSmall"/>
      <div class="w-full page-wrapper overflow-x-hidden">
        <the-header @click-menus="onClickMenu"/>
        <div class="max-w-full pt-6 ">
          <slot/>
        </div>
      </div>
    </div>
    <USlideover v-model="isOpenSlideNavigation" side="left" :ui="{ width: 'w-screen max-w-[270px]'}">
      <logo-brand-side-navigation/>
      <menus-side-navigation />
    </USlideover>
  </main>
</template>

<script setup lang="ts">

import TheHeader from "~/components/TheHeader.vue";
import TheSideNavigation from "~/components/TheSideNavigation.vue";
import LogoBrandSideNavigation from "~/components/sideNavigation/LogoBrandSideNavigation.vue";
import MenusSideNavigation from "~/components/sideNavigation/MenusSideNavigation.vue";

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const isSmall = ref<boolean>(false)
const isOpenSlideNavigation = ref<boolean>(false)

const smallerThanMd = breakpoints.smaller('md')

const onClickMenu = () => {
  if(smallerThanMd.value) {
    isOpenSlideNavigation.value = !isOpenSlideNavigation.value
  }else{
    isSmall.value = !isSmall.value
  }
}
</script>

