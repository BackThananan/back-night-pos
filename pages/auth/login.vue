<template>
  <main class="w-full h-screen bg-primary-600/50 dark:bg-primary-900/20">
    <div class="flex justify-center items-center w-full h-full">
      <div class="w-full">
        <div class="max-w-[400px] px-3 mx-auto w-full">
          <div class="w-full bg-white dark:bg-gray-900 dark:border border-gray-600 shadow rounded-xl p-7">
            <logo-brand-side-navigation class="justify-center" :is-small="false"/>
            <div class="flex flex-col gap-4 mt-7">
              <UFormGroup label="Username">
                <UInput size="lg"/>
              </UFormGroup>

              <UFormGroup label="Password">
                <UInput size="lg"/>
              </UFormGroup>

              <UButton class="mt-2.5" size="xl" block>Sign In</UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import LogoBrandSideNavigation from "~/components/sideNavigation/LogoBrandSideNavigation.vue";

definePageMeta({
  layout: false
})
</script>
