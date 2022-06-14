<template>
  <div class="site">
    <div class="category-container mb-5 overflow-hidden">
      <divider :desc="'分类Category'">
        <svg
          slot="icon"
          t="1654968728353"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3673"
          width="1.2rem"
          height="1.2rem"
        >
          <path
            d="M88.275862 61.793103A26.482759 26.482759 0 0 0 61.793103 88.275862v317.793104A26.482759 26.482759 0 0 0 88.275862 432.551724h317.793104a26.482759 26.482759 0 0 0 26.482758-26.482758V88.275862A26.482759 26.482759 0 0 0 406.068966 61.793103H88.275862z m0-52.965517h317.793104A79.448276 79.448276 0 0 1 485.517241 88.275862v317.793104a79.448276 79.448276 0 0 1-79.448275 79.448275H88.275862A79.448276 79.448276 0 0 1 8.827586 406.068966V88.275862A79.448276 79.448276 0 0 1 88.275862 8.827586zM88.275862 591.448276A26.482759 26.482759 0 0 0 61.793103 617.931034v317.793104A26.482759 26.482759 0 0 0 88.275862 962.206897h317.793104a26.482759 26.482759 0 0 0 26.482758-26.482759V617.931034a26.482759 26.482759 0 0 0-26.482758-26.482758H88.275862z m0-52.965517h317.793104a79.448276 79.448276 0 0 1 79.448275 79.448275v317.793104a79.448276 79.448276 0 0 1-79.448275 79.448276H88.275862A79.448276 79.448276 0 0 1 8.827586 935.724138V617.931034A79.448276 79.448276 0 0 1 88.275862 538.482759zM617.931034 61.793103A26.482759 26.482759 0 0 0 591.448276 88.275862v317.793104a26.482759 26.482759 0 0 0 26.482758 26.482758h317.793104a26.482759 26.482759 0 0 0 26.482759-26.482758V88.275862A26.482759 26.482759 0 0 0 935.724138 61.793103H617.931034z m0-52.965517h317.793104A79.448276 79.448276 0 0 1 1015.172414 88.275862v317.793104a79.448276 79.448276 0 0 1-79.448276 79.448275H617.931034a79.448276 79.448276 0 0 1-79.448275-79.448275V88.275862A79.448276 79.448276 0 0 1 617.931034 8.827586z"
            fill="currentColor"
            p-id="3674"
          ></path>
          <path
            d="M776.827586 1015.172414c-131.636966 0-238.344828-106.707862-238.344827-238.344828S645.190621 538.482759 776.827586 538.482759 1015.172414 645.190621 1015.172414 776.827586 908.464552 1015.172414 776.827586 1015.172414z m0-52.965517c102.382345 0 185.37931-82.996966 185.379311-185.379311S879.209931 591.448276 776.827586 591.448276 591.448276 674.445241 591.448276 776.827586 674.445241 962.206897 776.827586 962.206897z"
            fill="currentColor"
            p-id="3675"
          ></path>
        </svg>
      </divider>
      <ul class="category-list flex justify-start flex-wrap my-1">
        <li
          class="category-item overflow-hidden relative cursor-pointer rounded-2xl m-3"
          v-for="item in categories"
          :key="item.id"
        >
          <nuxt-link
            :to="{ name: 'category-id', params: { id: item.id } }"
          >
            <div class="category-wrapper relative w-full h-full box-border">
              <div
                class="categoryImg"
                :style="{ backgroundImage: `url(${item.cover})` }"
              ></div>
              <h2 class="title" :class="{ center: !item.description }">
                {{ item.name }}
              </h2>
              <p v-if="item.description" class="desc">{{ item.description }}</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="tag-container mb-5 overflow-hidden">
      <divider :desc="'标签Tags'">
        <svg
          slot="icon"
          t="1654969120761"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4488"
          width="1.2rem"
          height="1.2rem"
        >
          <path
            d="M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-0.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2c-3.9 3.9-3.9 10.2 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7z"
            p-id="4489"
            fill="currentColor"
          ></path>
          <path
            d="M680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z m0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
            p-id="4490"
            fill="currentColor"
          ></path>
        </svg>
      </divider>
      <div class="tag-wrapper my-3">
        <ul class="tag-list flex justify-start flex-wrap w-full mx-1">
          <div class="tag-box" v-for="item in tags" :key="item.id">
            <nuxt-link :to="{ name: 'tag-id', params: { id: item.id },query:{name:item.name} }">
              <li class="tag-item block">
                <span>{{ item.name }}</span>
              </li>
            </nuxt-link>
          </div>
        </ul>
      </div>
    </div>

    <div class="more overflow-hidden">
      <divider :desc="'更多精选More'">
        <svg
          slot="icon"
          t="1655018226729"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3459"
          width="1.2rem"
          height="1.2rem"
        >
          <path
            d="M991.744 763.904l-102.4-50.176c-4.608-2.048-9.728-2.048-14.336 0l-338.944 166.4c-14.848 7.168-32.768 7.168-47.616 0l-338.944-166.4c-4.608-2.048-9.728-2.048-14.336 0l-102.4 50.176c-12.8 6.144-12.8 24.576 0 30.72l455.68 223.744c14.848 7.168 32.768 7.168 47.616 0l455.68-223.744c12.8-6.144 12.8-24.064 0-30.72z"
            p-id="3460"
            fill="currentColor"
          ></path>
          <path
            d="M991.744 499.712l-102.4-50.176c-4.608-2.048-9.728-2.048-14.336 0l-338.944 166.4c-14.848 7.168-32.768 7.168-47.616 0L148.992 449.536c-4.608-2.048-9.728-2.048-14.336 0l-102.4 50.176c-12.8 6.144-12.8 24.576 0 30.72l455.68 223.744c14.848 7.168 32.768 7.168 47.616 0l455.68-223.744c13.312-6.144 13.312-24.576 0.512-30.72z"
            p-id="3461"
            fill="currentColor"
          ></path>
          <path
            d="M488.448 483.328l-455.68-223.744c-12.8-6.144-12.8-24.576 0-30.72L488.448 5.12c14.848-7.168 32.768-7.168 47.616 0l455.68 223.744c12.8 6.144 12.8 24.576 0 30.72l-455.68 223.744c-15.36 7.168-32.768 7.168-47.616 0z"
            p-id="3462"
            fill="currentColor"
          ></path>
        </svg>
      </divider>
      <div class="more-wrapper">
        <star-article :recommand="starArticles"></star-article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import StarArticle from "~/components/common/articles/starArticle.vue";
