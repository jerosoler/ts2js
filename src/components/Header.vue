<template>
  <header>
    <h1><icon-ts /><icon-two /><icon-js /> Typescript to Javascript compiler</h1>  
    <div>
      <button @click="toggleDark()">
        <icon-day v-if="isDark"/>
        <icon-night v-else />
      </button>
      <a href="https://github.com/jerosoler/ts2js" target="_blank"><icon-github class="github" /></a>
    </div>
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
import IconGithub from '~icons/carbon/logo-github/'


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

button,.github {
  border: 0px;
  background: 0px;
  color: var(--color);
  font-size: 24px;
  cursor: pointer;
}
.github {
  margin-left: 10px;
}



</style>