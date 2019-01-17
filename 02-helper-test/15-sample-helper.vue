<template>
    <div>
        <p>{{count}}</p>
        <button v-on:click="increment(1)">+1</button>
    </div>
</template>

<script>
// `mapState`と`mapMutationsをインポート`
import {mapState, mapMutations} from 'vuex'

export default {
    // `$store.state.count`を`this.count`に結びつける
    computed: mapState([
        'count'
    ]),
    // `$store.commit('increment', value)`を`this.increment(value)`で呼び出せるようにする
    methods: mapMutations([
        'increment'
    ])
}
</script>