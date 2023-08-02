<template>
    <div :class="`flex justify-center relative ${width, height}`">
        <div ref="graphContent" class="w-full h-full relative" />
    </div>
</template>

<script setup>
import { ref, toRefs, watch,  onBeforeMount } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
    option:{
        type: Object,
        required: true,
        default: () => {}
    },
    width: {
        type: String,
        required: false,
        default: 'w-full'
    },
    height: {
        type: String,
        required: false,
        default: 'h-[300px]'
    },
    init: {
        type: Boolean,
        default: true
    }
})
const instance = ref(echarts.Echarts)

const { option, init } = toRefs(props)

const graphContent = ref()

onBeforeMount(() => {
    setTimeout(() => {
        actionDrawGraph()
    }, 1)
})

watch(() => option.value,
    (newValue) => {
        instance.value?.setOption(newValue, true, true)
    },
    { deep: true }
)

function handleResize(){
    instance.value?.resize()
}


function actionDrawGraph(){
    instance.value = echarts?.init(graphContent.value)
    if(init.value) instance.value?.setOption(option.value)
    window.addEventListener('resize', handleResize)
    instance.value?.resize()
}



</script>

<style lang="scss" scoped>

</style>