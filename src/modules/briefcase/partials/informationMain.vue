<template>
    <section class="my-0 pb-8 flex flex-col lg:flex-row lg:h-[850px]" :id="redirectHead">
        <div
            class="p-10 lg:w-4/5 lg:h-[500px] lg:self-center space-y-4"
            ref="whoIm"
        >
            <h1
                class="text-sky-600 text-2xl dark:text-sky-300
                    uppercase font-bold tracking-widest leading-10
                "
            >
                Hola soy
            </h1>
            <p class="text-3xl text-slate-600 dark:text-slate-300 font-bold font-mono">Felipe Barrera</p>
            <p class="font-bold text-3xl text-slate-500 dark:text-slate-600">Developer FrontEnd de aplicaciones WEB.</p>
            <p class="mt-5 text-lg break-keep">
                Tengo 21 años, encargado en la parte del diseño de aplicaciones WEB,
                graduado del bachiller, casi con una carrera universataria terminada,
            </p>
            <div class="flex gap-3">
                <a href=""
                    class="rounded-lg group/color transition-action
                    hover:scale-[1.3] hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-600
                    hover:dark:shadow-sky-100
                    "
                >
                    <i
                        class="transition-action text-2xl
                        group-hover/color:text-sky-700 group-hover/color:dark:text-sky-100 icon-instagram"
                    />
                </a>
                <a href=""
                    class="rounded-lg group/color transition-action
                    hover:scale-[1.3] hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-600
                    hover:dark:shadow-sky-100
                    "
                >
                    <i
                        class="transition-action text-2xl
                        group-hover/color:text-sky-700 group-hover/color:dark:text-sky-100 icon-github"
                    />
                </a>
                <a href=""
                    class="rounded-lg group/color transition-action
                    hover:scale-[1.3] hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-600
                    hover:dark:shadow-sky-100
                    "
                >
                    <i
                        class="transition-action text-2xl
                        group-hover/color:text-sky-700 group-hover/color:dark:text-sky-100 icon-linkedin-rect"
                    />
                </a>
            </div>
            <div>
                <button
                    class="transition-action border-2 border-sky-300 dark:border-sky-100 w-64 text-center p-4 rounded-md tracking-widest
                    hover:dark:bg-sky-100 hover:bg-sky-300 hover:dark:text-slate-950"
                >
                    contáctame
                </button>
            </div>
        </div>
        <div
            class="w-64 h-80 bg-cover m-auto
                bg-[url('/publi/generals/photo-felipe.jpg')]
                rounded-lg lg:w-full lg:h-full lg:bg-center lg:bg-no-repeat lg:bg-[length:417px_440px]
            "
        />
    </section>
    <div class="flex flex-col mt-10">
        <h2
            class="text-3xl w-4/5 mx-auto text-center text-slate-700 dark:text-white font-bold my-8 tracking-widest lg:my-0"
            :id="expLaboral"
        >
            Experiencia laboral
        </h2>
        <section
            class="parent-section my-12 flex gap-4 flex-col w-4/5 m-auto lg:flex-row lg:w-[87%] lg:my-16"
            ref="contentDetect"
        >
            <div class="flex flex-row gap-3 md:min-w-[150px] lg:flex-col lg:justify-between lg:w-[20%]">
                <button
                    v-for="(boton, i) in buttonsInformation"
                    :key="i"
                    class="bg-white w-full px-4 py-1
                        transition-action relative
                        max-h-[45px]
                        dark:bg-slate-700
                        hover:bg-slate-200
                        hover:dark:bg-slate-200
                        hover:dark:text-black
                        lg:h-full lg:text-left
                    "
                    :class="sectionSelected == i + 1
                        ?
                            `border-sky-400 dark:bg-slate-50 dark:text-white bg-slate-200 ${changeClass}`
                        :
                        ''"
                    type="button"
                    @click="selectView(i + 1)"
                >
                    {{ boton.name }}
                </button>
            </div>
            <div class="my-10 flex lg:my-0 lg:px-10 lg:w-[850px]">
                <template v-for="(data, i) in personalInformation" :key="i">
                    <article
                        :class="`text-ellipsis will-change-auto ${addClassDynamic}`"
                        v-if="sectionSelected == i + 1"
                    >
                        <h3>{{ data.title }} <span class="text-sky-500 font-bold text-lg">{{ data.canal }}</span></h3>
                        <h4 class="text-sm pb-5">{{ data.subtitle }}</h4>
                        <ul class="flex flex-col gap-3">
                            <li class="flex items-center gap-3">
                                <span class="text-sky-500 font-black pointer-events-none">&#9655</span>
                                <p class="px-5 font-normal text-stone-900 dark:text-cyan-50">
                                    {{ data.descriptionOne }}
                                </p>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="text-sky-500 font-black pointer-events-none">&#9655</span>
                                <p class="px-5 font-normal text-stone-900 dark:text-cyan-50">
                                    {{ data.descriptionTwo }}
                                </p>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="text-sky-500 font-black pointer-events-none">&#9655</span>
                                <p class="px-5 font-normal text-stone-900 dark:text-cyan-50">
                                    {{ data.descriptionThree }}
                                </p>
                            </li>
                        </ul>
                    </article>
                </template>
            </div>
        </section>
    </div>
    <div class="mx-10">
        <h4
            class="text-3xl text-slate-700 dark:text-white px-12 py-16
            font-bold tracking-widest md:text-center"
        >
            Mis últimos proyectos
        </h4>
        <el-scrollbar class="my-10 pb-5">
            <section class="flex flex-col items-center lg:flex-row gap-5" ref="refProjects" :id="redirectProjects">
                <div
                    v-for="project in projects"
                    :class="`group flex flex-col gap-2 ${ addClassProjects ? 'move-box' : ''}`"
                >
                    <img :src="project.img" alt="" class="transition-action w-full h-[150px] object-contain opacity-50 group-hover:opacity-100" />
                    <p class="font-bold uppercase">{{ project.description }}</p>
                    <div class="flex gap-2">
                        <span class="text-xs rounded-2xl bg-slate-500/50 flex items-center px-1">{{ project.contentOne }}</span>
                        <span class="text-xs rounded-2xl bg-slate-500/50 flex items-center px-1">{{ project.contentTwo }}</span>
                        <span class="text-xs rounded-2xl bg-slate-500/50 flex items-center px-1">{{ project.contentThree }}</span>
                        <a :href="project.urlGitHub" class="ms-auto">
                            <i class="icon-github transition-action text-xl hover:text-sky-600 dark:hover:text-slate-500" />
                        </a>
                        <a :href="project.viewPage">
                            <i class="icon-eye transition-action text-xl hover:text-sky-600 dark:hover:text-slate-500" />
                        </a>
                    </div>
                </div>
            </section>
        </el-scrollbar>
    </div>
    <div class="w-[90%] flex flex-col mx-auto">
        <echarts :option="getOptions" class="h-[300px]" />
    </div>
    <div class="w-[90%] flex flex-col mx-auto">
        <echarts :option="getOptionsTwo" class="h-[300px]" />
    </div>
    <div class="w-[90%] flex flex-col mx-auto">
        <echarts :option="getOptionsBar" class="h-[300px]" />
    </div>
    <div class="w-[90%] flex flex-col mx-auto">
        <echarts :option="getOptionsPie" class="h-[300px]" />
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import echarts from '../../../shared/components/echarts.vue';

