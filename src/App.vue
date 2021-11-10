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
  --border:  rgb(43 185 185);
  --outline: rgb(16 127 255);   
  
}

html.dark{
  --bg: #1c1c1c;
  --color: #ffffff;
  --bg-editor: #2d2d2d;
  --border:  rgb(209 94 13);
  --outline: rgb(124 9 149);
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


button, select {
    border-radius: 4px; 
    height: 35px;
    line-height: 35px;
    margin-left: 5px;
    padding: 0px 5px;
    border: 2px solid #2d2d2d;
    background: #ffffff;
}
select {
  width: 120px;
}

 select:focus, select:focus-visible, select:focus-within, select:active, button:focus, button:focus-visible, button:focus-within button:active {
    border: 2px solid var(--border);
    outline: 2px solid var(--outline) !important;
}



a {
  color: var(--border);
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  color: var(--outline);
}

svg {
  position:relative;
  top: 3px;
}

</style>
