<template>
  <div id="score">
    <ul class="score-list">
      <li class="score-list-item" v-for="sc in scoreList" :key="sc.id">
        {{ sc.id+1 }}回目：{{ sc.slotValues }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'score',
  data () {
    return {
      scoreList: this.$store.getters.getResult
    }
  }
}
</script>

<style>
.core-list {
  list-style: none;
  padding-left: 0
}
.score-list-item {
  display: block;
  font-size: 2em;
  text-align: center;
  text-decoration: none;
  margin: 5px;
}
</style>
