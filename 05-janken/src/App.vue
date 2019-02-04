<template>
<div id="app">
  <h1>Vue.jsで、じゃんけんゲーム</h1>
  <ul class="nav">
    <li><router-link to="./game">ゲーム</router-link></li>
    <li><router-link to="./score">せいせき</router-link></li>
  </ul>
  <div class="inner">
    <transition name="fade">
      <router-view v-bind:scores="scores" v-bind:saveData="saveData" v-bind:resetStorage="resetStorage"></router-view>
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
      scores: []
    }
  },

  components: {
    Game,
    Score
  },

  created () {
    this.setScore();
  },

  methods: {
    saveData (msg) {
      this.scores.push(msg)
      localStorage.setItem('scores', JSON.stringify(this.scores));
      console.log("Add localStorage");
    },
    setScore () {
      this.scores = JSON.parse(localStorage.getItem('scores')) || [];
      console.log("Set localStorage");
    },
    resetStorage () {
      localStorage.removeItem('scores')
      this.scores = []
      console.log("Reset localStorage");
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

/* App */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  display: block;
  margin: 10px auto;
  width: 30%;
  text-align: center;
  list-style: none;
  padding-left: 0;
}

.nav li {
  display: inline-block;
  font-size: 2em;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #afa58d;
  width: 130px;
  margin: 5px;
}

</style>
