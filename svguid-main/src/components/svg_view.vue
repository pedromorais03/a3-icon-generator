<template>
    <div id="svg-container" class="px-3 mt-3 flex justify-center">
        <svg class="w-[500px] h-[500px]" width="1000" height="1000"
             viewBox="0 0 500 500" version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
             <g id="draw" v-html="innercode"></g>
        </svg>
    </div>
</template>

<script>
import { SVG, Container, extend } from '@svgdotjs/svg.js'
import widget from "../widget/mywidget.js"
import keygen from "../keygen.js"
import svgjsblob from "../blob.js"
import { newColor, newBg, newScale } from './buttons.vue'

export default {
    data() {
        return {
            innercode: '',
            key: null,
            SVG: null,
        }
    },

    mounted() {
        if(!this.key) {
            this.refresh(keygen.getKeyParams(""))
        }
    },

    methods: {
        
        refresh(key) {
            this.key = key
            let col = newColor
            let bg = newBg
            let sca = newScale
            extend(Container, svgjsblob)
            let draw = SVG().viewbox(0, 0, 1000, 1000)
            widget(key, draw, col, bg, sca)
            this.innercode = draw.svg()
        },

        codeChange(code) {
            console.log("code",code);
            this.innercode = code
        }
    },
}
</script>
<style lang="">

</style>