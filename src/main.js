import Vue from 'vue'
import App from './App.vue'
// import Header from './Components/Header_footer/Header.vue'

Vue.config.productionTip = false

// Vue.component('app-header', Header)

// Bootstrap import
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// C:\Users\Administrator\Desktop\vuejsbdhouse\vue_proj\vue-proj-v2\node_modules\bootstrap-icons\font

// import { Toast } from 'bootstrap.esm.min.js'

//   Array.from(document.querySelectorAll('.toast'))
//     .forEach(toastNode => new Toast(toastNode))

new Vue({
  render: h => h(App),
}).$mount('#app')
