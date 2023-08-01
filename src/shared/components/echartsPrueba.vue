<template>
    <div :class="`relative flex justify-center ${ width, height }`">
        <div ref="grafica" class="w-full h-full relative" />
    </div>
</template>

<script setup>
import { ref, watch, toRefs, onBeforeMount } from 'vue';
import * as echarts from 'echarts';


const props = defineProps({
    options:{
        type: Object,
        required: true,
        default: () => {}
    },
    width: {
        type: String,
        required: false,
        default: 'w-full'
    },
    height:{
        type: String,
        default: 'h-[300px]',
        required: false
    },
    init:{
        type: Boolean,
        required: false,
        default: true
    }
})

const grafica = ref()
const { options, init } = toRefs(props)
const instance = ref(echarts.Echarts)

onBeforeMount(() => {
    setTimeout(() => {
        ajustar()
    }, 0.3)
});

watch(() => options.value,
    (newValue) => {
        instance.value?.setOption(newValue, true, true)
    },
    { deep: true }
)

function handleResize(){
    instance.value?.resize()
}

function ajustar(){
    instance.value = echarts.init(grafica.value)
    if(init.value) instance.value?.setOption(options.value)
    window.addEventListener('resize', handleResize)
    instance.value?.resize()
}


</script>

<style lang="scss" scoped>

</style>