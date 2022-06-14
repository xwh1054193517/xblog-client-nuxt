<template>
  <div class="tag-articleContainer">
    <classify
      :id="id"
      type="tag"
      :name="name"
      :cover="cover"
      @loadMore="onLoadMore"
    ></classify>
  </div>
</template>

<script>
import classify from "~/components/layout/classify/classify.vue";
export default {
  components: { classify },
  async fetch({ store, params }) {
    await store.dispatch("classify/getArticles", {
      tagId: params.id,
      page: 0,
    });
  },
  data() {
    return {
      page:0,
      id: null,
      name: "",
      cover: "https://xblog-pic-1305549463.cos.ap-guangzhou.myqcloud.com/tagPic.jpg",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.name = this.$route.query.name;
    console.log(this.id, this.name);
  },
  methods: {
    onLoadMore() {
      this.page++;
      const params = {
        page: this.page,
        tagId: this.id,
      };
      this.$store.dispatch("classify/getMoreArticles", params);
    },
  },
};
</script>

<style lang="scss" scoped>
.tag-articleContainer {
  margin-top: 52px;
  min-height: 86vh;
}
</style>
