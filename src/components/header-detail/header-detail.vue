<template>
  <transition name="fade">
    <div v-show="visible" class="header-detail">
      <div>啦啦啦啦</div>
      <cube-button @click="hide">关闭</cube-button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'header-detail',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      hide() {
        this.visible = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
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
    &.fade-enter-active,&.fade-leave-active
      transition: all 0.5s
    &.fade-enter , &.fade-leave-active
      opacity: 0
      background: $color-background
</style>
