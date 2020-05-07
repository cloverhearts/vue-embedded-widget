<template>
  <div class="vue-component">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'VueAppAnchor'
  }
</script>

<style lang="css" scoped>
  .vue-component:before {
    content: 'This is Vue component!';
    font-size: 11px;
    color: white;
  }
  .vue-component {
    display: inline-block;
    border: 1px dashed #006400;
    padding: 10px;
  }

</style>
