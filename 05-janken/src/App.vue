<template>
<div id="app">
  <h1>じゃんけんゲーム</h1>
  <ul class="nav">
    <li><router-link to="./game">ゲーム</router-link></li>
    <li><router-link to="./score">せいせき</router-link></li>
  </ul>
  <div class="inner">
    <transition name="fade">
      <router-view scores="scores"></router-view>
    </transition>
  </div>
</div>
</template>

<script>
import Game from '@/components/Game.vue'
import Score from '@/components/Score.vue'

export default {
  name: 'App',
  
  data () {
    return {
      localStorage: {
        scores : localStorage.getItem('scores')
      }
    };
  },

  watch: {
    scores : 'saveData'
    
  },

  components: {
    Game,
    Score
  },

  methods: {
    saveData (scores) {
      localStorage.setItem('scores', this.scores)
    }
  }
}
</script>

<style>
/* Common */
html {
    font-size: 62.5%
}
*, *::before, *::after {
    box-sizing: border-box;
}
a:link, a:visited, a:hover, a:active {
    color: #d03c56;
    text-decoration: none;
}
body {
    background-size: cover;
    text-align: center;
    font-family: Raleway, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}

li {
  display: inline;
  padding: 3px;
}

/* App */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav li {
  display: inline-block;
  font-size: 2em;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #afa58d;
}

</style>
