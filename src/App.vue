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

<style scoped lang="scss">
@import 'src/style/main';

#app {
  width: 100%;
  height: 100%;
  background-color: $primary;
}
</style>
