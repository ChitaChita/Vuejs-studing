<template>
<div id="score">
    <h2>せいせき</h2>
    <div>
        <button type="button" v-on:click.prevent="dataReset">クリア</button>
    </div>
    <ul v-if="scores">
        <li v-for="(score, i) of $parent.$data.scores">
            <span>{{ (i+1) }}:</span>
            {{ score.message }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'scores',

    props: ['scores'],

    data () {
        return {}
    },
    methods: {
        dataReset() {
            this.$parent.$data.scores = []
        }
    }
}
</script>