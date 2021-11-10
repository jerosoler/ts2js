<template>
    <div class="options"> 
        <div>
            Target <select v-model="targetOptionValue" @change="compilets2js">
                <option v-for="opt in targetOptions" :key="opt" :value="opt">
                    {{opt}}
                </option>
            </select>
        </div>

        <div>
            Module <select v-model="moduleOptionValue" @change="compilets2js">
                <option v-for="opt in moduleOptions" :key="opt" :value="opt">
                    {{opt}}
                </option>
            </select>
        </div>
        <div>
            ModuleResolution <select v-model="moduleResolutionOptionValue" @change="compilets2js">
                <option v-for="opt in moduleResolutionOptions" :key="opt" :value="opt">
                    {{opt}}
                </option>
            </select>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useEditorStore } from '../stores/editor'
const targetOptionValue = ref("ES2015");
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
    "JSON"
];

const moduleOptionValue = ref("ES2015");
const moduleOptions = [
    "None",
    "CommonJs",
    "AMD",
    "UMD",
    "Systems",
    "ES2015",
    "ES2020",
    "ESNext"
];

const moduleResolutionOptionValue = ref("classic");
const moduleResolutionOptions = [
    "classic",
    "node"
];

const editorValue = useEditorStore();



/*
editorValue.$onAction(({
    name, // name of the action
    after, // hook after the action returns or resolves
  }) => {
    after(() => {
        if(name === "updateTypescript") {
            compilets2js();
        } 
    })
  })
*/

 
  editorValue.$subscribe((mutation, state) => {
    //if(mutation.events?.key === "typescript") {
      compilets2js();
    //};
  }); 

const compilets2js = () => {
    const compilerOptions = { "compilerOptions": {
                    "module": moduleOptionValue.value,
                    "target": targetOptionValue.value,
                    "moduleResolution": moduleResolutionOptionValue.value,
                    /*"strict": true,
                    "noImplicitAny": true,
                    "strictNullChecks": true,
                    "strictFunctionTypes": true,
                    "strictPropertyInitialization": true,
                    "strictBindCallApply": true,
                    "noImplicitThis": true,
                    "noImplicitReturns": true,
                    "alwaysStrict": true,
                    "esModuleInterop": true,
                    "declaration": true,
                    "experimentalDecorators": true,
                    "emitDecoratorMetadata": true,
                    "allowSyntheticDefaultImports": false,*/
                    }
                }

    const output = editorValue.typescript;
    // var output = transpileModule(input, { compilerOptions: compilerOptions, fileName: fileName, reportDiagnostics: !!diagnostics, moduleName: moduleName });
    const tsc = ts.transpileModule(output, compilerOptions);
    editorValue.updateJavascript(tsc.outputText);
}
onMounted(() => {  
    compilets2js() 
})

</script>


<style scoped>
.options {
    height: 80px;
    max-width: 1140px;
    margin: auto;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    align-content: center;
}


</style>    