<template>
    <section class="flex flex-col h-screen">
        <encabezado
            :secondGo="refMain?.expLaboral"
            :firstGo="refMain?.redirectHead"
            :third-go="refMain?.redirectProjects"
            class="mb-6"
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
    const lastProjects = refMain.value?.refProjects
    refMain.value.addClassProjects(getFullHeight(lastProjects))

    let verifyWhoIm = false
    const verifyExperience = getFullHeight(seeContainer)
    const verifyProjects = getFullHeight(lastProjects)
    if(window.innerWidth > 1024){
        verifyWhoIm = verifyHeightInWindow(seeWhoIm)
    }else{
        verifyWhoIm = getFullHeight(seeWhoIm)
    }
    refHead.value?.changeSelected(
        {
            first: verifyWhoIm,
            second: verifyExperience,
            third: verifyProjects,
            fourth: false
        }
    )
    refMain.value?.addClassArticle('open-description', verifyExperience)
}


</script>