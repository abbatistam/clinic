import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone,
         faMapMarkerAlt,
         faClock,
         faLocation,
         faEnvelope,
         faCalendarAlt,
         faUser
         
 } from '@fortawesome/free-solid-svg-icons'

 import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

 import {} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faPhone,
            faMapMarkerAlt,
            faClock,
            faLocation,
            faFacebookF,
            faInstagram,
            faEnvelope,
            faCalendarAlt,
            faUser
            
)




import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
