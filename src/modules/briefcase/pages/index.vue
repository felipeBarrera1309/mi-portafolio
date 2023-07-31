<template>
    <section class="flex flex-col h-screen">
        <encabezado
            :secondGo="refMain?.expLaboral"
            :firstGo="refMain?.redirectHead"
            ref="refHead"
        />
        <el-scrollbar ref="refScroll" :min-size="100"  class="h-full" @scroll="verifyHeight" >
            <informationMain ref="refMain" />
        </el-scrollbar>
    </section>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import encabezado from '../partials/header.vue';
import informationMain from '../partials/informationMain.vue';

const refMain = ref()
const refScroll = ref()
const refHead = ref()

onBeforeMount(() => {
    setTimeout(() => {
        verifyHeight()
    })
})

function getFullHeight(count){
    const element = count?.getBoundingClientRect()
    return (
        element?.top >= 0 &&
        element?.top <= (window.innerHeight || document.documentElement.clientHeight) ||
        element?.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        element?.bottom >= 0
    )
}

function verifyHeightInWindow(cont){
    const element = cont?.getBoundingClientRect()
    return (
        element?.top >= 100 &&
        element?.top <= (window.innerHeight || document.documentElement.clientHeight)
    )

}

function verifyHeight(){
    const seeContainer = refMain.value?.contentDetect
    const seeWhoIm = refMain.value?.whoIm
    // Marcar el encabezado de los enlaces como marcados cuando el contenedor pase por
    // la ventana del navegador
    const verifyExperience = verifyHeightInWindow(seeContainer)
    const verifyWhoIm = verifyHeightInWindow(seeWhoIm)
    refHead.value?.changeSelected(
        {
            first: verifyWhoIm,
            second: verifyExperience,
            third: false,
            fourth: false
        }
    )
    refMain.value?.addClassArticle('open-description', verifyExperience)
}


</script>