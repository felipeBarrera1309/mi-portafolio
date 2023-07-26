<template>
    <section class="flex flex-col h-screen">
        <encabezado :firs-go="refMain" />
        <main class="overflow-auto scroll-smooth">
            <informationMain ref="refMain" />
        </main>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import encabezado from '../partials/header.vue';
import informationMain from '../partials/informationMain.vue';

const refMain = ref()
console.log('Informacion', refMain.value.laboral());

</script>