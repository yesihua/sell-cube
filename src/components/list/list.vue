<template>
  <div class="listp">
    <el-link icon="el-icon-arrow-left" @click="back" class="back">返回</el-link>
    <list-view :data="singers" @select="selectItem"></list-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getSingerList } from 'api/singer'
  import Singer from 'common/js/singer'
  import ListView from 'components/base/listview/list-view'
  import { mapMutations } from 'vuex'

  const HOT_SINGER_LEN = 10
  const HOT_NAME = '热门'

  export default {
    name: 'list',
    data() {
      return {
        singers: []
      }
    },
    components: {
      ListView
    },
    created() {
      getSingerList().then((res) => {
        this.singers = this.tableData(res.data.list)
      })
    },
    methods: {
      ...mapMutations([
        'setSinger'
      ]),
      back() {
        this.$router.go(-1)
      },
      selectItem(item) {
        this.$router.push({path: `/list/${item.id}`})
        this.setSinger(item)
        //  this.$store.commit('setSinger', item)
      },
      tableData(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        for (let i in list) {
          if (i < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              id: list[i].Fsinger_mid,
              name: list[i].Fsinger_name
            }))
          }
          const key = list[i].Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            id: list[i].Fsinger_mid,
            name: list[i].Fsinger_name
          }))
        }
        let ret = []
        let hot = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .listp
    position: absolute
    top: 0
    bottom: 0
    width: 100%

  .back
    float: right
    margin: 10px
</style>
