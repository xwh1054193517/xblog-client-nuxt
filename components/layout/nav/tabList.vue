<template>
  <div class="tab w-full">
    <div class="tablist hidden sm:flex justify-around items-center flex-wrap text-base w-full">
      <div v-for="item in navList"
           :key="item.name"
           class="tab-item box-border ">
        <div class="tab-item relative">
          <nuxt-link :to="item.link">
            <span class="tab-dot"></span>
            <span class="tab-item-name text-sm">{{item.name}}</span>
          </nuxt-link>
        </div>
      </div>
      <div class="mobile-nav-btn"
           :class="{'is-active': isShowMobileNav}"
           @click="isShowMobileNav = !isShowMobileNav">
        <span class="mobile-nav-inner"></span>
      </div>
      <transition name="mobile-slide">
        <div class="nav-list-wrapper"
             v-if="isShowMobileNav">
          <div class="close-btn"
               @click="isShowMobileNav = false">
            <i class="icon icon-close"></i>
          </div>
          <ul class="nav-list">
            <li class="nav-list-item"
                v-for="(item, index) in navList"
                :key="index">
              <nuxt-link class="nav-link"
                         tag="a"
                         :to="item.link"
                         @click.native="isShowMobileNav = false">
                {{item.name}}
                <span class="nav-dot"></span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </transition>

    </div>
    <div class=" sm:hidden">
      <template>
        <a-dropdown v-model="visible">
          <div class="mobiletab">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>
          <a-menu slot="overlay"
                  @click="onClick">
            <template v-for="item in navList">
              <nuxt-link :to="item.link" :key="item.name">
                <a-menu-item class="item " :key="item.name">
                  {{item.name}}
                </a-menu-item>
              </nuxt-link>
            </template>
          </a-menu>
        </a-dropdown>
      </template>
    </div>
  </div>
</template>

<script>
const navList = [
  { link: '/', name: '首页' },
  { link: '/site', name: '分类' },
  { link: '/archive', name: '归档' },
  { link: '/messageBd', name: '留言' },
  { link: '/about', name: '关于' },
]
export default {

  data() {
    return {
      visible:false,
      navList,
      isShowMobileNav: false,
    }
  },
  methods: {
    onClick(e) {
      this.visible=false
    },
  },
}
</script>

<style lang="scss" scoped>
.item{
  padding: 6px 3rem;
  font-size: 16px;
  color: rgb(0, 0, 0);
  background-color: #fff;
  &:hover{
    background-color: rgb(212, 213, 213);
    color: rgb(139, 186, 210);
  }
}
.tab-dot {
  position: absolute;
  top: -4px;
  right: -10px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  transition: all 0.25s 0.1s ease;

  &:hover {
    background-color: rgb(250, 9, 137);
  }
}
.tab-item-name {
  transition: all 0.25s 0.1s ease;
  &:hover {
    color: rgb(250, 9, 137);
  }
}
.nuxt-link-exact-active {
  .tab-dot {
    background-color: rgb(250, 9, 137);
  }
  .tab-item-name {
    color: rgb(250, 9, 137);
  }

  &:hover .tab-dot {
    background-color: rgb(26, 143, 40);
  }

  &:hover .tab-item-name {
    color: rgb(26, 143, 40);
  }
}

.mobiletab{
  width: 30%;
}
</style>