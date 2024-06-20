<template>
    <!-- <div class="h-[500px] my-3 grid place-content-around">
        <button class="transition text-white bg-[#42B242] hover:bg-[#1D1D1B] @dark:bg-[#1D1D1B] @dark:hover:bg-[#42B242] p-4 h-full rounded-2xl" v-on:click="newBgValue(null)">Fundo liso</button>
        <button class="transition text-white bg-[#42B242] hover:bg-[#1D1D1B] @dark:bg-[#1D1D1B] @dark:hover:bg-[#42B242] p-4 h-full rounded-2xl" v-on:click="newBgValue('qua')">Fundo quadriculado</button>
        <button class="transition text-white bg-[#42B242] hover:bg-[#1D1D1B] @dark:bg-[#1D1D1B] @dark:hover:bg-[#42B242] p-4 h-full rounded-2xl" v-on:click="newBgValue('lis')">Fundo listrado</button>
        <button class="transition text-white bg-[#42B242] hover:bg-[#1D1D1B] @dark:bg-[#1D1D1B] @dark:hover:bg-[#42B242] p-4 h-full rounded-2xl" v-on:click="newBgValue('cir')">Fundo circular</button>
        <button class="transition text-white bg-[#42B242] hover:bg-[#1D1D1B] @dark:bg-[#1D1D1B] @dark:hover:bg-[#42B242] p-4 h-full rounded-2xl" v-on:click="newColorValue('col')">Monstro colorido</button>
        <button class="transition text-white bg-[#42B242] hover:bg-[#1D1D1B] @dark:bg-[#1D1D1B] @dark:hover:bg-[#42B242] p-4 h-full rounded-2xl" v-on:click="newColorValue('mon')">Monstro Monocromático</button>
        <div class="flex-wrap">
            <label for="minmax-range" class="block text-center mb-2 text-sm font-medium text-gray-900 @dark:text-white">Tamanho do monstro</label>
            <input v-on:input="newScaleValue" id="labels-range-input" type="range" step="1" value="1" min="0" max="2" class="transition-transform w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#1D1D1B] bg-[#42B242] @dark:accent-[#42B242] @dark:bg-[#1D1D1B] h-4">
            <div class="w-full flex justify-between">
                <span class="text-sm text-gray-900 @dark:text-white relative">Pequeno</span>
                <span class="text-sm text-gray-900 @dark:text-white relative">Médio</span>
                <span class="text-sm text-gray-900 @dark:text-white relative">Grande</span>
            </div>
        </div>
    </div> -->
</template>

<script>

export var newColor = null
export var newBg = null
export var newScale = 1

export default {
    
    mounted(){
    },

    methods: {

        newBgValue(string){
            newBg = string
            console.log(newBg)
            return newBg
        },

        newColorValue(string){
            newColor = string
            console.log(newColor)
            return newColor
        },
        
        newScaleValue(event){
            newScale = event.target.value
            console.log(newScale)
            return newScale
        }

    }

}

</script>