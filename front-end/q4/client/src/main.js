import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTrashRestore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import routes from './routes'

library.add(faSearch, faTrashRestore);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes,
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
