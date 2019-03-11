<template>
  <div class="profile">
    <h1>Works</h1>
    <div class="works-box">
        <p class="works-title">Potoment</p>
        <img class="works-img" src="#">
        <p class="works-desc">初めて個人作成した成果物。LINE Message APIとRubyを使って写真共有サービスを作りました。詳細はブログを参照ください。</p>
        <a href="https://kodak.hatenablog.com/entry/2018/04/08/111954">リンク</a>
    </div>
    <div>
        <p>Try T.M Engineer Portfolio</p>
        <p>本サイトのこと。</p>
        <a href="https://kodak.hatenablog.com/entry/2018/04/08/111954">リンク</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
.works-box {
    display: block;
    background-color: lightcoral;
    width: 200px;
    height: 250px;
    border-radius: 10px
}
.works-title {
    display: block;
    background-color: yellow;
    font-size: 1.2em;
    margin: 0px auto;
}
.works-img {
    display: block;
    background-color: blue;
    width: 200px;
    height: 130px;
    margin: 3px auto;
}
.works-desc {
    display: block;
    background-color: lightgrey;
    font-size: 0.8em;
    margin: 0px auto;
    text-align: left;
}
</style>
