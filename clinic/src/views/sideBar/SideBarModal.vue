<template>
    <div class="sideBarModal" >
	
	<input type="checkbox" id="btn-menu" :checked="mainStore.sideBarModal">
    <div class="container-menu">		
    	<div class="cont-menu" >
    		<SideBarItem v-for="men in menu" :item="men"/>
			<hr>
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
			<hr>
			<div class="socialMedia">
            	<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="socialI" />
            	<font-awesome-icon icon="fa-solid fa-envelope" class="socialI" />
            	<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" class="socialI" />
        </div>
		</div>
		
    </div>
	</div>	
</template>

<script setup lang="ts">
    import menu from '@/constants/SideBarMenuITems';
    import SideBarItem from './SideBarItem.vue'
    import {useMainStore} from '@/stores/'
    const mainStore = useMainStore()
</script>

<style scoped>
    
	.sideBarModal{
		z-index: 2;
	}
	input{
		@apply hidden;
	}
	.container-menu{
        @apply fixed w-screen top-0 left-0 transition-all duration-500 ease-linear invisible;
        background: rgba(0,0,0,0.5);
	}
	#btn-menu:checked ~ .container-menu{
		@apply opacity-100 visible;
	}
	.cont-menu{
		@apply w-full max-w-[260px] bg-white h-screen relative transition-all duration-500 ease-linear -translate-x-full p-4 overflow-x-scroll;
	}
	#btn-menu:checked ~ .container-menu .cont-menu{
		@apply translate-x-0
	}
	.cont-menu nav{
		@apply translate-y-[15%];
	}

	.contact{
        @apply flex flex-col gap-4 justify-center items-start py-4 
    }

    .cat{
        @apply flex justify-center items-center gap-2
    }

    .socialMedia{
        @apply flex gap-10 grow justify-end px-16 py-4
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


</style>