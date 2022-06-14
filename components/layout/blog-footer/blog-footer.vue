<template>
  <div class="footer my-5 flex justify-center items-center flex-col text-sm">
    <div class="intro">博客技术栈为Nuxt+Koa+Ant+tailWind</div>
    <div class="tech py-1 text-white">
      <span class="left   bg-blue-500 rounded-md text-center align-middle">COS对象存储</span>
      <span class="right  bg-red-400 rounded-md text-center align-middle">百度智能云轻量Server</span>
    </div>
    <div class="info flex my-2">
      <div class="name">XuWenhao's Blog</div>
      <div class="face-word">φ(゜▽゜*)♪</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/animation.scss";
.face-word{
  color: rgba(222, 51, 248, 0.938);
  animation: Fontdance 1s ease 0s infinite normal none;
  padding-bottom: 10px;
  
}

.left,.right{
  padding:2px 8px ;
}
</style>