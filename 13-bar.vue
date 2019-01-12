<template>
    <div class="bar">
        <h1 class="header">Barコンポーネント</h1>
        <p>これはBarコンポーネントです。</p>
        <foo class="header"/>
    </div>
</template>

<script>
import Foo from './13-foo'
export default {
    components: {
        Foo
    }
}
</script>

<style scoped>
.bar {
    border: solid 1px green;
    margin: 4px;
    padding: 4px;
}
.header { font-size: 125%; }
</style>

