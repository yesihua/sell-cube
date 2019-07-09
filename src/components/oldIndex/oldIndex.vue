<template>
  <div>
    <v-header :seller="seller"></v-header>
    <tab></tab>
    <keep-alive>
      <router-view :seller="seller" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view :seller="seller" v-if="!$route.meta.keepAlive">
    </router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from 'components/header/v-header'
  import { getSeller } from '../../api'
  import qs from 'query-string'
  import Tab from 'components/tab/tab'
  export default {
    name: 'oldIndex',
    components: {
      Tab,
      VHeader
    },
    data() {
      return {
        seller: {
          id: qs.parse(location.search).id
        }
      }
    },
    created() {
      this._getSeller()
    },
    methods: {
      _getSeller() {
        getSeller({
          id: this.seller.id
        }).then((seller) => {
          this.seller = seller
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
