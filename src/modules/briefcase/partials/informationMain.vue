<template>
    <section class="my-0 flex flex-col lg:flex-row lg:h-[850px]">
        <div class="p-10 lg:w-4/5 lg:h-[500px] lg:self-center space-y-4">
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
    <div class="flex flex-col mb-96 mt-52" ref="contentDetect" style="border: 8px solid red;">
        <h2
            class="text-3xl w-4/5 mx-auto text-center text-slate-700 dark:text-white font-bold my-8 tracking-widest lg:my-0"
            :id="expLaboral"
        >
            Experiencia laboral
        </h2>
        <section
            class="parent-section my-12 flex gap-4 flex-col w-4/5 m-auto lg:flex-row lg:w-[87%] lg:my-28"
            ref="jobSection"
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
                    <article class="open-description text-ellipsis will-change-auto" v-if="sectionSelected == i + 1">
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
    <div class="h-96 mt-96">
        <p class="py-96">algo</p>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';

const jobSection = ref()
const sectionSelected = ref(1)
const changeClass = ref('')
const expLaboral = ref('ex-laboral')
const contentDetect = ref()

const buttonsInformation = ref([
    { name: 'experience' },
    { name: 'experience' },
    { name: 'experience' },
])

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

onBeforeMount(() => {
    verifySizeWindow(window.innerWidth)
})

function verifySizeWindow(size){
    if(size > 1024){
        changeClass.value = 'back-line-lg'
    }else{
        changeClass.value = 'back-line-md'
    }
}

window.addEventListener('resize', (value) => {
    verifySizeWindow(value.target.innerWidth)
})

function selectView(selected){
    sectionSelected.value = selected
}

defineExpose({
    expLaboral,
    contentDetect
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
            animation: moveLineVertical linear 1 0.3s;
            animation-fill-mode: forwards;
            transition: all 0.3s ease-in-out;
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
            animation: moveLineHorizontal linear 1 0.3s;
            animation-fill-mode: forwards;
            transition: all 0.3s ease-in-out;
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