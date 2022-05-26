import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { freesolidsvg } from '@fortawesome/free-solid-svg-icons'
import { freeregularsvg } from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(freesolidsvg)
library.add(free - regular - svg)

/* add font awesome icon component */
createApp.component('font-awesome-icon', FontAwesomeIcon)

//
createApp.config.productionTip = false

createApp(App).use(store).use(router).mount('#app')
