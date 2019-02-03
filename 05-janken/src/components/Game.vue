<template>
<div id="game">
    <div v-if="resultMessage" class="result">
        <h2>{{ resultMessage }}</h2>
        <div><button v-on:click="start">もういちど</button></div>
    </div>

    <div class="imgArea"><img v-bind:src="src" alt=""></div>
    <ul>
        <li>
            <button v-on:click="onSelected" class="button" type="button" value="0">グー</button>
        </li>
        <li>
            <button v-on:click="onSelected" class="button" type="button" value="1">チョキ</button>
        </li>
        <li>
            <button v-on:click="onSelected" class="button" type="button" value="2">パー</button>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'game',

    props: {
        'saveData': {
            type: Function,
            requrred: true
        }
    },

    data () {
        return {
            src: require('@/assets/gu.png'),
            imgList: [
                require('@/assets/gu.png'),
                require('@/assets/ch.png'),
                require('@/assets/pa.png')
            ],
            timer: null,
            resultMessage: ''
        }
    },

    created(){
        this.start();
    },

    methods: {
        changeImg (number) {
            // 画像の切替
            // Math.abs : 絶対値、null or empty時は0(ゼロ)
            if(number && Math.abs(number) <= this.imgList.length) {
                this.src = this.imgList[number];
            } else {
                // Math.floor : 小数点以下切り捨て
                let num = Math.floor(Math.random() * this.imgList.length);
                this.src = this.imgList[num];
            }
        },
        start () {
            this.reset();
            // 一定時間が経過するごとに処理を実行する
            this.timer = setInterval( () => {
                this.changeImg();
            },(1000 / 12));
        },
        onSelected (e) {
            
            clearInterval(this.timer);

            // イベント発生源の要素取得
            let button = e.target;
            let resultNum = parseInt(this.imgList.indexOf(this.src), 10);
            let selectNum = parseInt(button.value, 10);
            let decision = this.decisionJanken(selectNum, resultNum);

            // 与えられた CSS セレクターに一致する文書中の要素のリストを示す静的な (生きていない) NodeList を返します。
            let btns = document.querySelectorAll('.button');
            for (let btn of btns) {
                btn.classList.add('is-selected');
            }

            if (decision == 1) {
                this.resultMessage = 'かち';
            } else if(decision == 2 ) {
                this.resultMessage = 'ひきわけ';
            } else {
                this.resultMessage = 'まけ';
            }
            console.log(this.resultMessage);
            this.saveData( { 'msg': this.resultMessage } );
        },
        reset () {
            let btns = document.querySelectorAll('.button');
            for ( let btn of btns) {
                btn.classList.remove('is-selected');
            }
            this.resultMessage = '';
            
        },
        decisionJanken(myHand, youHand) {
            let result = 0; // 0は負け、1は勝ち、2は引き分け

            switch (myHand) {
                // グー
                case 0:
                    if (youHand === 1) { result = 1; }
                    if (youHand === 0) { result = 2; }
                    break;
                // チョキ
                case 1:
                    if (youHand === 0) { result = 1; }
                    if (youHand === 1) { result = 2; }
                    break;
                // パー
                case 2:
                    if (youHand === 0) { result = 1; }
                    if (youHand === 2) { result = 2; }
                    break;
            }
            return result;
        }
    }
}
</script>

<style>
.imgArea img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    border: 1px solid #ccc;
}

.is-selected {
    display: none;
}
</style>