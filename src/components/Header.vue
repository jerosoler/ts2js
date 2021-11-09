<template>
  <h1>Ts2Js</h1>

  
  <button @click="toggleDark()">
    Is Dark: {{ isDark }}
  </button>
  
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark);
</script>