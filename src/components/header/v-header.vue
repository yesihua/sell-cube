<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          <span>{{seller.description}}</span>/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail" :seller="seller">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right" ></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail" :seller="seller">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right" ></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-header',
    props: {
      seller: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        classMap: []
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    },
    methods: {
      showDetail() {
        this.headerDetailCom = this.headerDetailCom || this.$createHeaderDetail({
            seller: 'seller'
        })
        this.headerDetailCom.visible = true
        this.headerDetailCom.seller = this.seller
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .header
    color: #fff
    background: rgba(7,17,27,0.5)
    position: relative
    overflow: hidden
    .content-wrapper
      padding: 24px 12px 38px 24px
      font-size: 0
      position: relative
      .avatar
        display: inline-block
        font-size: 14px
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        font-size: 14px
        margin-left: 16px
        .title
          margin: 2px 0px 8px 0px
          .brand
            display: inline-block
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            font-weight: bold
            line-height: 18px
            vertical-align: top
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .supports
          .icon
            vertical-align: top
            display: inline-block
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            font-size: 10px
            line-height: 12px
            vertical-align: top
      .support-count
        position: absolute
        right: 12px
        bottom: 14px
        padding: 0px 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background-color: rgba(0,0,0,0.2)
        text-align: center
        .count
          font-size: 10px
          vertical-align: top
        .icon-keyboard_arrow_right
          font-size: 10px
          line-height: 24px
          margin-left: 2px
    .bulletin-wrapper
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      background-color: rgba(7,17,27,0.2)
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      position: relative
      .bulletin-title
        bg-image('bulletin')
        display: inline-block
        width: 22px
        height: 12px
        vertical-align: top
        background-size: 22px 12px
        background-repeat: no-repeat
        margin-top: 8px
      .bulletin-text
        font-size: 10px
        margin: 0 4px
        vertical-align: top
      .icon-keyboard_arrow_right
        position: absolute
        right: 12px
        font-size: 10px
        top: 10px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
</style>
