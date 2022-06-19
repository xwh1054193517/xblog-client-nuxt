<template>
  <div class="calssify-container">
    <div
      class="classify-header p-1 flex justify-center items-center box-border overflow-hidden relative"
      :style="{ backgroundImage: `url(${cover})` }"
    >
      <div class="header-wrapper relative w-full max-w-6xl box-border my-0 mx-auto">
        <div class="content">
          <div
            class="mainShow flex justify-center flex-wrap w-full my-1 flex-col items-center"
          >
            <h1 class="title">{{ name }}</h1>
            <div v-if="description" class="description">{{ description }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="articleArea">
      <div class="articleListWrapper">
        <article-item class=" my-2"
          v-for="item in articles"
          :article="item"
          :key="item.id"
        ></article-item>
      </div>
      <div class="loadmore" v-if="LoadMore" @click="$emit('loadMore')"></div>
      <loading v-if="loading"></loading>
      <div class="noMore" v-if="!loading&&articles.length>=total">~再往下已经没有辣~</div>
    </div>
  </div>
</template>

<script>
import articleItem from "~/components/common/articles/articleItem.vue";
import { mapState } from "vuex";
import Loading from '../loading/loading.vue';
export default {
  components: { articleItem, Loading },
  props: {
    type: {
      type: String,
      default: "tag",
    },

    name: {
      type: String,
      default: "",
    },
    cover: {
      type: String,
      default: "https://xblog-pic-1305549463.cos.ap-guangzhou.myqcloud.com/tagPic.jpg",
    },
    description: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState("classify", ["articles"]),
    ...mapState("classify", ["loading"]),
    ...mapState("classify", ["total"]),
    LoadMore() {
      if (this.articles.length && !this.loading) {
        return this.total > this.articles.length
      } else {
        return false
      }
    }
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/animation.scss";
.classify-header {
  width: 96%;
  height: 45vh;
  margin: 0 auto;
  border-radius: 6px;
  color: #fff;
  background: no-repeat center center;
  background-size: cover;
  animation: moveDown 0.6s ease-in-out 0s 1 normal forwards running;

  @media (min-width: 1280px) {
    width: 80%;
  }
  @media (min-width: 640px) {
    width: calc(100% - 100px);
    height: 60vh;
  }

  &:before {
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.4;
    background-color: #394245;
    background-image: linear-gradient(234deg, #394245 0%, #000 100%);
  }
  .header-wrapper {
    z-index: 1;
    max-width: 1200px;
  }
  .content {
    margin-top: 0;
    padding: 10px 10px;
    @media (min-width: 640px) {
      margin-top: -5vh;
      padding: 50px 70px;
    }
  }
  .title {
    font-size: 28px;
    text-align: center;
    margin: 0.7em 0;
    line-height: 1;
    color: white;
    font-weight: bold;
    @media (min-width: 640px) {
      font-size: 44px;
    }
  }
  .description {
    font-size: 16px;
    text-align: center;
    margin: 0.8em 0.1em;
    line-height: 1;
    color: white;
    font-weight: bold;
    @media (min-width: 640px) {
      font-size: 20px;
    }
  }
}
.articleArea {
  width: 100%;
  max-width: 1200px;
  z-index: 1;
  margin: 0 auto;
  position: relative;
  border-radius: 5px 5px 0 0;
  background-color: transparent;
  padding: 0 15px;
  animation: moveUp 0.6s ease-in-out 0s 1 normal forwards running;
  @media (min-width: 640px) {
    margin-top: -13vh;
    padding: 0 10px;
  }
}

.articleListWrapper {
  padding: 1px 10px 5px;
  border-radius: 5px 5px 0 0;
  background-color: transparent;

  @media (min-width: 640px) {
    padding: 30px 30px 5px;
    
  }
  @media (min-width: 1157px) {
    padding: 40px 100px 10px;
  }
}
.loadmore {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 8px solid #dcdfe7;
  border-radius: 50%;
  transition: all .25s ease-in-out;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 30px;
    height: 30px;
    border-width: 5px;
  }

  &:hover {
    border-color: orange;
    background-color: orange;
    transform: scale(.65);
  }
}
.noMore{
  text-align: center;
}
</style>
