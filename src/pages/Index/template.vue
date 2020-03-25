<template>
  <div class="index">
    <section class="blog-posts">
      <div class="item" v-for="blog in blogs">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
        <router-link :to="`/detail/${blog.id}`"><h3>{{blog.title}}<span>{{friendlyDate(blog.createdAt)}}</span></h3></router-link>
        <router-link :to="`/detail/${blog.id}`"><p>{{blog.description}}</p></router-link>
      </div>
    </section>
    <section class="pages">
      <el-pagination 
        small
        background
        layout="prev,pager,next"
        :total="total" 
        @current-change="onPageChange"
      >
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
