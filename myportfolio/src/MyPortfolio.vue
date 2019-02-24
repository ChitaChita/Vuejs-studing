<template>
  <div id="myportfolio">
    <nav class="global-nav clearfix">
      <ul>
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#">About</a></li>
        <li class="nav-item"><a href="#">Work</a></li>
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
  margin-top: 60px;
}
.global-nav {
  text-align: center;
}
.global-nav .nav-item {
  display: inline-block;
  float: left;
  margin-left: -1px;
}
.global-nav {
  width: 50px;
  height: 40px;
  font-size: 1.4rem;
  line-height: 15px;
  text-align: center;
  /* フレックスコンテナによる中央寄せ */
  display: flex;
  justify-content: center;
  align-items: center;
}
.global-nav .nav-item a {
  display: inline-block;
  width: 120px;
  height: 40px;
  border: 1px solid gainsboro;
  font-size: 1.4rem;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1px;
  transition: 0.15s;
  color: black;
  font-weight: bold;
}
.global-nav .nav-item.active a,
.global-nav .nav-item a:hover {
  background-color: orange;
  color: black;
}
</style>
