import Vue from 'vue'
import VEW from 'vue-embedded-widget'
import HelloWorld from './components/HelloWorld'

const widget = VEW(Vue)

widget.registerComponent(HelloWorld, "vue-component");

document.addEventListener('DOMContentLoaded', () => {
  if (typeof window !== 'undefined') {
    window._vew = widget
  }
  widget.mount();
})