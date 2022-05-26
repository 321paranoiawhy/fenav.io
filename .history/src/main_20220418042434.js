import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
// free: solid, regular, brands (only three styles)
// import { freesolidsvg } from '@fortawesome/free-solid-svg-icons'
// import { freeregularsvg } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faHtml5, faCss3Alt)

// https://vuejs.org/guide/components/registration.html#global-registration
// const app = createApp({});
// app.component('font-awesome-icon', FontAwesomeIcon)


createApp(App).use(store).use(router).mount('#app');
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

