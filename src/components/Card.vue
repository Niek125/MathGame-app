<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped lang="scss">
@import '../style/main';

.card {
  box-shadow:  -2px -2px 2px $primary-lighten, inset -2px -2px 2px $primary-darken;
  border-radius: $default-spacing;
}

/*.outlined-button {*/
/*  background-color: transparent;*/
/*  border-width: 5px;*/
/*  border-color: black;*/
/*  border-style: solid;*/
/*  border-radius: 0.5vh;*/
/*  height: 10vh;*/
/*  width: 40vw;*/
/*}*/

/*.text {*/
/*  font-size: 8vh;*/
/*}*/
</style>
