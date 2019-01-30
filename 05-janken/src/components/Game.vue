<template>
    <div>

        <div v-if="resultMessage" class="result">
            <h2>{{ resultMessage }}</h2>
            <div><button v-on:click="start">もういちど</button></div>
        </div>

        <div class="imgArea">
            <img v-bind:src="src" alt="">
        </div>
        <ul>
            <li>
                <button v-on:click="onSelected" class="button" type="button" value="0">グー<button>
            </li>
            <li>
                <button v-on:click="onSelected" class="button" type="button" value="1">チョキ<button>
            </li>
            <li>
                <button v-on:click="onSelected" class="button" type="button" value="2">パー<button>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'game',

    data() {
        return {
            src: '@/assets/gu.png',
            imgList: [
                '@/assets/gu.png',
                '@/assets/pa.png',
                '@/assets/ch.png'
            ],
            timer: null,
            resultMessage: ''
        }
    },

    created(){
        this.start();
    },

    methods: {
        changeImg(number) {
            // 画像の切替
            // Math.abs : null or empty時は0(ゼロ)
            if(number && Math.abs(number) <= this.imgList.length) {
                this.src = this.imgList[number];
            } else {
                // Math.floor : 小数点以下切り捨て
                let num = Math.floor(Math.random() * this.imgList.length);
                this.src = this.imgList[num];
            }
        },
        start() {
            this.reset();
            // 一定時間が経過するごとに処理を実行する
            this.timer = setInterval( () => {
                this.changeImg();
            },(1000 / 12));
        },
        onSelected(e) {
            
            clearInterval(this.timer)

            // イベント発生源の要素取得
            let button = e.target;
            
            let resultNum = parseInt(this.imgList.indexOf(this.src), 10);
            let selectNum = parseInt(button.value, 10);
            let decision = this.decisionJanken(selectNum, resultNum);

        },
        reset() {
            
        }
    }

}
</script>