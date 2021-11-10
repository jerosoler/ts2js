<template>
<MonacoOptions />
<div class="container">
  <MonacoEditorTS language="typescript" />
  <MonacoEditorJS language="javascript" />
</div>
</template>

<script setup>
import MonacoEditorTS from './MonacoEditorTS.vue'
import MonacoEditorJS from './MonacoEditorJS.vue'
import MonacoOptions from './MonacoOptions.vue'
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin:auto;
}
</style>
