<template>
  <transition name="fade">
    <div v-show="visible" class="header-detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :score="seller.score" :size="48"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li v-for="item in seller.supports" class="support-item">
              <span class="icon" :class="classMap[item.type]"></span>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <p class="bulletin">{{seller.bulletin}}</p>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close" @click="hide"></i>
      </div>
    </div>
  </transition>
</template>

<script>
  import star from '../../components/star/star'

  export default {
    name: 'header-detail',
    data() {
      return {
        visible: false,
        seller: {
          type: Object,
          default() {
            return {}
          }
        },
        classMap: []
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    },
    methods: {
      hide() {
        this.visible = false
      }
    },
    components: {
      star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "../../common/stylus/mixin.styl"
  .header-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
    backdrop-filter: blur(10px)
    opacity: 1
    color: $color-white
    background: $color-background-s

    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s

    &.fade-enter, &.fade-leave-active
      opacity: 0
      background: $color-background

    .detail-wrapper
      min-height: 100%
      width: 100%

      .detail-main
        margin-top: 64px
        padding-bottom: 64px

        .name
          line-height: 16px
          text-align: center
          font-size: 16px
          font-weight: 700
        .star-wrapper
          margin-top: 18px
          padding:2px 0px
          text-align: center
        .title
          width: 80%
          margin: 28px auto 24px
          display: flex
          .line
            flex: 1
            position: relative
            top: -6px
            border-bottom:1px solid rgba(255,255,255,0.2)
          .text
            padding:0 12px
            font-size: 14px
            font-weight: 700
        .bulletin
          width: 80%
          margin: 0 auto
          line-height: 24px
          font-size: 12px
          padding: 0 12px
        .supports
          width: 80%
          margin:0 auto
          .support-item
            margin-bottom: 12px
            padding: 0 12px
            font-size: 0
            &:last-child
              margin-bottom: 0
            .icon
              vertical-align: top
              display: inline-block
              width: 16px
              height: 16px
              background-size: 16px 16px
              background-repeat: no-repeat
              margin-right: 6px
              &.decrease
                bg-image('decrease_2')
              &.discount
                bg-image('discount_2')
              &.guarantee
                bg-image('guarantee_2')
              &.invoice
                bg-image('invoice_2')
              &.special
                bg-image('special_2')
            .text
              font-size: 12px
              line-height: 16px
              vertical-align: top
    .detail-close
      position: relative
      width: 32px
      height: 32px
      margin: -64px auto 0 auto
      clear: both
      font-size: 32px
</style>
