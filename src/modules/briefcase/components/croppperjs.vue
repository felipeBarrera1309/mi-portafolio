<template>
    <div class="border text-center mx-auto py-10 px-8 w-10/12 my-10">
        <div class="flex justify-center">
            <label for="select-file" class="bg-slate-400 text-white rounded-md py-2 w-28">
                <input ref="selectFile" type="file" accept=".png, .jpg, .jpeg" id="select-file" class="hidden" @change="changeFile" />
                <h1 class="text-lg">Select file</h1>
            </label>
        </div>
        <div>
            <div v-if="imgCropper" class="flex w-[600px] h-[600px]">
                <img ref="contenedorImg" id="image" :src="imgCropper" alt="..." style="display: block !important; max-width: 100% !important;" @load="initCropper" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Cropper from 'cropperjs';

const imgCropper = ref('')
const contenedorImg = ref()
const selectFile = ref()
let cropper = null


async function changeFile(event){
    const objectFile = event.target.files[0]
    if(objectFile && selectFile.value.getAttribute('accept').replace(/\s/g, '').split(',').some(el => el == objectFile.name.substring(objectFile.name.lastIndexOf('.'), objectFile.name.length))){
        imgCropper.value = await fileBase64(objectFile)
        cropper = new Cropper(contenedorImg.value , {
            aspectRatio: 16 / 9,
            preview: 'img-sample',
            zoomable: true,
            viewMode: 2,
            responsive: true,
            dragMode: 'crop',
            ready(){
                document.querySelector('.cropper-container').style.width = '100%'
                document.querySelector('.cropper-container').style.height = '100%'
            }
        })
        // cropper.replace(imgCropper.value)
    }



}

async function fileBase64(object){
    return new Promise((resolve, reject) =>{
        const file = new FileReader()
        file.readAsDataURL(object)
        file.onload = (e) => {
            resolve(e.target.result)
        }
        file.onerror = () =>  {
            reject(new Error('archivo no encontrado'))
        }
    })
}

</script>