<template>
    <section class="flex flex-col h-screen">
        <encabezado :firs-go="refMain?.expLaboral" />
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

// function getHeight(el){
//     const rect = el.getBoundingClientRect()
//     return (
//         rect.top >= 0 &&
//         rect.top <= (window.innerHeight ) ||
//         rect.bottom <= (window.innerHeight) &&
//         rect.bottom >= 0
//     )
// }

// NOTA IMPORTANTE: la funcion de arriba verifica si el contenedor entra en pantalla,
// Hacerla luego en casa desde cero

function verifyHeight(){
    const seeContainer = refMain.value.contentDetect
    console.log('Esto es correcto apenas entra a la altura: ', getHeight(seeContainer));
    // console.log("Este es el alto de la ventana: ", window.innerHeight);
}


</script>