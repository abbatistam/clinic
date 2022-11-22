<template>
    <div class="header">
        <div class="contact">
            <div class="cat">
                <font-awesome-icon class="i" icon="fa-solid fa-phone" />
                <span>Llama: +13437467792</span>
            </div>
            <div class="cat">
                <font-awesome-icon class="i" icon="fa-solid fa-map-marker-alt" />
                <span>3511 Abel Trail, Binsville</span>
            </div>
            <div class="cat">
                <font-awesome-icon class="i" icon="fa-solid fa-clock" />
                <span>Lun-Vie: 9am-11pm</span>
            </div>
            
        </div>
        <div class="socialMedia">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="socialI" />
            <font-awesome-icon icon="fa-solid fa-envelope" class="socialI" />
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" class="socialI" />
        </div>
    </div>
    <div class="menu">
        <span class="mainIcon" @click="mainStore.sideBarModal = !mainStore.sideBarModal">Icono De clinica</span>

        <div class="menuItems">
            <div class="item">Inicio</div>
            <div class="item">Sobre Nosotros</div>
            <div class="item">Departamentos</div>
            <div class="item">Doctores</div>
            <div class="item">Paginas</div>
            <div class="item">Noticias</div>
            <div class="item">Contacto</div>
        </div>

        <button class="button">Reserva tu Cita ></button>
    </div>
</template>

<script setup lang="ts">
    import { useMainStore } from '@/stores';

    const mainStore = useMainStore()
</script>

<style scoped>

    .header{
        @apply h-[42px] lg:flex items-center px-40 border-b border-solid border-gray-300 text-gray-600 whitespace-nowrap hidden
    }
    .menu{
        @apply h-[64px] flex items-center px-5 sm:px-20 xl:px-40 text-sm lg:text-sm xl:text-base text-gray-600 grow 
    }

    .mainIcon{
        @apply cursor-pointer pointer-events-auto lg:pointer-events-none lg:cursor-auto
    }

    .contact{
        @apply flex gap-4 
    }

    .cat{
        @apply flex justify-center items-center gap-2
    }

    .socialMedia{
        @apply flex gap-10 grow justify-end px-16
    }

    .i{
        @apply text-blue-600
    }

    .socialI{
        @apply text-gray-500
    }

    .socialI:first-of-type:hover{
        @apply text-blue-500
    }

    .socialI:nth-of-type(2):hover{
        @apply text-red-500
    }

    .socialI:last-of-type:hover{
        color: #C13584;
    }

    .menuItems{
        @apply grow lg:flex gap-4 justify-center items-center
    }

    .item{
        @apply cursor-pointer hidden lg:block
    }

    .item:hover{
        @apply text-blue-500
    }

    .button{
        @apply px-2 py-2 text-white bg-blue-500 rounded transition-all duration-300 ease-linear;
    }

    .button:hover{
        @apply bg-blue-700;
    }

</style>