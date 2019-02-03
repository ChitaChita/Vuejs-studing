<template>
<div id="score">
    <h2>せいせき</h2>
    <div>
        <button type="button" v-on:click="dataReset">クリア</button>
    </div>
    <ul v-if="scores">
        <li v-for="(score, index) in scores" :key="index">{{ score.msg }}</li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'scores',

    props: {
        'scores': {
            type: Array,
            requrred: true
        },
        'resetStorage': {
            type: Function,
            requrred: true
        }
    },

    data () {
        return {}
    },
    methods: {
        dataReset() {
            this.resetStorage();
        }
    }
}
</script>