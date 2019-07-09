<template>
  <form action="">
    <div>
      <label>用户名</label><input type="text"/>
      <label>密码</label><input type="password"/>
      <button type="submit" @click.prevent="handleLogin">登录</button>
    </div>
  </form>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'login',
    data() {
      return {}
    },
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query
        },
        immediate: true
      }

    },
    methods: {
      handleLogin() {
        localStorage['islogin'] = 'true'
        this.$router.push({ path: this.redirect.redirect || '/home' })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
