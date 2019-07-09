<template>
  <transition name="slide">
    <music-list v-if="songs.length>1" :songs="songs" :title="title" :bgImage="bgImage">
    </music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import { getSingerDetail } from 'api/singer'
  import musicList from 'components/music-list/music-list'
  import { createSong } from 'common/js/song'
  import { ERR_OK } from 'api/config'

  export default {
    components: {
      musicList
    },
    name: 'list-show',
    data() {
      return {
        name: {
          type: String,
          default: ''
        },
        songs: {
          type: Array,
          default: []
        }
      }
    },
    created() {
      this.name = this.singer.name
      if (!this.singer.id) {
        this.$router.back()
        return
      }
      this._getSingerDetail(this.singer.id)
    },
    computed: {
      ...mapGetters([
        'singer'
      ]),
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      }
    },
    methods: {
      _getSingerDetail(singerId) {
        getSingerDetail().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.list)
            this.songs = this._normalSongList(res.data.list)
          }
        }).catch((error) => {
          console.log('catch' + error)
        })
      },
      _normalSongList(list) {
        let ret = []
        list.forEach((item, index) => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
