<template>
  <div class="main-body w-full flex justify-center items-start box-border">
    <!-- 版心左侧部分 -->
    <div class="left-Article w-full sm:w-2/3 md:w-7/12 rounded-md bg-white bg-opacity-50">
      <a-spin :spinning="loading" size="large" class="relative">
        <div class="article-container py-4">
          <article-header :total="total" @reload="reloadPic"></article-header>
          <article-item
            ref="arcItem"
            v-for="(item, index) in articleList"
            :article="item"
            :key="index"
            :hasSearch="search"
          ></article-item>
          <div class="pagination flex justify-center items-center">
            <a-pagination
              :default-current="page"
              :current="page"
              :total="total"
              @change="changePage"
            />
          </div>
        </div>
      </a-spin>
    </div>

    <!-- 版心右侧部分 -->
    <div
      class="right-bar hidden sm:w-1/4 sm:block md:w-1/6 rounded-md drop-shadow bg-white bg-opacity-50"
    >
      <author-bar :author="author" :tags="tags"></author-bar>
    </div>
  </div>
</template>

<script>
import ArticleHeader from "~/components/common/articles/articleHeader.vue";
import articleItem from "~/components/common/articles/articleItem.vue";
import AuthorBar from "~/components/common/other/author-bar.vue";
import { mapState } from "vuex";
export default {
  components: { articleItem, AuthorBar, ArticleHeader },

  name: "IndexPage",
  async fetch({ store, params }) {
    await store.dispatch("article/getArticlesList", {
      page: 0,
    });
    await store.dispatch("classify/getTag");
    await store.dispatch("classify/getCategories");
    await store.dispatch("about/getAuthor", {
      id: 1,
    });
  },
  data() {
    return {
      page: 1,
      search: -1,
    };
  },
  computed: {
    ...mapState("article", ["articleList", "total", "loading", "keyword"]),
    ...mapState("classify", ["tags"]),
    ...mapState("about", ["author"]),
  },
  mounted() {},
  methods: {
    async changePage(val) {
      this.page = val;
      console.log(this.page);
      await this.$store.dispatch("article/getArticlesList", {
        page: this.page,
        search: this.keyword,
      });
    },
    reloadPic() {
      this.search = Math.random() * 10000;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/animation.scss";
.main-body {
  margin-top: 60px;
}
.left-Article {
  min-height: 900px;
  margin-right: 10px;
  border: 1px solid rgb(242, 235, 235);
}

.right-bar {
  border: 1px solid rgb(242, 235, 235);
  min-width: 200px;
  animation: runRight 0.6s ease-in-out 0s 1 normal none running;
}

.pagination {
  padding: 15px 0;
}
</style>
