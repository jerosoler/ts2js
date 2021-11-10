<template>
  <header>
    <h1><icon-ts /><icon-two /><icon-js /> Typescript to Javascript compiler</h1>  
    
    <button @click="toggleDark()">
      <icon-day v-if="isDark"/>
      <icon-night v-else />
    </button>
  </header>
</template>

<script setup>
import { useToggle } from '@vueuse/core'
import { isDark } from '../composables/dark'
import IconTs from '~icons/vscode-icons/file-type-typescript-official'
import IconJs from '~icons/vscode-icons/file-type-js-official'
import IconDay from '~icons/carbon/sun/'
import IconNight from '~icons/carbon/moon/'
import IconTwo from '~icons/carbon/number-small-2/'


const toggleDark = useToggle(isDark);
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 80px;
  max-width: 1140px;
  margin: auto;
  
}

button {
  border: 0px;
  background: 0px;
  color: var(--color);
  font-size: 24px;
  cursor: pointer;
}

</style>