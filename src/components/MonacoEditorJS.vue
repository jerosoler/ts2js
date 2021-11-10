<template>
    <div ref="editor"></div>
</template>

<script setup>
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import { onMounted, ref, watch } from 'vue'
import { isDark } from '../composables/dark'
import { useEditorStore } from '../stores/editor'


self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

const editor = ref(null)
const props = defineProps({
    language: String,
})

const editorValue = useEditorStore();

watch(isDark, (isDark) => {
    monaco.editor.setTheme(isDark ? 'vs-dark' : 'vs')
})

onMounted(() => {    
 const MonacoEditor = monaco.editor.create(editor.value, {
        value: editorValue.javascript,
        language: props.language,
        theme: isDark.value ? 'vs-dark' : 'vs',
        readOnly: true
    });
  
  editorValue.$subscribe((mutation, state) => {
    //if(mutation.events?.key === "javascript") {
      MonacoEditor.setValue(editorValue.javascript);
    //};
  }); 
  

 /* editorValue.$onAction(({
    name, // name of the action
    after, // hook after the action returns or resolves
  }) => {
    after(() => {
      console.log(name);
        if(name == "updateJavascript") {
            MonacoEditor.setValue(editorValue.javascript);
        }
    }) 
    // react to store actions
  })*/
}) 

</script>

<style scoped>
div {
    position: relative;
    border-radius: 8px;
    width: 48%;
    margin:auto;
    height: calc(100vh - 220px);
    
}
</style>