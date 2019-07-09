<template>
  <div class="container">
    <router-link to="/oldIndex" tag="button" class="el-button el-button--primary">功能一</router-link>
    <router-link to="/list" tag="button" class="el-button el-button--primary">功能二</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-menu',
    data() {
      return {}
    },
    created() {
      console.log(this.$store.state.singer)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    padding: 20px
    display: flex
    justify-content: space-around
</style>
