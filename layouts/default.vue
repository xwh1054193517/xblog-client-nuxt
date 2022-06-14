<template>
  <div class="app">
    <scroll-to-top></scroll-to-top>
    <blog-header></blog-header>
    <nuxt />
    <blog-footer></blog-footer>
    <a-drawer :placement="'left'" :closable="false" :visible="leftMenu" @close="onClose">
      <author-bar :author="author" :tags="tags"></author-bar>
    </a-drawer>
  </div>
</template>

<script>
import BlogFooter from "~/components/layout/blog-footer/blog-footer.vue";
import blogHeader from "~/components/layout/blog-header/blog-header.vue";
import ScrollToTop from "~/components/layout/scrollToTop/scrollToTop.vue";
import AuthorBar from "~/components/common/other/author-bar.vue";
import { mapState } from "vuex";
import utils from "~/service/utils/util";
export default {
  components: { blogHeader, BlogFooter, ScrollToTop, AuthorBar },
  computed: {
    ...mapState("setting", ["leftMenu"]),
    ...mapState("classify", ["tags"]),
    ...mapState("about", ["author"]),
  },
  methods: {
    onClose() {
      this.$store.dispatch("setting/getLeftMenu", false);
    },
  },
  mounted() {
    const handler = () => {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 200) {
        this.$store.dispatch("setting/getScroll", true);
      } else {
        this.$store.dispatch("setting/getScroll", false);
      }
    };
    window.addEventListener("scroll", utils.debounce(handler, 10));
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%) !important;
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
}
</style>
