<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import Editor from './components/Editor.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header/>
  <div class="wrapper">
    <Editor />
  </div>
  <Footer />
</template>

<style>

:root {
  --bg: #ffffff;
  --color: #1c1c1c;
  --bg-editor: #e7e7e7;
}

html.dark{
  --bg: #1c1c1c;
  --color: #ffffff;
  --bg-editor: #2d2d2d;
}


*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
 
}
html {
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: transparent;
  width: 100%;
  height: 100vh;
}
body {
    width: 100%;
  height: 100vh;
  background: var(--bg);
  color: var(--color);
}
.wrapper {
  position: relative;
  height: calc(100vh - 140px); 
  max-height: calc(100vh - 140px);
}

.monaco-editor, .monaco-editor .overflow-guard {
  border-radius: 4px;
  border: 1px solid var(--bg-editor);
}
</style>
