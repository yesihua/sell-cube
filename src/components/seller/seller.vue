<template>
  <div class="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc">
          <star :score="seller.score" :size="36"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span>月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite" @click="toggleFavorite">
          <span class="icon-favorite" :class="{'active':favorite}"></span>
          <span class="text">{{favoriteText}}</span>
        </div>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-bottom-1px">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul v-if="seller.supports" class="supports">
          <li
            class="support-item border-bottom-1px"
            v-for="(item,index) in seller.supports"
            :key="index"
          >
            <support-ico :size=4 :type="seller.supports[index].type"></support-ico>
            <span class="text">{{seller.supports[index].description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from '../star/star'
  import { loadFromLocal, saveToLocal } from '../../common/js/storage'
  import split from '../split/split'
  import SupportIco from 'components/support-ico/support-ico'
  const KEY = 'favorite'
  export default {
    name: 'seller',
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      star,
      split,
      SupportIco
    },
    methods: {
      toggleFavorite() {
        this.favorite = !this.favorite
        saveToLocal(this.seller.id, KEY, this.favorite)
      }
    },
    created() {
      this.favorite = loadFromLocal(this.seller.id, KEY, false)
    },
    computed: {
      favoriteText() {
        return this.favorite ? '已收藏' : '收藏'
      }
    },
    data() {
      return {
        favorite: false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .seller
    position: absolute
    top: 196px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden

    .overview
      position: relative
      padding: 18px

      .title
        margin-bottom: 8px
        line-height: 14px
        font-size: $fontsize-medium
        color: $color-dark-grey

      .desc
        display: flex
        align-items: center
        padding-bottom: 18px

        .star
          margin-right: 8px

        .text
          margin-right: 12px
          line-height: 18px
          font-size: $fontsize-small-s
          color: $color-grey

      .remark
        display: flex
        padding-top: 18px

        .block
          flex: 1
          text-align: center
          border-right: 1px solid $color-col-line

          &:last-child
            border: none

          h2
            margin-bottom: 4px
            line-height: 10px
            font-size: $fontsize-small-s
            color: $color-light-grey

          .content
            line-height: 24px
            font-size: $fontsize-small-s
            color: $color-dark-grey

            .stress
              font-size: $fontsize-large-xxx

      .favorite
        position: absolute
        width: 50px
        right: 11px
        top: 18px
        text-align: center

        .icon-favorite
          display: block
          margin-bottom: 4px
          line-height: 24px
          font-size: $fontsize-large-xxx
          color: $color-light-grey-s

          &.active
            color: $color-red

        .text
          line-height: 10px
          font-size: $fontsize-small-s
          color: $color-grey
    .bulletin
      padding: 18px 18px 0 18px
      white-space: normal
      .title
        margin-bottom: 8px
        line-height: 14px
        color: $color-dark-grey
        font-size: $fontsize-medium
      .content-wrapper
        padding: 0 12px 16px 12px
        .content
          line-height: 24px
          font-size: $fontsize-small
          color: $color-red
      .supports
        .support-item
          display: flex
          align-items: center
          padding: 16px 12px
          &:last-child
            border-none()
        .support-ico
          margin-right: 6px
        .text
          line-height: 16px
          font-size: $fontsize-small
          color: $color-dark-grey
    .pics
      padding: 18px
      .title
        margin-bottom: 12px
        line-height: 14px
        color: $color-dark-grey
        font-size: $fontsize-medium
      .pic-wrapper
        display: flex
        align-items: center
        .pic-list
          .pic-item
            display: inline-block
            margin-right: 6px
            width: 120px
            height: 90px
            &:last-child
              margin: 0
    .info
      padding: 18px 18px 0 18px
      color: $color-dark-grey
      .title
        padding-bottom: 12px
        line-height: 14px
        font-size: $fontsize-medium
      .info-item
        padding: 16px 12px
        line-height: 16px
        font-size: $fontsize-small
        &:last-child
          border-none()
</style>
