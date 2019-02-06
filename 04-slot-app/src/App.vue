<template>
  <div id="app">
      test
    <Slot v-bind:inputResult="inputResult" ></Slot>
    <Slot v-bind:inputResult="inputResult" ></Slot>
    <Slot v-bind:inputResult="inputResult" ></Slot>
    <Modal v-if="modalflg" v-bind:result="result"></Modal>
  </div>
</template>

<script>
import Slot from '@/components/Slot.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'app',

  data () {
    return {
        modalflg: false,
        result: []
    }
  },

  components: {
    Slot,
    Modal
  },

  watch: {
      result() {
          console.log('データが追加されました。');
          if ( this.result.length === 3) {
              this.onModal();
              console.log('データが3件追加されました。');
          }
      }
  },

  methods: {
      inputResult (num) {
          this.result.push(num);
          console.log(this.result);
      },
      onModal () {
          this.modalflg = true;
      },
      offModal () {
          this.modalflg = false;
      }
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
