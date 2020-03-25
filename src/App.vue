<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>

import Header from'@/components/header'
import Footer from'@/components/footer'
export default {
  name: 'App',
  components:{
    Header:Header,
    Footer:Footer
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body,#app{
  height: 100%; 
  /* 让内容区main能撑开整个页面 */
}
body{
  background-color:rgb(244,244,245);
}
#app {
  display:grid;
  grid-template-columns: 16% auto 16%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header header header"
  ". main ."
  "footer footer footer";
}
#app::-webkit-scrollbar {
  display: none;
}
#header{
  grid-area: header;
  padding-left:16%;
  padding-right:16%;
}
#main{
  grid-area: main;
  text-align: center;
}
#footer{
  grid-area: footer;
  padding-left: 16%;
  padding-right: 16%;
}
@media(max-width: 700px){
  #app{
    grid-template-columns: 20px auto 20px;
  }
  #header{
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media(min-width: 800px){
  #app{
  overflow-y: scroll;
  }
}
</style>
