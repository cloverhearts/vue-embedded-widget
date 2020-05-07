import Vue from 'vue'
import VEW from 'vue-embedded-widget'
import HelloWorld from './components/HelloWorld'

const widget = VEW(Vue)

widget.registerComponent(HelloWorld, "vue-component");

document.addEventListener('DOMContentLoaded', () => {
  widget.mount();
})