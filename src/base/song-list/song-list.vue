<template>
  <div class="song-list">
    <ul>
      <li v-for="(song,index) in songs" :key="index">
        {{song.name}}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'song-list',
    props: {
      songs: {
        type: Array,
        default: null
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
