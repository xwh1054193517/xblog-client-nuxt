<template>
  <div class="category-articleContainer">
    <classify
      :id="id"
      type="category"
      :name="name"
      :cover="cover"
      :description="description"
      @loadMore="onLoadMore"
    ></classify>
  </div>
</template>

<script>
import classify from "~/components/layout/classify/classify.vue";
export default {
  components: { classify },
  async fetch({ store, params }) {
    await store.dispatch("classify/getCategory", params.id);
    await store.dispatch("classify/getArticles", {
      categoryId: params.id,
      page: 0,
    });
  },
  data() {
    return {
      id: null,
      name: "",
      cover: "",
      description: "",
      page: 0,
    };
  },
  created() {
    this.id = this.$route.params.id;
    const category = this.$store.state.classify.category;
    this.name = category.name;
    this.cover = category.cover;
    this.description = category.description;
   
  },
  methods: {
    onLoadMore() {
      this.page++;
      const params = {
        page: this.page,
        categoryId:this.id,
      };
      this.$store.dispatch("classify/getMoreArticles", params);
    },
  },
};
</script>
<style lang="scss" scoped>
.category-articleContainer {
  margin-top: 52px;
  min-height: 86vh;
}
</style>
