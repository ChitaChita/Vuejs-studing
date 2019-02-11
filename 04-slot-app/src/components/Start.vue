<template>
  <div id="start-button" class="start-button-form">
    <input class="start-button" type="button" value="START" v-on:click="$emit('slot-start', true)">
  </div>
</template>

<script>
export default {
  name: 'start'
}
</script>

<style>
.start-button-form {
  display: block;
  margin: 10px auto;
}

.start-button {
  display: block;
  margin: 0 auto;
  padding: 0 130px;
  text-align: center;
  background-color: greenyellow;
  font-size: 2em;
}
</style>
