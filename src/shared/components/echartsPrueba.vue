<template>
	<div :style="{height,width}" style="position:relative;" class="d-flex justify-content-center">
		<div ref="grafica" style="height:100%; width:100%; position:relative" class="content-graphic" />
	</div>
</template>

<script setup>
import { ref, watch, onBeforeMount, toRefs , shallowRef } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
	options: {
		type: Object,
		required: true,
		default: () => {},
	},
	id: {
		type: String,
		default: 'Echarts',
		required: false
	},
	width: {
		type: String,
		default: '100%',
		required: false
	},
	height: {
		type: String,
		default: '300px',
		required: false
	},
	init: {
		type: Boolean,
		default: true,
		required: false
	},
});

const { options, init } = toRefs(props);

const instance = shallowRef(echarts.Echarts);
const grafica = ref();

onBeforeMount(() => {
	setTimeout(() => {
		ajustar();
	}, 1);
});

watch(() => options.value, (newValue) => {
	instance.value?.setOption(newValue, true, true);
}, { deep: true })

function handleResize() {
	instance.value?.resize();
};

function ajustar() {
	instance.value = echarts.init(grafica.value);
	if (init.value) instance.value.setOption(options.value);
	window.addEventListener('resize', handleResize);
	instance.value?.resize();
};

</script>

<style lang="scss">
// Estas clases no tienen scroped!!!!
.content-graphic {
	div {
		&:first-child {
			width: 100% !important;
		}
	}
}
</style>
