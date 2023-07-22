<template>
    <header>
        <nav class="flex justify-between px-5 py-3 bg-cyan-500 dark:bg-slate-500">
            <div class="h-[60px] w-[60px]">
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/4974/4974463.png" alt="" class="min-h-full min-w-[60px]" width="60"></a>
            </div>
            <div
                class="
                    flex flex-col justify-center items-center gap-3 p-5
                    transition-all ease-in-out duration-300
                    md:bg-transparent md:flex-row md:w-full md:h-full md:opacity-1
                "
                ref="menu"
            >
                <ul
                    class="
                        flex flex-col gap-3 w-full items-center
                        md:flex-row md:justify-center dark:text-cyan-50
                    "
                >
                    <li><a href="">Quién soy</a></li>
                    <li><a href="">Experiencia</a></li>
                    <li><a href="">Proyectos</a></li>
                    <li><a href="">Contáctame</a></li>
                </ul>
                <i class="icon-cloud-moon-inv text-3xl" @click="changeModeDark" />
            </div>
            <div class="h-[60px] w-[60px] block md:hidden py-2">
                <i class="icon-menu text-3xl block min-h-full" @click="hiddenMenu" />
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref()

function changeModeDark(){
    console.log('algo');
    document.documentElement.classList.toggle('dark')
}

function hiddenMenu(){
    menu.value.classList.toggle('openMenu')
}

</script>

<style scoped>
.openMenu{
    height: 220px !important;
    opacity: 1 !important;
}

</style>