<template>
    <header>
        <nav class="flex justify-between px-5 py-3 dark:bg-slate-500">
            <div class="h-[60px] w-[60px]">
                <a href="#"><img :src="changeImageMode" alt="" class="min-h-full min-w-[60px]" width="60"></a>
            </div>
            <div
                class="
                    p-3 hidden
                    md:bg-transparent md:flex-row md:w-full md:h-full md:block
                "
                ref="menu"
            >
            <div class="flex flex-col items-center md:flex-row">
                <ul
                    class="
                        flex flex-col gap-3 w-full items-center
                        md:flex-row md:justify-center dark:text-cyan-50
                    "
                >
                    <li class="
                        transition-all ease-in-out duration-300
                        underline-offset-4 hover:underline hover:text-sky-200"
                    >
                        <a href="">Quién soy</a>
                    </li>
                    <li class="
                        transition-all ease-in-out duration-300
                        underline-offset-4 hover:underline hover:text-sky-200"
                    >
                        <a href="">Experiencia</a>
                    </li>
                    <li class="
                        transition-all ease-in-out duration-300
                        underline-offset-4 hover:underline hover:text-sky-200"
                    >
                        <a href="">Proyectos</a>
                    </li>
                    <li class="
                        transition-all ease-in-out duration-300
                        underline-offset-4 hover:underline hover:text-sky-200"
                    >
                        <a href="">Contáctame</a>
                    </li>
                </ul>
                <i class="icon-cloud-moon-inv text-sky-500 dark:text-white text-3xl" @click="changeModeDark" />
            </div>
            </div>
            <div class="block md:hidden w-[40px] h-[30px] my-2" id="openMenu" @click="hiddenMenu">
                <span class="block bg-sky-600 dark:bg-white w-full h-2 rounded-full" />
                <span class="block bg-sky-600 dark:bg-white w-full h-2 rounded-full my-1" />
                <span class="block bg-sky-600 dark:bg-white w-full h-2 rounded-full" />
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';

const menu = ref()
const openMenu = ref()
const changeImageMode = ref('')

onBeforeMount(() => {
    isModeDark()
})

function isModeDark(){
    if(localStorage.theme === 'dark'){
        document.documentElement.classList.add('dark')
        changeImageMode.value = '/generals/developer-white.png'
    }else{
        document.documentElement.classList.remove('dark')
        changeImageMode.value = '/generals/developer-black.png'
    }
}

function changeModeDark(){
    if(!(localStorage.theme === 'dark')){
        localStorage.setItem('theme', 'dark')
    }else{
        localStorage.theme = 'light'
    }
    isModeDark()
}

function hiddenMenu(){
    menu.value.classList.toggle('openMenu')
}


window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (value) => {
    if(value.matches){
        localStorage.theme = 'dark'
    }else{
        localStorage.theme = 'light'
    }
    isModeDark()
})

</script>

<style scoped>
.openMenu{
    @apply h-[220px] opacity-1 block;
}

@media ( min-width: 768px ) {
    .openMenu{
        height: 76px !important;
    }
}

</style>