<template>
  <aside
      class="w-[270px] h-screen border-r border-light-border dark:border-dark-border shrink-0 sticky top-0 inset-x-0">
    <div class="py-5 px-5 flex items-center gap-2">
      <UIcon class="w-8 h-8" name="i-heroicons-home-solid"></UIcon>
      <p>Night POS</p>
    </div>

    <div class=" mt-6 ">
      <nav class="w-full flex flex-col">
        <div class="overflow-hidden">
          <div class="h-[calc(100vh-190px)] overflow-y-auto overflow-x-hidden">
            <ul class="px-4">
              <p class="text-xs uppercase font-medium text-light-link dark:text-dark-link mb-2">Home</p>

              <template v-for="{to,text,icon} in menus" :key="`menu-${text}`">
                <ULink
                    :to="to"
                    class="flex items-center gap-2 w-full px-3 py-2.5 rounded-md font-normal text-sm mb-0.5"
                    active-class="bg-primary-500 text-white dark:text-white"
                    inactive-class="text-light-link dark:text-dark-link text-light-link hover:bg-primary-50 hover:text-primary dark:hover:bg-dark-gray"
                >
                  <UIcon class="w-5 h-5" :name="icon"/>
                  <span>{{ text }}</span>
                </ULink>
              </template>
            </ul>
          </div>
        </div>
        <div class="py-3 px-4">
          <div class="flex px-3 py-3 rounded-md font-normal bg-primary-100 dark:bg-gray-700 gap-3 items-center ">
            <UAvatar
                size="sm"
                src="https://avatars.githubusercontent.com/u/739984?v=4"
                alt="Avatar"
            />
            <div class="flex flex-col w-full">
              <p class="text-base">Mathew</p>
              <p class="text-xs text-dark-link">Cashier</p>
            </div>
            <UTooltip text="Logout" :popper="{ placement: 'top', offsetDistance: -4 }" >
              <UButton  size="lg"  variant="link" square icon="i-heroicons-power-16-solid"></UButton>
            </UTooltip>
          </div>
        </div>

      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">

type TMenus = {
  icon: string,
  to: string,
  text: string
}
const menus: TMenus[] = [
  {
    icon: 'i-heroicons-home',
    to: '/',
    text: 'Home'
  },
  {
    icon: 'i-heroicons-briefcase',
    to: '/dashboard',
    text: 'Dashboard'
  }
]
</script>

