<template>
  <div class="create">
    <h2>新建博客</h2>
    <h3>标题</h3>
    <el-input v-model="title"  placeholder="最大长度50字符"></el-input>
    <p>{{title.length}} / {{titleMaxLength}}</p>
    <h3>简介</h3>
    <el-input v-model="description" type="textarea" placeholder="最大长度300字符" :autosize="{minRows:2,maxRows:4}"></el-input>
    <p>{{description.length}} / {{descriptionMaxLength}}</p>
    <h3>内容</h3>
    <el-input v-model="content" type="textarea" placeholder="博客内容" :autosize="{minRows:20,maxRows:40}"></el-input>
    <el-button @click="onCreate">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
