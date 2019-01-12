<template>
    <h1 class="message">メッセージ：{{msg}}</h1>
</template>

<script>
    export default {
        data() {
            return { msg: 'こんにちは' }
        }
    }
</script>

<style>
.message { color: #42b983 }
</style>