import divider from "~/components/common/divider/divider.vue";
export default {
  async fetch({ store, params }) {
    await store.dispatch("classify/getCategories");
    await store.dispatch("classify/getTag");
    await store.dispatch("article/getStarArticles");
  },
  components: { divider, StarArticle },
  data() {
    return {};
  },
  computed: {
    ...mapState("classify", ["categories"]),
    ...mapState("classify", ["tags"]),
    ...mapState("article", ["starArticles"]),
  },
  mounted() {
  },
};
</script>

<style lang="scss" socped>
@import "~/assets/scss/animation.scss";
.site {
  transform: translateY(60px);
  padding: 10px 50px;
  min-height: 86vh;
  overflow: hidden;
  @media (min-width: 640px) {
    padding: 20px 100px;
  }
}
.category-list {
  animation: runLeft 0.7s ease 0s 1 normal forwards;
}
.category-item {
  flex: 1 auto;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
}
.category-wrapper {
  color: #fff;
  .categoryImg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      content: "";
      opacity: 0.35;
      background-color: #394245;
      background-image: linear-gradient(234deg, #394245 0%, #000 100%);
    }
  }
  .title {
    color: white;
    padding: 15px 30px;
    font-weight: bold;
    font-size: 30px;
  }
  .center {
    text-align: center;
  }
  .desc {
    box-sizing: border-box;
    max-width: 450px;
    padding: 0 30px 3vh 30px;
    font-size: 16px;
  }
}
.tag-list {
  animation: runRight 0.7s ease 0s 1 normal forwards;
}
.tag-item {
  display: flex;
  align-items: center;
  padding: 5px 15px;
  margin: 5px;
  border-radius: 20px;
  font-weight: bold;
  color: rgb(167, 53, 228);
  background-color: rgb(253, 229, 204);
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    color: rgb(253, 229, 204);
    background-color: rgb(167, 53, 228);
  }
  span {
    display: block;
  }
  &:last-child {
    margin-right: 0;
  }
}
.more {
  margin-bottom: 4px;
}
.more-wrapper {
  padding: 5px 10px;
}
</style>
