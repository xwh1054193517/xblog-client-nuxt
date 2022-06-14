<template>
  <div class="article-container">
    <!-- 文章头部 -->
    <a-spin :spinning="loading">
      <div
        class="article-header flex justify-center items-center box-border overflow-hidden relative"
        :style="{ backgroundImage: `url(${article.cover})` }"
      >
        <div class="header-wrapper relative w-full max-w-6xl box-border my-0 mx-auto">
          <div class="content">
            <div class="taglist flex justify-center flex-wrap w-full my-1">
              <tag-item
                class="showBig cursor-pointer"
                v-for="item in article.tags"
                :key="item.id"
                :name="item.name"
                :id="item.id"
              ></tag-item>
            </div>
            <h1 class="title">{{ article.title }}</h1>
            <div class="authorAndDate">
              by&nbsp;
              <span class="name">{{ article.authors[0].name }}</span>
              &nbsp;
              <time>{{ article.created_date }}</time>
            </div>
          </div>
        </div>
      </div>

      <div class="article-box w-full box-border">
        <!-- 文章内容 -->
        <div class="article-content">
          <h1 class="content-title title">{{ article.title }}</h1>
          <div class="content-wrapper">
            <article ref="md" class="markdown" v-html="mdContent"></article>
          </div>
        </div>

        <!-- 文章尾部 -->
        <div class="article-foot flex justify-between items-center">
          <div class="tag-wrapper flex justify-start items-center">
            <span
              ><svg
                t="1654933268769"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2788"
                width="1em"
                height="1em"
              >
                <path
                  d="M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-0.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2c-3.9 3.9-3.9 10.2 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7z"
                  p-id="2789"
                ></path>
                <path
                  d="M680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z m0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                  p-id="2790"
                ></path></svg
            ></span>
            <ul class="tags flex justify-start flex-wrap items-center">
              <span v-for="item in article.tags" class="tagItem" :key="item.id">{{
                item.name
              }}</span>
            </ul>
          </div>

          <div
            class="likeBtn flex justify-center items-center cursor-pointer flex-row"
            @click="likeArticle"
          >
            <span :class="{ isLiked: isLiked }"
              ><svg
                t="1654935705926"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3615"
                width="1em"
                height="1em"
              >
                <path
                  d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4-20.5-21.5-48.1-33.4-77.9-33.4-52 0-98 35-111.8 85.1l-85.9 311h-0.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-0.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"
                  p-id="3616"
                ></path></svg
            ></span>
            <span>{{ like }}</span>
          </div>
        </div>

        <!-- 相关推荐 -->
        <!-- <div class="recommend-list">

      </div> -->

        <!-- 评论区域 -->
        <div class="commentArea" ref="commentArea">
          <div class="content">
            <div class="comment-wrapper"></div>
          </div>
        </div>

        <aside class="like-aside fixed right-1 bottom-1/4 z-10 shadow-sm hidden sm:block">
          <div class="item" @click="likeArticle">
            <span class="count">{{ like }}</span>
            <span :class="{ isLiked: isLiked }"
              ><svg
                t="1654935705926"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3615"
                width="16"
                height="16"
              >
                <path
                  d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4-20.5-21.5-48.1-33.4-77.9-33.4-52 0-98 35-111.8 85.1l-85.9 311h-0.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-0.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"
                  p-id="3616"
                ></path></svg
            ></span>
          </div>
          <div class="item" @click="ToComment">
            <span class="count">4</span>
            <svg
              t="1654938104341"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4431"
              width="18"
              height="18"
            >
              <path
                d="M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334z m0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333z m-271.36 213.334v64h-176.64v-64h176.64z m122.026-128v64H362.667v-64h298.666z"
                p-id="4432"
              ></path>
            </svg>
          </div>
        </aside>
      </div>
    </a-spin>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TagItem from "~/components/common/tagItem/tagItem.vue";
import markdown from "~/plugins/marked";

