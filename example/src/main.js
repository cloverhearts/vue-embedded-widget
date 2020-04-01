import Vue from 'vue'
import store from './store'
import VEW from 'vue-embedded-widget'
import HelloWorld from './components/HelloWorld'

const widget = VEW(Vue)

console.log('CloverHearts Hello world')

widget.registerComponent(HelloWorld, "test-my-comp");
widget.registerComponent(HelloWorld, '*[data-vue-app="nice"]');
widget.registerComponent(HelloWorld, ".nice-component");
widget.printList();

document.addEventListener('DOMContentLoaded', () => {
  widget.mount();
})