<template>
  <component :is="layout" />
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import defecto from './shared/layouts/default.vue';

const route = useRoute()

const layouts = {
  'default': defecto
}

const layout = computed(() => {
  if(route?.name && route?.meta) return layouts[route.meta.layout]
  else return layouts.default
})

watch(() => route,
  () => {
    if(route.meta){
      document.title = `Portafolio Felipe Barrera ${ route?.meta?.title ?? 'portafolio' }`
    }else{
      document.title = 'Portafolio Felipe Barrera'
    }
  },
  {
    immediate: true,
    deep: true
  }
)

</script>

<style scoped>

</style>