import Vue from 'vue'
import store from './store'
import VEW from 'vue-embedded-widget'
import HelloWorld from './components/HelloWorld'

VEW(Vue)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

VEW.registerComponent(HelloWorld, "test-my-comp");
VEW.registerComponent(HelloWorld, '*[data-vue-app="nice"]');
VEW.registerComponent(HelloWorld, ".nice-component");
VEW.mount();
VEW.printList();