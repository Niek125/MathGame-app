<template>
  <div class="outlined-button flexbox">
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'OutlinedButton',
  props: {
    text: String
  }
}
</script>

<style scoped>
.outlined-button {
  background-color: transparent;
  border-width: 5px;
  border-color: black;
  border-style: solid;
  border-radius: 0.5vh;
  height: 10vh;
  width: 40vw;
}

.text {
  font-size: 8vh;
}
</style>
