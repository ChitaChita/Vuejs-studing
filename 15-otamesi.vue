<template>
    <div id="app">
        <h1>メッセージ：{{message}}</h1>
        <button @click="share">{{count}}</button>
    </div>
</template>

<style>
</style>

<script>
export default({
    data() {
        return {
            message: 'こんばんは',
            count: 0 
        }
    },
    methods: {
        share() {

        }
    }
})
</script>