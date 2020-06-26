<template>
  <div id="app">
    <game-screen></game-screen>
  </div>
</template>

<script>
import GameScreen from '@/views/GameScreen'
export default {
  name: 'App',
  components: { GameScreen }
}
</script>

<style>
.flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
