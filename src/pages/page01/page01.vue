<template>
  <div class="page01">
    <nav-bar :url="navUrl" :activeIndex="activeIndex" />
    <el-page-header @back="$router.push('/mainIndex')" content="页面一"></el-page-header>
    <h3>这是页面一！</h3>
    <div>
      输入底数m：<el-input type="number" style="width: 300px" v-model="mVal"></el-input>
    </div>
    <div>
      输入底数n：<el-input type="number" style="width: 300px" v-model="nVal"></el-input>
    </div>
    <button @click="powewrmn">计算</button>
    <br/>
    <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <el-button slot="reference">hover 激活</el-button>
    </el-popover>
  
    <el-popover
        placement="bottom"
        width="600"
        trigger="click">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table>
      <el-button slot="reference">click 激活</el-button>
    </el-popover>
    
    <br/><br/>
    <!-- type默认info  info/success/warning/error -->
    <el-button @click="$message({message: '成功，这是一条消息！', type: 'success'})">成功</el-button>
    <el-button @click="$message({message: '警告，这是一条消息！', type: 'warning'})">警告</el-button>
    <el-button @click="$message('这是一条消息！')">消息</el-button>
    <!--<el-button @click="$message.error('错误，这是一条消息！')">错误</el-button>-->
    <el-button @click="$message({message: '错误，这是一条消息！', type: 'error'})">错误</el-button>
  
    <br/><br/>
    <el-button @click="open">点击打开 Message Box</el-button>
    
    
    <div style="display: flex; flex-direction: column">
      <el-input type="text" style="width: 300px" placeholder="name值" v-model="sess.name"></el-input>
      <el-input type="text" style="width: 300px" placeholder="value值" v-model="sess.value" ></el-input>
    </div>
    <el-button type="primary" @click="setSession" >存储session</el-button>
    <el-button type="success" @click="getSession" >获取session</el-button>
    <el-button type="danger" @click="delSession" >删除session</el-button>
    
  </div>
</template>

<script>
  import NavBar from "../../components/navBar";
  import {navUrl} from '../../json/url'

  export default {
    name: "page01",
    components: {NavBar},
    data() {
      return {
        mVal: 1,
        nVal: 1,
        activeIndex: '1',
        secretNum: 1260,
        navUrl,
        sess: {
          name: '',
          value: ''
        },
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      powewrmn() {
        let a = new Array(10000000).fill(0)
        console.log(this.mVal, this.nVal);
        let m=this.mVal,n=this.nVal;
        let i,j,t,l;
        a[0]=l=1;
        for (i=0;i<n;i++) {
          t=0;
          for(j=0;j<=l;j++){
            a[j]=a[j]*m+t;
            t=Math.floor(a[j]/10);
            a[j]%=10;
            if(j===l&&(a[j]!==0||t!==0))l++
          }
        }
        console.log(a.slice(0,l));
        let out=''
        for (i=l-1;i>=0;i--){
          out += `${a[i]}`
        }
        console.log(`${m}的${n}次方结果为${out}`);
      },
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        })
      },
      
      setSession() {
        if(this.sess.name && this.sess.value){
          window.sessionStorage.setItem(this.sess.name, this.sess.value)
          let msg = "存储成功！{'"+this.sess.name+"'，'"+this.sess.value+"'}"
          this.$message({message: msg, type: 'success'})
        } else {
          let msg = "存储失败！输入为空！{'"+this.sess.name+"'，'"+this.sess.value+"'}"
          this.$message({message: msg, type: 'error'})
        }
      },
      getSession() {
        let res = ''
        if(this.sess.name){
          res = sessionStorage.getItem(this.sess.name)
          if(res) {
            this.$message({message: "获取成功！{"+res+"}", type: 'success'})
          } else {
            this.$message({message: "获取失败！无"+this.sess.name+"session", type: 'warning'})
          }
        } else {
          this.$message({message: "获取失败！输入为空！", type: 'error'})
        }
      },
      delSession() {
        if(this.sess.name){
          if (sessionStorage.getItem(this.sess.name)){
            sessionStorage.removeItem(this.sess.name)
            this.$message({message: "删除成功！"+this.sess.name, type: 'success'})
          } else {
            this.$message({message: "获取失败！无"+this.sess.name+"的session", type: 'warning'})
          }
        } else {
          this.$message({message: "获取失败！输入为空！", type: 'error'})
        }
      }
    }
  }
</script>

<style scoped>

</style>
