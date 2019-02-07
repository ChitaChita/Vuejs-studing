<template>
  <div id="app">
      test
    <Slot v-bind:slot-selected-value="inputResult"></Slot>
    <Slot v-bind:slot-selected-value="inputResult"></Slot>
    <Modal v-if="modalflg" v-bind:result="result" v-bind:close="offModal"></Modal>
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
          if ( this.result.length === 2) {
              this.onModal();
              console.log('データが2件追加されました。');
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
