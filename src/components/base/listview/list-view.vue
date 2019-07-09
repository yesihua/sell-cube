<template>
  <scroll class="list-view" :data="data" ref="listview" :probe-type="probeType">
    <ul>
      <li v-for="(item,index) in data" :key="index" class="blocksinger" ref="listgroup">
        <h2>{{item.title}}</h2>
        <ul>
          <li v-for="(value,index) in item.items" :key="index">
            <img v-lazy="value.avatar"/>
            <el-button type="success" plain @click="showList(value)">{{value.name}}</el-button>
          </li>
        </ul>
      </li>
    </ul>
    <div class="shorcutlist" @touchstart.stop.prevent="onShortcutTouchStart"
         @touchmove.stop.prevent="onShortcutTouchMove">
      <ul>
        <li v-for="(item,index) in shorcutlist" :key="index" class="item">
          <el-tag v-if="index==0" size="mini" type="danger" :data-index="index">{{item}}</el-tag>
          <el-tag v-else size="mini" :data-index="index">{{item}}</el-tag>
        </li>
      </ul>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'components/base/scroll'
  import {getData} from 'common/js/dom'

  const ANCH_HEIGHT = 20
  export default {
    name: 'list-view',
    props: {
      data: {
        type: Array,
        default: null
      }
    },
    created() {
      this.probeType = 3
      this.touch = {}
    },
    computed: {
      shorcutlist() {
        return this.data.map((item) => {
          return (item.title).slice(0, 1)
        })
      }
    },
    methods: {
      showList(item) {
        this.$emit('select', item)
      },
      onShortcutTouchStart(e) {
        let currentIndex = getData(e.target, 'index')
        let firstTouch = e.touches[0]
        this.touch.y1 = firstTouch.pageY
        this.touch.currentIndex = currentIndex
        this._scrollTo(currentIndex)
      },
      _scrollTo(index) {
        this.$refs.listview.scrollToElement(this.$refs.listgroup[index], 0)
      },
      onShortcutTouchMove(e) {
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        let delta = (this.touch.y2 - this.touch.y1) / ANCH_HEIGHT | 0
        let lastIndex = this.touch.currentIndex + delta
        this._scrollTo(lastIndex)
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .list-view
    position: relative
    overflow: hidden
    width: 100%
    height: 100%

    .blocksinger
      margin-top: 15px
      margin-bottom: 15px

      li
        margin-bottom: 10px
        display: flex
        align-items: center
        padding-left: 10px

        img
          width: 35px
          border-radius: 17px
          height: 35px
          margin-right: 10px

      &:last-child
        margin-bottom: 0px

      h2
        padding: 10px
        margin-bottom: 10px
        font-weight: bold
        background: #ebeef5

    .shorcutlist
      position: absolute
      top: 50%
      right: 0
      transform: translateY(-50%)
      z-index: 999

      .item
        pading: 3px
</style>
