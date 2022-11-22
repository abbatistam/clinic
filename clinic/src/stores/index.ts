import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useMainStore = defineStore('main', () => {
    const sideBarModal = ref(false)
  
    return { sideBarModal }
  })
  