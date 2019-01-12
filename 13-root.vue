<template>
    <div id="root">
        <h1 class="header">Rootコンポーネント</h1>
        <p>これはRootコンポーネントです。</p>
        <foo/>
        <bar/>
    </div>
</template>

<script>
import Foo from './13-foo'
import Bar from './13-bar'
export default{
    components: {
        Foo,
        Bar
    }
}
</script>

<style>
#root {
    border: solid 1px blue;
    margin: 4px;
    padding: 4px;
}
.header { font-size: 200%; }
</style>
