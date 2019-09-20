<template>
  <div class="myhearder">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <a href="#" target="_blank">首页</a>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">发现</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      
      <el-menu-item index="3">
      
      <div class="right" style="width:60px;">
          <router-link to="/information" style="color: #6ed56c;font-size: 16px;line-height: 50px;">好友圈</router-link>
        </div>  <!-- <a href="#" target="_blank" id="fri"><router-link to="/management">个人信息</router-link></a> -->
      </el-menu-item>
      <el-menu-item index="4">
        <a href="#" target="_blank">推荐</a>
      </el-menu-item>

      <div class="logo">
         <a href="#" target="_blank"><img src="http://www.app-echo.com/v/dist-prod/images/2c35330d407d3f6edb9d09a4ce563da9.png" alt /></a>
      </div>

 
      <div class="right">
        <div class="serch">
          <el-input placeholder="搜索内容" v-model="input" :disabled="false" class="inp"></el-input>
        </div>
       <el-row> <el-button type="success" round>上传作品</el-button></el-row>

        <div class="right" style="width:60px;">
          <router-link to="/login" style="color:rgb(49, 196, 49);font-size: 16px;line-height: 50px;">登录</router-link>
        </div>
        <!-- <div class="ava"></div>
        <img src alt /> -->



        
          
       
       

      </div>
    </el-menu>

    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      input: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}



.myhearder {
  position: relative;
  min-width: 1000px;
  padding: 10px 20px;
  background-color: #fff;
}
.myhearder a {
  text-decoration: none;
  font-size: 15px;
}

#fri {
  color: #909399;
}

.serch {
  width: 200px;
  line-height: 20px;
}

.right {
   
  width: 400px;
  display: flex;
  height: 60px;
  float: right;
  align-items: center;
  justify-content: space-around;
}

.inp > input {
  outline: none;
  border-radius: 20px;
}

.upload {
  width: 100px;
  height: 40px;
  background-color: rgb(49, 196, 49);
  border-radius: 20px;
  color: white;
  text-align: center;
  line-height: 40px;
}



.logo{
  width: 80px;
  height: 40px;
  display: inline-block;
  position:absolute;
  top:0;
 left:0;
 bottom:0;
 right:0;
 margin:auto;
}
.logo img{
  width: 100%;
  
}

.log{
color:rgb(12, 197, 12);
}
</style>

