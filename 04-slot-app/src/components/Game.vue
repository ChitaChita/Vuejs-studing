<template>
<div id="game">
    <Start v-on:slot-start="onStart"></Start>
    <Slot v-on:slot-selected-value="inputResult" v-bind:stateflg="this.$store.state.stateflg"></Slot>
    <Slot v-on:slot-selected-value="inputResult" v-bind:stateflg="this.$store.state.stateflg"></Slot>
    <Slot v-on:slot-selected-value="inputResult" v-bind:stateflg="this.$store.state.stateflg"></Slot>
    <Modal v-if="this.$store.getters.getModalflg" v-bind:result="result" v-on:close="offModal"></Modal>
</div>
</template>

<script>
import Start from '@/components/Start.vue'
import Slot from '@/components/Slot.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'game',

  // 値を一時的な値を保持するためにVuexがあっても必要だったりする・・・・
  data () {
    return {
        result: []
    }
  },

  components: {
    Start,
    Slot,
    Modal
  },

  watch: {
      result() {
          let slotNum = document.querySelectorAll("#cp-slot").length;
          // 2スロット完了時に処理が動く
          if ( this.result.length === slotNum ) {
              this.onModal();
              this.$store.commit('addResult', {
                result: this.result
              });
              this.offStart();
          }
      }
  },

  created() {
    this.offStart();
    this.result = [];
  },


  methods: {
      inputResult(num) {
          this.result.push(num);
      },
      onStart() {
          this.$store.commit('chgStateflg', {
            stateflg: true
          });
      },
      offStart() {
          this.$store.commit('chgStateflg', {
            stateflg: false
          })
      },
      onModal() {
          this.$store.commit('chgModalflg', {
            modalflg: true
          });
      },
      offModal() {
          this.$store.commit('chgModalflg', {
            modalflg: false
          });
          // 一時保管をリセット
          this.result = [];
      }
  }
}
</script>