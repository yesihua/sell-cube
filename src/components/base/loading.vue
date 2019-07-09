<template>
  <div class="loading">
    <img src="./loading.gif" width="24" height="24">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'loading',
    props: {
      title: {
        type: String,
        default: '正在载入'
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .loading
    width: 100%
    text-align: center

    .desc
      line-height: 20px
      font-size: $fontsize-small
      color: $color-text-l
</style>
