<template>
    <section class="flex flex-col h-screen">
        <encabezado :firs-go="refMain?.expLaboral" />
        <main class="overflow-auto scroll-smooth" @scroll="verifyHeight" style="height: calc(100vh - 84px);">
            <informationMain ref="refMain" />
        </main>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import encabezado from '../partials/header.vue';
import informationMain from '../partials/informationMain.vue';

const refMain = ref()

function getHeight(el){
    let rect = getBoundingClientRect()
    let seeHeight = (
        rect.top >= 0,
        
    )
}

function verifyHeight(dataHeight){
    const seeContainer = refMain.value.contentDetect
}


</script>