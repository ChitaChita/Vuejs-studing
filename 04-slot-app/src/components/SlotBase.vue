<template>
  <div id="cp-slot" class="slot-form">
    <input id="slot-value" class="slot-view" type="text" v-model="value">
    <input id="slot-button" class="slot-button" v-bind:disabled="!canStart" type="button" value="STOP" v-on:click="onSelected">
  </div>
</template>

<script>
export default {
  name: 'cp-slot',

  data () {
    return {
      value: '0',
      valueList: [
        '0', '1', '2', '3', '4', '5', '6', '7'
      ],
      canStart: false,
      timer: null
    }
  },

  props: {
    'stateflg': {
      type: Boolean,
      required: true
    }
  },

  watch: {
    // スロット開始フラグを監視、trueならスロット開始！！
    stateflg () {
      if (this.stateflg === true) {
        this.canStart = true
        this.start()
      }
    }
  },

  methods: {
    changeValue (number) {
      if (number && Math.abs(number) <= this.valueList.length) {
        this.value = this.valueList[number]
      } else {
        let num = Math.floor(Math.random() * this.valueList.length)
        this.value = this.valueList[num]
      }
    },

    start () {
      this.timer = setInterval(() => {
        this.changeValue()
      }, (1000 / 12))
    },

    onSelected () {
      // setInterval()でセットしたタイマーを解除する
      clearInterval(this.timer)
      // スロットが終ったら、buttonはdisabledする
      this.canStart = false

      // 親へ値を返す
      this.$emit('slot-selected-value', this.value)
    }
  }
}
</script>

<style>
.slot-form {
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  width: 11em;
  height: 12em;
  border: 1px solid black;
}

.slot-view {
  display: block;
  margin: 20px auto;
  text-align: center;
  font-size: 3em;
  width: 100px;
}

.slot-button {
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 100px;
  background-color: lightblue;
}

.button-disabled {
  pointer-events : none;
  background-color: grey;
}
</style>
