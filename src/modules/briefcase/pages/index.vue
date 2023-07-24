<template>
    <section class="flex flex-col h-screen">
        <encabezado />
        <main class="overflow-auto m-1" style="height: calc(100vh - 84px);">
            <informationMain />
        </main>
    </section>
</template>

<script setup>
import encabezado from '../partials/header.vue';
import informationMain from '../partials/informationMain.vue';


</script>