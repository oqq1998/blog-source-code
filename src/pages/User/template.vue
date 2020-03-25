<template>
  <div class="user">
    <section class="user-info">
      <figure class="avatar">
        <img :src="user.avatar" :alt="user.username">
      </figure>
      <h3>{{user.username}}</h3>
    </section>
    <hr>
    <section>
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <div class="date">
          <div class="day">{{splitDate(blog.createdAt).date}}</div>
          <div class="month">{{splitDate(blog.createdAt).month}}月</div>
          <div class="year">{{splitDate(blog.createdAt).year}}年</div>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
      </router-link>
    </section>
    <section class="pages">
      <el-pagination 
        background
        layout="prev,pager,next"
        :total="total" 
        :current-page="page"
        @current-change="onPageChange"
      >
      </el-pagination>
    </section>

  </div>
</template>

<script src="./template.js"></script>

<style src="../My/template.less" lang="less"></style>
