import Vue from 'vue'
import store from './store'
import VEW from 'vue-embedded-widget'
import HelloWorld from './components/HelloWorld'
import App from './App'
VEW(Vue)

VEW.registerComponent(HelloWorld, "test-my-comp");
VEW.registerComponent(HelloWorld, '*[data-vue-app="nice"]');
VEW.registerComponent(HelloWorld, ".nice-component");
VEW.mount();
VEW.printList();