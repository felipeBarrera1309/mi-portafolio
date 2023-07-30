<template>
    <section class="flex flex-col h-screen">
        <encabezado :secondGo="refMain?.expLaboral" :firstGo="refMain?.whoIm" />
        <el-scrollbar ref="refScroll" :min-size="100"  class="h-full" @scroll="verifyHeight" >
            <informationMain ref="refMain" />
        </el-scrollbar>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import encabezado from '../partials/header.vue';
import informationMain from '../partials/informationMain.vue';

const refMain = ref()
const refScroll = ref()

function getHeight(count){
    const element = count.getBoundingClientRect()
    return (
        element.top >= 0 &&
        element.top <= (window.innerHeight || document.documentElement.clientHeight) ||
        element.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        element.bottom >= 0


    )
}

function verifyHeight(){
    const seeContainer = refMain.value.contentDetect
    console.log('Esto es lo que envia el elemento: ', getHeight(seeContainer));
    // Marcar el encabezado de los enlaces como marcados cuando el contenedor pase por
    // la ventana del navegador
    const verifyView = getHeight(seeContainer)
    refMain.value.addClassArticle('open-description', verifyView)
}


</script>