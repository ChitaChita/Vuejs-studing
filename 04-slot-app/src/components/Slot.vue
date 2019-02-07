<template>
    <div id="slot-form">
        <input type="text" id="slot" v-model="value">
        <input type="button" value="停止">
    </div>
</template>

<script>
export default {
    name: 'slot',

    data () {
        return {
            value: '0',
            valueList: [
                '0','1','2','3','4','5','6','7'
            ],
            timer: null,
        }
    },

    created () {
        this.start();
    },

    methods: {
        changeValue(number) {
            // Math.abs : 絶対値、null or empty時は0(ゼロ)
            if(number && Math.abs(number) <= this.valueList.length) {
                this.value = this.valueList[number];
            } else {
                // Math.floor : 小数点以下切り捨て
                let num = Math.floor(Math.random() * this.valueList.length);
                this.value = this.valueList[num];
            }
        },

        start() {
            // 一定時間が経過するごとに処理を実行する
            this.timer = setInterval( () => {
                this.changeValue();
            },(1000 / 12));
        },

        onSelected() {
            // setInterval()でセットしたタイマーを解除する
            clearInterval(this.timer);
            
            // 親へ値を渡す
            this.$emit('slot-selected-value',this.value);
        }
    }
}
</script>