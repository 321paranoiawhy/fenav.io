import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { freesolidsvg } from '@fortawesome/free-solid-svg-icons'
import { freeregularsvg } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faCss3Alt,)

/* add font awesome icon component */
createApp.component('font-awesome-icon', FontAwesomeIcon)


createApp(App).use(store).use(router).mount('#app')
