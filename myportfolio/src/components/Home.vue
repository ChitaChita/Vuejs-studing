<template>
  <div class="hello">
    <h1>Try T.M Engineer Portfolio</h1>
    <svg viewbox="0 0 300 300" width="300" height="300">
      <circle :r="r" :cx="cx" :cy="cy" stroke="black" />
    </svg>
    <input type="range" v-model="cx">
    <input type="range" v-model="cy">
    <input type="range" v-model="r">
  </div>
</template>

<script>
export default {
  data () {
    return {
      cx: 180,
      cy: 60,
      r: 50
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
