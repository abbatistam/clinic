<template>
    <div class="main">
        <div class="bodyItem">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
            <p class="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt repellat dolores, illum maiores placeat veniam excepturi pariatur repudiandae itaque, a molestias ea aliquid minima amet? Omnis autem sunt iste sequi?</p>
            <button class="buttonN"> Leer Mas ></button>

        </div>
        <div class="bodyItem">
            <h6 class="h6">PHOTO</h6>
        </div>
    </div>
    <div class="main">
        <div class="bodyItem">
            <h6 class="h6">PHOTO</h6>
        </div>
        <div class="bodyItem">
            <h1 class="h1">Welcome to Lorem Ipsum Hospital</h1>
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere saepe fuga sit sequi perferendis.</p>
            <span class="span">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur ex aperiam provident perspiciatis, beatae id sequi quo adipisci quisquam libero corporis totam. Laborum magni reprehenderit deleniti incidunt natus maiores.</span>
        </div>
        <div class="bodyItem">
            <div class="meunButtons">
                <button class="button">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-calendar-alt" />
                    </div>
                    <div class="text">
                        Solicitar Cita
                    </div>                    
                    <div class="icon">
                        >
                    </div>
                </button>
                <button class="button">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-user" />
                    </div>
                    <div class="text">
                        Buscar Doctor 
                    </div>
                    <div class="icon">
                        >
                    </div>
                </button>
                <button class="button">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-map-marker-alt" />
                    </div>
                    <div class="text">
                        Buscar Direccion 
                    </div>
                    <div class="icon">
                        >
                    </div>
                </button>
                <button class="button">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-phone" />
                    </div>
                    <div class="text">
                        Contacto de Emerjencia 
                    </div>                    
                    <div class="icon">
                        >
                    </div>
                </button>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
     import {useMainStore} from '@/stores/index'

     const mainStore = useMainStore()

     document.onclick = function(e : any){
        if(e.target.className == 'container-menu'){
			mainStore.sideBarModal = false
        }
	}
</script>

<style scoped>
    .main{
        @apply w-screen h-[80vh] flex flex-col gap-1 md:flex-row md:flex-wrap
    }

    .bodyItem{
        @apply flex flex-col grow px-16 py-8 md:py-0 gap-4 h-full justify-center items-center bg-gray-500 basis-1/3 lg:basis-1/4
    }

    .bodyItem h1{
        @apply text-2xl lg:text-4xl 
    }
    .p{
        @apply text-base lg:text-lg
    }

    .h6{
        font-size: 72px
    }

    .span{
        @apply text-sm
    }

    .buttonN{
        @apply px-2 py-2 text-white  bg-blue-500 rounded transition-all duration-300 ease-linear gap-4 flex justify-center items-center;
    }
    .button{
        @apply px-2 py-2 basis-1/3 grow md:basis-0 md:grow-0 text-white min-h-[50px] bg-blue-500 rounded transition-all duration-300 ease-linear gap-4 flex justify-center items-center whitespace-nowrap;
    }
    .button:hover,
    .buttonN:hover{
        @apply bg-blue-700;
    }

    .meunButtons{
        @apply flex md:flex-col gap-4 flex-wrap
    }

    .icon{
        @apply flex justify-center items-center
    }

    .text{
        @apply flex justify-start items-center grow 
    }

    

</style>