import Vue from 'vue'
import store from './store'
import VEW from 'vue-embedded-widget'

VEW(Vue)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
