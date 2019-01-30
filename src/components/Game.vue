<template>
    <div>
        <div v-if="resultMessage" class="result">
            <h2>{{ resultMessage }}</h2>
            <div><button @click="start">もういちど</button></div>
        </div>

        <div class="imgArea"><img v-bind:src="src" alt=""></div>
        <ul>
            <li>
                <button @click="onSelected" class="button" type="button" value="0">グー</button>
            </li>
            <li>
                <button @click="onSelected" class="button" type="button" value="0">チョキ</button>
            </li>
            <li>
                <button @click="onSelected" class="button" type="button" value="0">パー</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'geme',

    data() {
        return {
            src: '@/assets/ch.png',
            imgList: [
                '@/asserts/gu.png',
                '@/asserts/pa.png',
                '@/asserts/ch.png'
            ],
            timer: null,
            resultMessage: ''
        }
    },

    created() {
        this.start();
    },

    methods: {
        start() {
            this.reset();
            this.timer = setInterval( () => {
                this.changeImag
            })
        }
    }
}
</script>
