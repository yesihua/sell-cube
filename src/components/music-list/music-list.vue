<template>
  <div class="music-list">
    <h1 class="title" v-html="title"></h1>
    <div class="bg-image" :style="bgStyle"></div>
    <scroll :data="songs" v-if="songs.length>1" class="list">
      <div class="song-list-wrapper">
        <song-list :songs="songs"></song-list>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import songList from 'base/song-list/song-list'
  import Scroll from 'components/base/scroll'

  export default {
    name: 'music-list',
    components: {
      Scroll,
      songList
    },
    props: {
      songs: {
        type: Array,
        default: null
      },
      title: {
        type: String,
        default: ''
      },
      bgImage: {
        type: String,
        default: ''
      }
    },
    computed: {
      bgStyle() {
        return `background-image:url(${this.bgImage})`
      }
    },
    created() {
      let afun = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(3)
          }, 2000)
        })
      }
      let bfun = new Promise(function (resolve, reject) {
        reject('sssss')
      })
      bfun.then()
    },
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .list
    position: fixed
    top: 0
    bottom: 0
    width: 100%

    .song-list-wrapper
      padding: 20px 30px

  .title
    position: absolute
    top: 0
    left: 10%
    z-index: 40
    width: 80%
    no-wrap()
    text-align: center
    line-height: 40px

  .bg-image
    position: relative
    width: 100%
    height: 0
    padding-top: 70%
    transform-origin: top
    background-size: cover
</style>
