<template>
  <header id="top-bar">
    <div id="per-imag">
      <img src="./pictures/per.jpg" alt="头像"></img>
      <span id="name">Deft</span>
    </div>
    <div id="top-menu">
      <div class="line1">
        <a class="test1"href=""><span class="t-test1">个人介绍</span></a>
      </div>
      <div class="line1">
        <a class="test1" href=""><span class="t-test1">我的相册</span></a>
      </div>
      <div class="line1">
        <a class="test1" id="test3" target="_self"><span class="t-test1">联系方式</span></a>
      </div>
    </div>
  </header>
  <div id="main">
    <div class="title">
      <a href="../dist/video.html" class="titlt-img">
        <img src="./pictures/video.jpg" alt="视频" width="150px"></img>
      </a>
      <a href="../video.html"> 
        <h2 style="color: black; margin-left: 15px;"><span id="jk">小玫.mp4</span></h2>
      </a>
    </div>
    <div class="title">
      <p>asdasdasdasdasdasdasdasdasdasd<br>asdasdasdasdasjdgasyuidgtasyuidgtuiasdfastyuidfas</p>
    </div>
  </div>
</template>

<script setup>
  
</script>

<style >
  body{
    margin: 0;
    padding: 0;
    background-image: url("./pictures/backpaper.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  #top-bar{
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    margin-left: 10%;
    margin-right: 10%;
    background-color:rgba(232, 90, 147, 0.35);
    left: 0;
    width: 80%;
    display:flex;
    align-items:center
  }
  #main{
    margin: 0 0;
    display: flex;
    margin-top: 0;
    width: 80%;
    flex-direction: column;
  }
  #name{
    color: aqua;
    left: 10;
    top: 5px;
  }
  #per-imag img{
    max-width: 100px;
    max-height: 100px;
  }
  #top-menu{
    margin-left: 80%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 80%;
  }
  .line1{
    margin-top: 50px;
  }
  .test1{
    cursor: pointer;
    font-size: 18px;
    color: black;
    text-decoration: underline;
    text-decoration-color: rgb(124, 151, 151);
  }
  .test1:hover{
    color:greenyellow;
  }
  .t-test1{
    color: aqua;
  }
  .title{
    margin-top: 2px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
  }
  #jk:hover{
    text-decoration: underline;
  }
</style>    