<template>
  <div class="scrollToTop z-50"
       @click="scrollTop"
       :class="isScroll?'isScroll':'notScroll'">
    <img class="hidden sm:inline backtoTop"
         src="https://xblog-pic-1305549463.cos.ap-guangzhou.myqcloud.com/others/backTop.png"
         title="BackTop"
         alt="返回顶部">
    <div class="mobile sm:hidden "><svg class="w-6 h-6"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
      </svg></div>
  </div>
</template>

<script>
export default {
  computed: {
    isScroll() {
      return this.$store.state.setting.isScroll
    },
  },
  methods: {
    scrollTop() {
      let timer = null
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function f() {
        let top = document.body.scrollTop || document.documentElement.scrollTop
        if (top > 0) {
          document.body.scrollTop = document.documentElement.scrollTop =
            top - 150
          timer = requestAnimationFrame(f)
        } else {
          cancelAnimationFrame(timer)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/animation.scss';
.notScroll {
  position: fixed;
  right: 30px;
  top: 85%;
  z-index: 9999;
  cursor: pointer;
  transition: all 0.6s ease-in-out 0s;
  transform: none;

  @media (min-width: 640px) {
    right: 1%;
    top: 0px;
    transform: translateY(-120%);
  }
}
.backtoTop {
  width: 79px;
  height: 547px;
  animation: 1.5s ease 0s infinite normal none running upAndDown;
}

.isScroll {
  position: fixed;
  right: 30px;
  top: 85%;
  z-index: 9999;
  cursor: pointer;
  transition: all 0.6s ease-in-out 0s;
  transform: none;

  @media (min-width: 640px) {
    right: 1%;
    top: 0px;
    transform: translateY(-20%);
  }
}
.mobile{
  text-align: center;
  vertical-align: middle;
  border: 1px solid rgb(242, 141, 210);
  padding: 2px;
  border-radius: 50%;
  color: palevioletred;

}
</style>