export default {
  components: { TagItem },
  async fetch({ store, params }) {
    await store.dispatch("article/getArticleDetail", {
      id: params.id,
    });
  },
  data() {
    return {
      id: 0,
      likeArticles: [],
      like: 0,
    };
  },
  computed: {
    ...mapState("article", ["article", "comment", "loading",'total']),
    mdContent() {
      if (this.article.content) {
        return markdown(this.article.content);
      } else {
        return "";
      }
    },

    isLiked() {
      return this.likeArticles.includes(this.id);
    },
  },
  methods: {
    //点赞文章
    async likeArticle() {
      if (this.isLiked) return;
      try {
        const res = await this.$store.dispatch("article/likeArticle", this.id);

        if (res.errorCode == 0) {
          this.like++;
          this.likeArticles.push(this.id);
          window.localStorage.setItem("LIKE_ARTICLES", JSON.stringify(this.likeArticles));
        }
      } catch (error) {
        console.log(error);
      }
    },
    ToComment() {},

    //从localStorage里查找这篇文章是否已经点赞过
    getLikeArticles() {
      if (process.client) {
        this.likeArticles = JSON.parse(
          window.localStorage.getItem("LIKE_ARTICLES") || "[]"
        );
      }
    },

    //创建图片懒加载监听器
    InitImg() {
      import("~/service/utils/lazyLoad").then((res) => {
        res.default(".image-popper");
      });
    },
  },
  created() {
    this.id = this.article.id;
    this.getLikeArticles();
    this.like = this.article.like;
  },
  mounted() {
    this.InitImg()
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 1px solid rgb(252, 252, 252);
  background-color: #fff;

  &:not(:last-child) {
    border-bottom: none;
  }

  &:hover {
    svg {
      fill: currentColor;
      color: rgb(234, 165, 101);
    }
  }

  .count {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 5px;
    font-size: 12px;
    border-radius: 8px;
    transform: translate(-50%, -50%);
    background-color: rgba(218, 215, 215, 0.6);
  }
}
.isLiked {
  svg {
    fill: currentColor;
    color: rgb(234, 165, 101);
  }
}
.article-container {
  margin-top: 50px;
}
.article-header {
  width: 96%;
  height: 45vh;
  margin: 0 auto;
  border-radius: 6px;
  color: #fff;
  background: no-repeat center center;
  background-size: cover;

  @media (min-width: 1280px) {
    width: 80%;
  }
  @media (min-width: 640px) {
    width: calc(100% - 120px);
    height: 70vh;
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

    .showBig {
      display: inline-block;
      padding: 5px 12px;
      margin: 5px;
      font-weight: bold;
      letter-spacing: 1.2px;
      border-radius: 10px;
      font-size: 12px;
    }
  }
}
.title {
  font-size: 26px;
  text-align: center;
  margin: 0.7em 0;
  line-height: 1;
  color: white;
  font-weight: bold;
  @media (min-width: 640px) {
    font-size: 44px;
  }
}

.content-title {
  color: #000;
}
.authorAndDate {
  padding: 3px 0;
  font-size: 11px;
  text-align: center;
  @media (min-width: 640px) {
    font-size: 15px;
  }
  .name {
    font-size: 14px;
    font-weight: bold;
    @media (min-width: 640px) {
      font-size: 18px;
    }
  }
}

.article-box {
  width: 100%;
  max-width: 1200px;
  z-index: 1;
  margin: 0 auto;
  position: relative;
  border-radius: 5px 5px 0 0;
  background-color: transparent;
  padding: 0 15px;
  @media (min-width: 640px) {
    margin-top: -13vh;
    padding: 0 45px;
  }
}

.article-content {
  padding: 10px 0 5px;
  border-radius: 5px 5px 0 0;
  background-color: #fff;

  @media (min-width: 640px) {
    padding: 30px 50px 5px;
    box-shadow: #acacac 0 0 1px;
  }
  @media (min-width: 1157px) {
    padding: 40px 100px 5px;
  }
  @media (min-width: 1157px) {
    padding: 40px 100px 5px;
  }
}
.tag-wrapper {
  font-size: 1rem;

  span > svg {
    margin-right: 3px;
  }
}
.tags {
  margin-top: 10px;

  .tagItem {
    margin-right: 2px;
    &:not(:first-child)::before {
      content: ",";
    }
  }
}
.likeBtn {
  width: 30px;
  height: 30px;
  font-size: 18px;
  margin-top: 3px;
}
</style>
