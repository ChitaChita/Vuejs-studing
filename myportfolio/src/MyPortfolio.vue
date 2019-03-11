<template>
  <div id="myportfolio">
    <nav class="nav clearfix">
      <ul>
        <li class="nav-item"><router-link to="./">Home</router-link></li>
        <li class="nav-item"><router-link to="./profile">Profile</router-link></li>
        <li class="nav-item"><router-link to="./works">Works</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MyPortfolio'
}
</script>

<style>
#myportfolio {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.nav {
  font-size: 1.4rem;
  line-height: 15px;
  text-align: center;
  display: block;
  margin: 10px auto;
  padding-left: 0
}
.nav-item {
  display: inline-block;
  font-size: 2em;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  background-color: lightpink;
  width: 150px;
  margin: 5px;
  list-style: none;
}
.nav .nav-item a {
  display: inline-block;
  width: 150px;
  height: 20px;
  font-size: 1.3rem;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  letter-spacing: 1px;
  transition: 0.15s;
  color: black;
  font-weight: bold;
  list-style: none;
}
.nav .nav-item.active,
.nav .nav-item:hover {
  background-color: orange;
  color: black;
}
</style>
