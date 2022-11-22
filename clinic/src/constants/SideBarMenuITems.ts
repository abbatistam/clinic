import type {Item} from "@/types/Item";

const menu : Item[] = [
    {
        text : "Inicio",
        hasSubmenu : false,
        submenu : [],
        href : '/home'
    },
    {
        text : "Sobre Nosotros",
        hasSubmenu : false,
        submenu : [],
        href : '/about'
    },
    { 
        text : "Departamentos",
        hasSubmenu : false,
        submenu : [],
        href : '/departments'
    },
    { 
        text : "Doctores",
        hasSubmenu : false,
        submenu : [],
        href : '/doctors'
    },
    { 
        text : "Paginas",
        hasSubmenu : false,
        submenu : [],
        href : '/pages'
    },
    { 
        text : "Noticias",
        hasSubmenu : false,
        submenu : [],
        href : '/news'
    },
    { 
        text : "Contactos",
        hasSubmenu : false,
        submenu : [],
        href : '/contact'
    },
]

export default menu;