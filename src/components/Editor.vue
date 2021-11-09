<template>
<div>
    <div>Editor</div>
    <div id="container"></div>
</div>
</template>

<script setup>
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import { onMounted } from 'vue'


self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

onMounted(() => {
    monaco.editor.create(document.getElementById('container'), {
        value: "function hello() {\n\talert('Hello world!');\n}",
        language: 'javascript'
    });
})
</script>

<style scoped>
#container {
    height: 800px;
}
</style>