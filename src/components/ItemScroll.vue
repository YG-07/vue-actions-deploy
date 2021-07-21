<template>
  <div class="ItemScroll">
    <div class="item-scroll">
      <el-button type="primary" class="is-circle" @click="toScroll(true)"><em class="el-icon-arrow-left"></em></el-button>
      <el-button type="primary" class="is-circle" @click="toScroll(false)"><em class="el-icon-arrow-right"></em></el-button>
    </div>
    <div class="item-table">
      <el-table height="20rem"
                :data="tableData"
                border>
        <el-table-column
                         prop="date"
                         label="日期"
                         width="150">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="120">
        </el-table-column>
        <el-table-column
            prop="province"
            label="省份"
            width="120">
        </el-table-column>
        <el-table-column
            prop="city"
            label="市区"
            width="120">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址"
            width="300">
        </el-table-column>
        <el-table-column
                         prop="zip"
                         label="邮编"
                         width="120">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ItemScroll",
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
          }
        ]
      }
    },
    mounted() {

    },
    methods: {
      toScroll(bool) {
        let tmp = this.$el.querySelector('.el-table__body-wrapper')
        if(bool) {
          tmp.scrollLeft -= 100
        } else {
          tmp.scrollLeft += 100
        }
      }
    }
  }
</script>

<style lang="less">
  .ItemScroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    .item-scroll {
      width: 60%;
      margin: 1rem;
      display: flex;
      justify-content: space-evenly;
      
    }
    .item-table {
      width: 60%;
    }
    
  }
</style>