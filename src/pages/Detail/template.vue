<template>
  <div class="detail">
    <section class="user-info">
      <router-link :to="`/user/${user.id}`" class="avatar">
        <img :src="user.avatar" :alt="user.username" :title="user.username">
      </router-link>
      <h3>{{title}}</h3>
      <p><router-link :to="`/user/${user.id}`">{{user.username}}</router-link>发表于 {{friendlyDate(createdAt)}}</p>
    </section>
    <hr>
    <section id="article" v-html="markdown">
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
