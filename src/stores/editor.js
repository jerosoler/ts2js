import { defineStore } from 'pinia'

export const useEditorStore = defineStore({
    id: 'editor',
    state: () => ({
        typescript: `let decimal: number = 6;\nlet hex: number = 0xf00d;\nlet binary: number = 0b1010;\nlet octal: number = 0o744;\nlet big: bigint = 100n;`,
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

