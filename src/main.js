import Vue from 'vue'
import App from './App.vue'
// import Header from './Components/Header_footer/Header.vue'

Vue.config.productionTip = false

// Vue.component('app-header', Header)

// Bootstrap import
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// C:\Users\Administrator\Desktop\vuejsbdhouse\vue_proj\vue-proj-v2\node_modules\bootstrap-icons\font

// import { Toast } from 'bootstrap.esm.min.js'

//   Array.from(document.querySelectorAll('.toast'))
//     .forEach(toastNode => new Toast(toastNode))

//Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
//End fontawesome

import { BootstrapVue, IconsPlugin, BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('BIcon', BIcon)
Vue.component('BIconArrowUp', BIconArrowUp)
Vue.component('BIconArrowDown', BIconArrowDown)

new Vue({
  render: h => h(App),
}).$mount('#app')
