# vue-embeded-widget
Vue embeded widget

# Web page
[WebPage Link](https://cloverhearts.github.io/vue-embedded-widget)

# How to embeded
```javascript
import Vue from "vue";
import App from "./App.vue";
import vueEmbeddedWidget from "vue-embeded-widget";
import HelloWorld from "./components/HelloWorld";
import TestPower from "./components/TestPower";

Vue.config.productionTip = false;

const v = new Vue({
  render: h => h(App)
}).$mount("#app");

const widget = vueEmbeddedWidget(Vue);

widget.registerComponent(HelloWorld, "test-my-comp");
widget.registerComponent(TestPower, '*[data-vue-app="nice"]');
widget.registerComponent(TestPower, ".nice");
widget.mount();
widget.printList();
```