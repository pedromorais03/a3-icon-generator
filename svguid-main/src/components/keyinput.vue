<template>
    <div class="flex items-center justify-left mb-3">
        <div class="flex items-center justify-between">
            <h1 class="title-font px-3 self-center sm:text-3xl text-2xl font-sans @light:text-gray-900 @dark:text-white">
                Insira o texto aqui:
            </h1>
        </div>
        <div class="flex items-center justify-center gap-2">
            <div class="w-[266px]">
                <input @keyup="updateID" v-model="id" type="text" id="hero-field" name="hero-field"
                class="w-full bg-[#42B242] rounded border bg-opacity-50 border-gray-300 focus:ring-2
                focus:ring-indigo-200 
                focus:bg-transparent focus:border-indigo-500 
                text-base outline-none @dark:text-white @light:text-black 
                py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <!-- <button class="transition w-[190px] self-center text-white bg-[#42B242] hover:bg-[#834FBA] @dark:bg-[#834FBA] @dark:hover:bg-[#42B242] p-4 h-15 rounded-2xl" v-on:click="updateID">Atualizar Iconomonster</button> -->
        </div>
    </div>
</template>

<script>
import keygen from "../keygen.js"

export default {
    components: {},
    data() {
        return {
            key: null,
            id: "",
        }
    },
    mounted() {
        this.updateID()
    },
    methods: {

        updateID() {
            this.key = keygen.getKeyParams(this.id)
            this.$emit('keyChanged', this.key) 
        },

        random() {
            let rnd = keygen.rnd16()
            console.log("rnd", rnd);
            let rnd256 = keygen.rnd256()
            console.log("rnd256", rnd256);

        },

    },
}
</script>