const sectionSelected = ref(1)
const changeClass = ref('')
const expLaboral = 'ex-laboral'
const whoIm = ref()
const refProjects = ref()
const redirectHead = 'whoIm'
const redirectProjects = 'redirectProjects'
const contentDetect = ref()
const addClassDynamic = ref('')

const buttonsInformation = ref([
    { name: 'experience' },
    { name: 'experience' },
    { name: 'experience' },
])

onBeforeMount(() => {
    verifySizeWindow(window.innerWidth)
})

const getOptions = ref({
    legend: {
        data: ['mounths', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        triggerOn: 'mousemove|click',
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [ 'Lun', 'Mart', 'Mier', 'Juev', 'Viern', 'Sab', 'Dom' ],
            axisLine: {
                show: true,
                onZero: true,
                onZeroAxisIndex: 0,
                symbol: 'none',
                lineStyle: {
                    color: 'red',
                    width: 1,
                    type: 'dotted',
                    dashOffset: 5,
                    cap: 'square',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetX: 5,
                },
            },
            axisTick: {
                show: true,
                alignWithLabel : true,
                inside: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        },
        {
            type: 'value',
            min: 0,
            max: 50,
            position: 'right'
        }
    ],
    series: [
        {
            name: 'mounths',
            data: [ 56, 108, 200, 80, 87, 250, 0 ],
            type: 'line',
        }
    ]
})

const getOptionsTwo = ref(
    {
        title: {
        text: 'Stacked Line'
    },
    tooltip: {
        show: true,
        trigger: 'axis',
    },
    legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Video Ads',
            type: 'bar',
            data: [300, 232, 1000, 800, 190, 2000, 410]
        },
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            itemStyle: {
                color: 'red',
                borderWidth: 10,
            },
            lineStyle: {
                color: 'blue'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
}
)

const getOptionsBar = ref({
    legend: {
        show: true,
        data: ['ventas', 'gastos', 'Ranking'],
        textStyle: {
            rich: {
                icon:{
                    width: 20,
                    height: 20,
                    backgroundColor: {
                        image: 'url()'
                    }
                }
            }
        }
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer:{
            type: 'shadow'
        }
    },
    xAxis: [
        {
            type: 'category',
            data: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ],
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            type: 'bar',
            name: 'ventas',
            data: [5, 70, 230, 380, 180, 30, 290]
        },
        {
            type: 'bar',
            name: 'gastos',
            data: [5, 70, 230, 380, 180, 30, 290]
        },
        {
            type: 'line',
            name: 'Ranking',
            data: [5, 70, 230, 380, 180, 30, 290]
        },
    ]
})

