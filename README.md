# vue-embeded-widget

# Web page
[WebPage Link](https://cloverhearts.github.io/vue-embedded-widget)

# Introduce

VEW (Vue Embedded Widget) 소개
현재 (2018년 ~ 현재) 많은 웹 서비스들이 Jquery 기반의 웹 페이지에서 Vue나 React 기반의 Modern Web app으로 전환을 진행하고 있습니다.

그러나 기존 운영중인 서비스가 있는 환경의 경우 기존의 레거시 웹페이지 구성을 단번에 현대적인 웹앱 구성으로 변경할 수 없는 것이 사실이며, 결과적으로 Jquery 기반의 레거시 웹을 Vue나 React의 현대적인 구성의 웹페이지로 전환이 실패하는 사례가 많은 것이 사실입니다.

이 라이브러리를 개발한 시점의 저역시 마찬가지 상황이었으며, 이에 대한 해결책을 찾아해매며 낸 결론은, 운영중인 서비스가 존재하는 상황에서 현대적인 웹앱으로의 전환을 위해 현대적인 웹앱의 컴포넌트 구성과 레거시 웹의 구성이 전환되는 중간 과정이 필요하다는 것이었습니다.

![img](https://user-images.githubusercontent.com/10525473/81318339-139b6a00-90c9-11ea-8cc8-a4eb16e2f4b3.png)


구름에 위치한 중간 과정을 저는 편의상 "하이브리드 앱 상태(Hybrid app status)"라고 부르겠습니다. 대표적으로 사용되는 Vue 프레임워크의 하이브리드 앱 상태를 목적으로 만들어진 VEW 라이브러리는 다음 상태를 목적으로 하여 만들어졌습니다.

# Install

```
npm install --save vue-embedded-widget
```

# Purpose and how to use

![img](https://user-images.githubusercontent.com/10525473/81318341-14340080-90c9-11ea-9865-a24a4d303e3e.png)

VEW 라이브러리를 통하여, 신규로 구성 개발이 필요한 웹페이지의 기능적 구성을 Vue의 컴포넌트 단위의 개발로 전환합니다.
현대적인 구조로 작성한 컴포넌트들을 기존의 프로젝트에 HTML Element를 삽입하는 단순한 동작으로 Vue 컴포넌트와 기존의 웹 페이지의 구성들을 그대로 가져갈 수 있습니다. Vue 컴포넌트를 삽입하는 방법은 기존의 HTML Markup과 완전히 동일하므로 업무의 변화도 크지 않습니다.

```
  // app js loaded
  <script src="./components/js/app.2b726121.js"></script>
  <link rel="stylesheet" href="./components/css/app.7275f92c.css" />
  <div class="lagacy-codes">
    ....
    // vue component
    <vue-component msg="vue-app!" />
</div>
```
~ Inject code ~

```
<template>
  <VueAppAnchor>
    <div class="hello">
      {{msg}} with Vue component!
    </div>
  </VueAppAnchor>
</template>

<script>
  import VueAppAnchor from './VueComponentHere'
export default {
  name: 'HelloWorld',
  components: { VueAppAnchor },
  props: {
    msg: String
  }
}
</script>

<style scoped>
...
</style>
```
~ Vue "HelloWorld" Component 구현 코드 ~

```
import Vue from 'vue'
import VEW from 'vue-embedded-widget'
import HelloWorld from './components/HelloWorld'

const widget = VEW(Vue)

widget.registerComponent(HelloWorld, "vue-component");

document.addEventListener('DOMContentLoaded', () => {
  widget.mount();
})
```

~ Vue script 랜더링 코드 ~

이것의 결과는 다음과 같습니다. 하단의 단순한 엘리먼트를 웹페이지 소스코드 보기와 디버깅창 (Inspector)의 웹 마크업 구조를 동시에 살펴보기를 권합니다. 정상적으로 랜더링 되었다면, 소스보기에서는 단순한 HTML Element가 디버깅 창 (Inspector)에서는 랜더링 된 Vue component가 보이게 됩니다.

```
<vue-component msg="vue-app!"></vue-component>
<test-my-comp msg="vue-app!"></test-my-comp>
<div data-vue-app="nice" msg="안녕!"></div>
<div class="nice-component" msg="하하하"></div>
```

결과적으로 완전히 분리된 형태의 서비스 개발 생명주기와 Widget 형태로 기존 서비스에 접착형태로 개발/구현 가능하기 때문에 현대적인 웹앱으로의 전환을 쉽게 합니다.
일단 vue 컴포넌트 구성으로 기능구현이 어느정도 진행이 되면, 기존 컴포넌트를 재배열하여 웹페이지를 다시 구성하는 것은 어렵지 않습니다.
또한 data-vue, msg와 같은 props 값을 통해 서버 사이드에서 직접 랜더링 된 데이터를 vue component에 주입시키는 것도 가능합니다.
"안녕", "하하하" "vue-app"이 msg 프로퍼티를 통해 주입되었다는 사실을 잊지 마세요!

# 재사용 가능한 서비스 컴포넌트 시스템
또한 js 및 css를 포함 시키는 것만으로 동작이 가능하기 때문에, 다양한 서비스에서 동일한 컴포넌트를 재사용 가능한 시스템을 구현할 수 있습니다.
이미지를 참고해주세요.
가령, 당신이 하단의 스크립트를 당신의 로컬 index.html이나 codepen과 같은 외부 환경에서 다음을 고스란히 넣어보세요. 그 즉시 별도의 구현없이도 vue component 들이 랜더링 될 것입니다.

```
  <script src="https://raw.githack.com/cloverhearts/vue-embedded-widget/feature/example/docs/components/js/chunk-vendors.56c457bf.js"></script>
  <script src="https://raw.githack.com/cloverhearts/vue-embedded-widget/feature/example/docs/components/js/app.2b726121.js"></script>
  <link rel="stylesheet" href="https://raw.githubusercontent.com/cloverhearts/vue-embedded-widget/feature/example/docs/components/css/app.7275f92c.css" />
  <script src="./components/js/chunk-vendors.56c457bf.js"></script>

  <test-my-comp msg="vue-app!"></test-my-comp>
  <div data-vue-app="nice" msg="안녕!"></div>
  <div class="nice-component" msg="하하하"></div>
```

이미 예제가 존재합니다.
저장소를 [참고](https://github.com/cloverhearts/vue-embedded-widget/tree/master/example) 해주세요

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