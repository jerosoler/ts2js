<template>
  <header>
    <h1>Ts2Js</h1>  
    <button @click="toggleDark()">
      Is Dark: {{ isDark }}
    </button>
  </header>
</template>

<script setup>
import { useToggle } from '@vueuse/core'
import { isDark } from '../composables/dark'

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

</style>