const getOptionsPie = ref({
    tooltip: {
        show: true
    },
    legend: {
        show: true
    },
    series: [
        {
            type: 'pie',
            name: 'Data information',
            radius: [ '50%', '75%' ],
            center: [ '30%', '50%' ],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
                color: 'green'
            },
            labelLine: {
                show: false
            },
            data: [
                { name: 'first value', value: 10, },
                { name: 'second value', value: 10 },
                { name: 'third value', value: 10 },
            ]
        }
    ]
})


const personalInformation = ref([
    {
        title: 'Ingeniero Electromecanico',
        canal: '@Felipe',
        subtitle: 'Yave Felipe Barrera Pico',
        descriptionOne: 'Frontend desarrollador de paginas web',
        descriptionTwo: 'estoy haciendo mi descripcion numero dos',
        descriptionThree: 'Estoy haciendo mi descripcion numero tres'
    },
    {
        title: 'FrontEnd',
        canal: '@Felipe',
        subtitle: 'Maquetador',
        descriptionOne: 'Parte de la vista en una pagina web',
        descriptionTwo: 'estoy haciendo mi descripcion numero dos',
        descriptionThree: 'Estoy haciendo mi descripcion numero tres'
    },
    {
        title: 'Portafolio FrontEnd',
        canal: '@Felipe',
        subtitle: 'decoro mi propio portafolio',
        descriptionOne: 'Estoy creando mi propio portafolio con el framework vuejs',
        descriptionTwo: 'estoy haciendo mi descripcion numero dos',
        descriptionThree: 'Estoy haciendo mi descripcion numero tres Estoy haciendo mi descripcion numero tres Estoy haciendo mi descripcion numero tres'
    },
])

const projects = ref([
    {
        img: '/public/generals/project-cats.png',
        description: 'escoger gatos randoms',
        contentOne: 'HTML',
        contentTwo: 'CSS',
        contentThree: 'JavaScript',
        urlGitHub: 'https://github.com/felipeBarrera1309/Randoms-cats',
        viewPage: 'https://felipebarrera1309.github.io/Randoms-cats/'
    },
    {
        img: '/public/generals/aplication-movile.png',
        description: 'Aplicacion movil para ingresos y egresos',
        contentOne: 'HTML-CSS',
        contentTwo: 'JS',
        contentThree: 'Vue',
        urlGitHub: 'https://github.com/felipeBarrera1309/vue-practica-movile',
        viewPage: 'https://aplication-movile-with-web.netlify.app/'
    },
])

function verifySizeWindow(size){
    console.log('esto ejecuta cuando cambia el size: ', document.querySelector('.echarts-legend'));
    size > 1024 ?
        changeClass.value = 'back-line-lg'
        :
        changeClass.value = 'back-line-md'
}

window.addEventListener('resize', (value) => {
    verifySizeWindow(value.target.innerWidth)
})

function selectView(selected){
    sectionSelected.value = selected
}

function addClassArticle(addClass, verify){
    if(verify){
        addClassDynamic.value = addClass
    }else{
        addClassDynamic.value = ''
    }
}

function addClassProjects(valueBoolean){
    valueBoolean ? refProjects.value.classList.add('move-box') : refProjects.value.classList.remove('move-box')
}

defineExpose({
    expLaboral,
    contentDetect,
    addClassArticle,
    whoIm,
    redirectHead,
    refProjects,
    addClassProjects,
    redirectProjects
})

</script>

<style lang="scss" scoped>

.parent-section{
    .back-line-lg{
        &::before{
            content: '';
            position: absolute;
            width: 3px;
            height: 0;
            border-radius: 10px;
            left: 0;
            bottom: 0;
            background-color: rgb(89, 89, 227);
            animation: moveLineVertical linear 1 0.4s;
            animation-fill-mode: forwards;
            transition: all 0.4s ease-in-out;
        }
    }
    .back-line-md{
        &::before{
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            border-radius: 10px;
            left: 0;
            bottom: 0;
            background-color: rgb(89, 89, 227);
            animation: moveLineHorizontal linear 1 0.4s;
            animation-fill-mode: forwards;
            transition: all 0.4s ease-in-out;
        }
    }
    .open-description{
        width: 100%;
        animation: open;
        animation-timing-function: linear;
        animation-duration: 0.8s;
        animation-iteration-count: 1;
        transition: all 0.3s ease-in-out;
    }
}

.move-box{
    animation: upload;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
}

@keyframes upload{
    from{
        transform: translateY(80px);
        opacity: 0;
    }
}

@keyframes moveLineHorizontal {
    from{
        width: 0;
        left: 50%;
    }to{
        width: 100%;
    }
}

@keyframes moveLineVertical{
    0%{
        height: 0;
        bottom: 50%;
    }
    100%{
        height: 100%;
    }
}

@keyframes open{
    0%{
        width: 0;
        opacity: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }
}

</style>