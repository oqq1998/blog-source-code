<template>
  <header :class="{login:isLogin,'no-login':!isLogin}">
    <template v-if="!isLogin">
      <h1><router-link to="/">前端共享博客</router-link></h1>
      <p>web-design sharing blogs</p>
      <div class="btns">
        <router-link to="/login"><el-button>登录</el-button></router-link>
        <router-link to="/register"><el-button>注册</el-button></router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1><router-link to="/">前端共享博客</router-link></h1>
      <router-link to="/create">
        <i class="el-icon-circle-plus-outline">
          <div class="alt">新建博客</div>
        </i>
      </router-link>
      <div class="user">
        <router-link to="/my">
          <img class="avatar" :src="user.avatar" :alt="user.username">
        </router-link>
        <ul>
          <li><router-link to="/my">我的主页</router-link></li>
          <li><a href="#" @click="onLogout">退出登录</a></li>
        </ul>
      </div>    
    </template>
  </header>
</template>

<script>
import auth from '@/api/auth'
window.auth=auth
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return{}
  },
  created(){
    this.checkLogin()
  },
  computed:{
    ...mapGetters([
      'isLogin',
      'user'
    ])
  },
  methods:{
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    onLogout(){
    this.logout()
    }
  },
}
</script>

<style scoped>

header.no-login{
  padding-top: 60px;
  padding-bottom: 50px;
  background: rgb(0,170,239);
  text-align: center;
}
header.login{
  padding-top: 30px;
  padding-bottom: 30px;
  background: rgb(0,170,239);
  display: flex;
  align-items: center;
}
i{
  color: white;
  padding-top:6px;
  font-size:34px;
  position: relative;
}
.alt{
  display: none;
  position: absolute;
  margin-top: 12px;
  margin-left: -12px;
  padding: 5px 5px;
  border-radius: 1px;
  background-color: #fff;
  white-space: nowrap;
  color:rgb(0,170,239);
  font-size: 12px;
}
i:hover .alt{
  display: block;
}
h1{
  color:white;
  flex:1;
}
h1>a{
  text-decoration: none;
  color: white;
}
p{
  color:white;
  padding-top: 40px;
  padding-bottom: 20px;
  text-transform: capitalize;
  font-size: 1.2em;
}
button{
  margin:0px 8px 0;
  box-shadow:1px 1px 2px rgb(154, 154, 154);
  font-family: "Microsoft YaHei";
}
.avatar{
  width: 50px;
  height: 50px;
  margin-left: 14px;
  margin-top: 5px;
  border-radius: 3px;
  align-items: center;
}
.user{
  position: relative;
}
ul {
  display: none;
  position: absolute;
  margin-left: 5px;
  margin-top: 2px;
  list-style: none; 
  background-color: #fff;
}
li{
  border: 1px solid #eaeaea;
  white-space:nowrap;
}
li>a {
  text-decoration: none;
  color: #333;
  font-size: 12px;
  display: block;
  padding: 10px 10px;
}
.user:hover ul{
  display: block;
}
li> a:hover{
  color:rgb(0,170,239);
}
</style>
