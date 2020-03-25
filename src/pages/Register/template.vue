<template>
  <div id="register">
    <h4>新建用户名</h4>
    <input v-model="username" placeholder="新建用户名">
    <h4>用户密码</h4>
    <input v-model="password" type="password" placeholder="用户密码" @keyup.enter="onRegister" >
    <el-button @click="onRegister">立即注册</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
