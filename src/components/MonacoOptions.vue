<template>
    <div class="options"> 
        Target <select v-model="targetOptionValue" @change="compilets2js">
            <option v-for="opt in targetOptions" :key="opt" :value="opt">
                {{opt}}
            </option>
        </select>

        Module <select v-model="moduleOptionValue" @change="compilets2js">
            <option v-for="opt in moduleOptions" :key="opt" :value="opt">
                {{opt}}
            </option>
        </select>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useEditorStore } from '../stores/editor'
const targetOptionValue = ref("ESNext");
const targetOptions = [
    "ES3",
    "ES5",
    "ES2015",
    "ES2016",
    "ES2017",
    "ES2018",
    "ES2019",
    "ES2020",
    "ES2021",
    "ESNext",
    "JSON",
];

const moduleOptionValue = ref("ESNext");
const moduleOptions = [
    "None",
    "CommonJs",
    "AMD",
    "UMD",
    "Systems",
    "ES2015",
    "ES2020",
    "ESNext",
];

const editorValue = useEditorStore();
editorValue.$subscribe((mutation, state) => {
    if(mutation.events.key === "typescript") {
      compilets2js();
    };
  });

const compilets2js = () => {
const compilerOptions = { "compilerOptions": {
                "module": moduleOptionValue.value,
                "target": targetOptionValue.value,
                "moduleResolution": "classic",
                "allowSyntheticDefaultImports": false,
            }}

const output = editorValue.typescript;
const tsc = ts.transpileModule(output, compilerOptions);
console.log(tsc);
editorValue.updateJavascript(tsc.outputText);
}
onMounted(() => {  compilets2js() })

</script>


<style scoped>
.options {
    height: 80px;
    max-width: 1140px;
    margin: auto;
}
</style>