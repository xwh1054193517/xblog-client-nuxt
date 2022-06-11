<template>
  <div class="article-list w-full">
    <nuxt-link :to="{name:'article-id',params:{id:article.id}}">
      <div class="articleItem select-none cursor-pointer  overflow-hidden opacity-0 relative hover:shadow-lg bg-gray-100 rounded-lg">

        <div class="star">精选</div>
        <!-- 分类 -->
        <span class="category text-gray-900 block mb-1">{{article.category.name}}</span>

        <!-- 标题 -->
        <h2 class="title m-0 text-purple-800 font-bold">{{article.title}}</h2>

        <!-- 其他类型信息 -->
        <div class="article-info flex flex-wrap items-center">
          <div class="time flex items-center mr-3">
            <span role="img"></span>
            2021/12/16 10:10:16
          </div>
          <tag-item v-for="item in article.tags"
                    :key="item.id"
                    :name="item.name"
                    :id="item.id"></tag-item>

        </div>

        <!-- 图片区域 -->
        <div class="img-box cursor-pointer rounded-md flex justify-center items-center ">
          <img class="artPic w-full align-middle"
               :data-src="article.cover"
               alt="">
        </div>
        <!-- 描述 -->
        <div class="description mb-2">{{article.description}}</div>
        <div class="others flex justify-between items-center">
          <div class="author-wrapper flex justify-center items-center">
            <i class="avatar inline-block rounded-full bg-cover bg-no-repeat shadow-md"
               :style="{backgroundImage: `url(${article.authors[0].avatar})`}"></i>
            <span class="author-name ml-3 whitespace-nowrap">{{article.authors[0].name}}</span>
          </div>
          <div class="view flex items-center">
            <span role="img"
                  class="watch"><svg t="1654927254929"
                   class="icon"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="2221"
                   width="1em"
                   height="1em"
                   fill="currentColor"
                   aria-hidden="true">
                <path d="M966.656 484.352c-6.144-8.192-52.224-71.68-129.024-136.192C731.136 258.048 618.496 209.92 512 209.92S292.864 258.048 186.368 348.16C106.496 415.744 59.392 482.304 57.344 484.352c-11.264 14.336-13.312 38.912 0 55.296 6.144 8.192 52.224 71.68 129.024 136.192C292.864 765.952 405.504 814.08 512 814.08S731.136 765.952 837.632 675.84c79.872-67.584 126.976-134.144 129.024-136.192 11.264-14.336 13.312-38.912 0-55.296z m-32.768 30.72C931.84 518.144 747.52 773.12 512 773.12S92.16 518.144 90.112 515.072c0-1.024-1.024-1.024-1.024-1.024-1.024-1.024 0-4.096 1.024-6.144C92.16 505.856 276.48 250.88 512 250.88s419.84 254.976 421.888 258.048c0 1.024 1.024 1.024 1.024 1.024 0 1.024 0 4.096-1.024 5.12zM512 332.8c-101.376 0-184.32 80.896-184.32 179.2s82.944 179.2 184.32 179.2S696.32 610.304 696.32 512s-82.944-179.2-184.32-179.2z m0 317.44c-78.848 0-143.36-62.464-143.36-138.24s64.512-138.24 143.36-138.24S655.36 436.224 655.36 512s-64.512 138.24-143.36 138.24zM563.2 512c0 28.672-22.528 51.2-51.2 51.2s-51.2-22.528-51.2-51.2 22.528-51.2 51.2-51.2 51.2 22.528 51.2 51.2z"
                      p-id="2222"></path>
              </svg>{{article.views}}</span>
            <span role="img"
                  class="like"><svg t="1654927336455"
                   class="icon"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="3288"
                   width="1em"
                   height="1em"
                   fill="currentColor"
                   aria-hidden="true">
                <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4-20.5-21.5-48.1-33.4-77.9-33.4-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-0.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81z m636.4-353l-21.9 19 13.9 25.4c4.6 8.4 6.9 17.6 6.9 27.3 0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4c4.6 8.4 6.9 17.6 6.9 27.3 0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4c4.6 8.4 6.9 17.6 6.9 27.3 0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5c5.2-18.9 22.5-32.2 42.2-32.3 7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"
                      p-id="3289"></path>
              </svg>{{article.like}}</span>
            <span role="img"
                  class="com"><svg viewBox="64 64 896 896"
                   focusable="false"
                   data-icon="message"
                   width="1em"
                   height="1em"
                   fill="currentColor"
                   aria-hidden="true">
                <path d="M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path>
              </svg>{{article.comment_count}}</span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>

</template>

<script>
// import lazyload from '~/service/utils/lazyLoad'
import tagItem from '../tagItem/tagItem.vue'
export default {
  components: { tagItem },
  props: {
    article: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  methods: {
    initImg(){
       import('~/service/utils/lazyLoad').then(res => {
        res.default('.artPic')
      })
    }
  },
  mounted() {
    this.initImg()
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/animation.scss';
.articleItem {
  font-size: 13px;
  padding: 10px 6px;
  animation: 0.3s ease-out 0s 1 normal forwards running mobilerunCss;
  transition: all 0.5s ease;
  margin-bottom: 10px;
  @media (min-width: 640px) {
    animation: 0.7s ease-out 0s 1 normal forwards running runCss;
  }
}
.article-info {
  padding: 10px 0;
  overflow: hidden;
}
.artPic {
  transition: all 0.5s ease 0s;
  margin-bottom: 5px;
  &:hover {
    transform: scale(1.15);
  }
}
.description {
  text-indent: 2em;
  font-variant: no-common-ligatures proportional-nums;
}
.img-box {
  overflow: hidden;
  max-height: 260px;
}
.com,
.watch,
.like {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 12px;

  svg {
    margin-right: 2px;
  }
}
.avatar {
  height: 36px;
  width: 36px;
  margin-right: 3px;
  margin-top: 2px;
}
.star {
  width: 140px;
  height: 25px;
  top: 8px;
  right: -50px;
  display: inline;
  text-align: center;
  font-size: 14px;
  line-height: 25px;
  transform: rotate(45deg);
  position: absolute;
  color: white;
  background-color: rgb(249, 65, 24);
}

.title {
  font-size: 20px;
}
</style>