<docs>
# HelloWorldコンポーネント

## 概要
これはHelloWorldコンポーネントの使用方法について書かれたドキュメントです。

## 使用方法

</docs>

<template>
    <div class="hello">
        <p class="message">メッセージ：{{msg}}</p>
        <!-- 変換されたカスタムブロックのコンテンツを挿入 -->
        <p v-html="docs"></p>
    </div>
</template>

<script>
import marked from 'marked'

export default {
    name: 'HellowWorld',
    data(){
        return {
            // webpack/Vue Loaderによって注入されたカスタムブロックのコンテンツは`$options`経由で取得可能
            // ここでは、__docsのmarkdown形式のコンテンツをライブラリによってHTMLに変換して、`docs`に初期データとして設定
            docs: marked(this.$options.__docs),
            msg: 'こんにちは'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message { color: #42b983; }
</style>