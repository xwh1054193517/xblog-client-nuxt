<template>
  <div class="header flex justify-center items-center fixed top-0 left-0 right-0 z-50 bg-blue-200"
       :class="{hid:isScroll}">
    <div class="header-container flex justify-around sm:justify-between box-border">

      <!-- 左侧移动侧边控制按钮 -->
      <div class="left-menu  flex sm:hidden items-center" @click="toggleleftMenu">
        <span role="img"
              class=" cursor-pointer inline-block text-center align-middle"><svg t="1654598114661"
               class="icon"
               viewBox="64 64 896 896"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="2211"
               width="1em"
               height="1em"
               focusable="false"
               aria-hidden="true"
               fill="currentColor">
            <path d="M64 480h352V128H64v352z m64-288h224v224H128V192zM64 928h352V576H64v352z m64-288h224v224H128v-224zM526.848 224H928a32 32 0 1 0 0-64H526.848a32 32 0 0 0 0 64zM928 608H526.848a32 32 0 1 0 0 64H928a32 32 0 1 0 0-64zM928 384H526.848a32 32 0 0 0 0 64H928a32 32 0 1 0 0-64zM928 832H526.848a32 32 0 1 0 0 64H928a32 32 0 1 0 0-64z"
                  p-id="2212"></path>
          </svg></span>
      </div>
      <!-- 博客标题logo -->
      <div class="blog-title flex justify-center items-center  flex-nowrap">
        <a href="http://106.13.211.96/admin" target="_blank" >
        <div class="blog-tit font-bold text-purple-600 text-lg"
             title="后台管理入口" >
          XuWenHao
          <span role="img"
                aria-label="logo">🍀</span>
        </div>
        </a>
        <div class="sentence text-xs mt-2 ml-2 text-yellow-900 hidden md:block">不曾扬帆，何以至远方</div>
      </div>

      <!-- 右侧tab栏 -->
      <div class="right-part flex items-center h-full w-auto sm:w-2/4">
        <tab-list></tab-list>
      </div>
    </div>
  </div>
</template>

<script>
import tabList from "~/components/layout/nav/tabList.vue"
export default {
  components: { tabList },
  computed:{
    isScroll(){
      return this.$store.state.setting.isScroll
    },
  },
  methods:{
    toggleleftMenu(){
      this.$store.dispatch('setting/getLeftMenu',true)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  user-select: none;
  transition: all 0.4s ease 0s;
}
.header-container {
  width: 100%;
  height: 100%;

  @media (min-width: 640px) {
    width: 73%;
  }
}
.hid {
  top: -50px;
}
</style>