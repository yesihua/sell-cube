<template>
  <div>
    <el-link icon="el-icon-arrow-left" @click="back" class="back">返回</el-link>
    <el-table ref="table"
              :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="current_change"
      v-bind:total="total">
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getSingerList} from 'api/singer'

  export default {
    name: 'list',
    data() {
      return {
        tableData: [],
        total: 0,
        pagesize: 7,
        currentPage: 1
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      getAllSinger(data) {
        let singerA = []
        for (let i in data) {
          singerA.push({date: data[i].Fsinger_name, name: data[i].Fother_name, address: data[i].Fsinger_mid})
        }
        return singerA
      },
      current_change(currentPage) {
        this.currentPage = currentPage
      }
    },
    created() {
      getSingerList().then((res) => {
        this.tableData = this.getAllSinger(res.data.list)
        this.total = this.tableData.length
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .back
    float: right
    margin: 10px
</style>
