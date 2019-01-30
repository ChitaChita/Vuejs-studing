<template>
  <div id="app">
      <game scores="scores"></game>
      <score scores="scores"></score>
  </div>
</template>

<script>
import Game from '@/components/Game.vue'
import Score from '@/components/Score.vue'

export default {
  name: 'App',
  
  components: {
      Game,
      Score
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
