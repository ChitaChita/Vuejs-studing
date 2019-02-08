<template>
  <div id="app">
    <h1>Vue.jsでスロット</h1>
    <ul class="nav">
        <li><router-link to="./">ゲーム</router-link></li>
        <li><router-link to="./score">せいせき</router-link></li>
    </ul>
    <router-view v-bind:scoreList="this.$store.state.result"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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
  background-color: #86b45a;
  width: 130px;
  margin: 5px;
}

</style>
