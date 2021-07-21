import Vue from 'vue'
import App from './App.vue'
// import Header from './Components/Header_footer/Header.vue'

Vue.config.productionTip = false

// Vue.component('app-header', Header)

new Vue({
  render: h => h(App),
}).$mount('#app')
