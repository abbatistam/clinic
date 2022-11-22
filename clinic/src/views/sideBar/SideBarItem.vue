<template>
    <div class="side-bar-item" @click="nav">
        <div class="item" >
            <span class="link_name">{{props.item.text}}</span>
            <font-awesome-icon class="arrow" icon="fa-solid fa-angle-down" v-show="props.item.hasSubmenu"/>        
        </div>
        <div class="submenu" v-show="props.item.hasSubmenu">
            <ul v-for="i in props.item.submenu">
                <SideBarItem :item="i"/>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { Item } from '@/types/Item';
    
    interface Props {
        item : Item
    }
    const props = defineProps<Props>()
    function nav(){
        if(props.item.hasSubmenu === false) {
            console.log('asd')
        }
    }
</script>

<style scoped>
    .side-bar-item{
        @apply bg-white list-none relative p-[10px] pl-0 transition-all duration-300 ease-linear cursor-pointer flex justify-center items-start flex-col rounded;
    }
    .submenu .side-bar-item{
        @apply pl-[10px]
    }
    
    .item{
        @apply flex items-center justify-center text-gray-600;
    }

    .side-bar-item:hover .item{
        @apply text-blue-500;
    }

    .link_name{
        @apply text-base mx-4 font-normal whitespace-nowrap;
    }
    .arrow{
        @apply text-xl min-w-[58px] text-center leading-[50px] transition-all duration-300 ease-linear;
    }
    .side-bar-item:hover .item .arrow {
        @apply -rotate-180;
    }
    .submenu{
        @apply w-full transition-all duration-300 ease-linear max-h-[0] invisible mt-[10px] flex flex-col pl-[10px];
    }
    .side-bar-item:hover .submenu{
        @apply max-h-[500px] visible;
    }
    
    .submenu a{
        @apply  text-gray-600 text-[15px] flex transition-all duration-300 ease-linear; 
        padding: 10px 0px 10px 40px;
    }
    
    .submenu a:hover{
        @apply text-blue-500;
    }
    
</style>