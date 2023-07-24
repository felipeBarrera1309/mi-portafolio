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
                bg-[url('/hom/gbp/Documents/cursos-youtube/tailwind-practice/mi-portafolio/public/generals/photo-felipe.jpg')]
                rounded-lg lg:w-full lg:h-full lg:bg-center lg:bg-no-repeat lg:bg-[length:417px_440px]
            "
        />
    </section>
    <h2
        class="text-3xl w-4/5 mx-auto text-center text-slate-700 dark:text-white font-bold my-8 tracking-widest lg:my-0"
    >
        Experiencia laboral
    </h2>
    <section
        class="my-12 flex gap-4 flex-col w-4/5 m-auto lg:flex-row lg:w-[87%] lg:my-28"
        ref="jobSection"
    >
        <div class="flex flex-row gap-3 lg:flex-col lg:w-[20%]">
            <button
                v-for="(boton, i) in buttonsInformation"
                :key="i"
                class="bg-white w-full px-4 py-1
                    border-b-2 border-l-0 transition-action
                    dark:bg-slate-700
                    hover:bg-slate-200
                    hover:dark:bg-slate-200
                    hover:dark:text-black
                    lg:border-b-0 lg:border-l-2
                    lg:h-full lg:text-left
                "
                :class="buttonSelected == i + 1
                    ?
                    'border-sky-400 dark:bg-slate-50 dark:text-black bg-slate-200'
                    :
                    ''"
                type="button"
                @click="selectView(i + 1)"
            >
                {{ boton.name }}
            </button>
        </div>
        <article>
            <h3>Ingerio Electromecanico <span>@Felipe</span></h3>
            <h4>Yave Felipe Barrera Pico</h4>
        </article>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const jobSection = ref()
const buttonSelected = ref(1)

const buttonsInformation = ref([
    { name: 'experience' },
    { name: 'experience' },
    { name: 'experience' },
    { name: 'experience' }
])

function selectView(selected){
    buttonSelected.value = selected
}

</script>

<style lang="scss" scoped>

</style>