<template>
  <div class="article-header w-full flex justify-between items-center">
    <div class="InfoTitle">
      <span
        >Total Blog:<span class="text-yellow-700">{{ total }}</span></span
      >
    </div>
    <div class="search">
      <a-input-search
        placeholder="搜索文章"
        style="width: 160px"
        v-model="keyword"
        @search="onSearch"
      />
    </div>
  </div>
</template>

<script>
import utils from "~/service/utils/util";
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    onSearch: utils.debounce(async function () {
      if (!this.keyword) {
        await this.$store.dispatch("article/getArticlesList", { page: 0 });
      } else {
        await this.$store.dispatch("article/searchArticles", { search: this.keyword });
        console.log(this.$store.state.article.articleList);
      }
      this.$emit("reload");
    }, 1000),
  },
};
</script>

<style lang="scss" scoped>
.article-header {
  padding: 4px 10px 5px;
}
.InfoTitle {
  font-weight: 700;
}
</style>
