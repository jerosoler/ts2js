import { defineStore } from 'pinia'

export const useEditorStore = defineStore({
    id: 'editor',
    state: () => ({
        typescript: `
        class Employee {
            empCode: number;
            empName: string;
        
            constructor(code: number, name: string) {
                    this.empName = name;
                    this.empCode = code;
            }
        
            getSalary() : number {
                return 10000;
            }
        }
        `,
        javascript: '',
    }),

    actions: {
        updateTypescript(typescript) {
            this.typescript = typescript;
        },
        updateJavascript(javascript) {
            this.javascript = javascript;
        }
    }

})

