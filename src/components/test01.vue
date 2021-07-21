<!--suppress ALL -->
<template>
  <div class="test01">
    <el-form v-model="query">
      <el-form-item label="选择打印数量：">
        <el-select v-model="query.select_num" filterable
                   placeholder="请选择数量（小于200）" value="" style="width: 50rem">
          <el-option v-for="item in options" :key="item.value"
                     :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="输入编码规则：">
        <el-input type="text" v-model="query.input_code"
                  maxlength="2" placeholder="输入编码规则（2位）" style="width: 50rem"></el-input>
      </el-form-item>
      
      <el-form-item label="打印结果：">
        <el-input type="textarea" v-model="result" resize="none"
                  placeholder="打印结果" style="width: 50rem;" onscroll="this.rows++;" rows="12"></el-input>
      </el-form-item>
      <el-form-item style="justify-content: center">
        <el-button type="primary" @click="req_info(query)" style="width: 9rem">打印</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: "test01",
    components: {},
    data() {
      return {
        result: '',
        options: [],
        query: {
          select_num: '',
          input_code: ''
        }
      }
    },
    created() {
      this.options = this.range_arr(0, 200, 10)
    },
    methods: {
      // 发送请求，获取数据
      req_info(req) {
        console.log(req)
        console.log(this.result)
      },
      // 生成数字范围 方法
      range_arr(start, end, step) {
        let arr = [];
        for (let i = start; i < end; i++) {
          if (i % step === 0) {
            arr.push({'value': i, 'label': i})
          }
        }
        return arr;
      }
    }
  }
</script>

<style lang="less">
  .test01 {
    width: 100%;
    .el-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      .el-form-item {
        margin: 1rem;
        display: flex;
        justify-content: center;
        .el-textarea__inner {
          font-family: "Microsoft YaHei";
        }
        label, .el-button {
          font-family: "Microsoft YaHei";
          font-weight: bold;
          /*字体 两端对齐*/
          flex: 5rem 0 0;
          text-align: justify;
          text-align-last: justify;
        }
      }
    }
  }
</style>
