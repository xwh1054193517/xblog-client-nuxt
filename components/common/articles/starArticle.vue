<template>
  <div class="recommand-wrapper overflow-hidden">
    <ul class="recommand-list flex items-center flex-col">
      <li
        class="w-full recommand-item flex justify-center items-center cursor-pointer"
        v-for="item in recommand"
        :key="item.id"
      >
        <nuxt-link class="w-full" :to="{ name: 'article-id', params: { id: item.id } }">
          <div class="box flex w-full text-yellow-700">
            <div class="time mr-3">
              {{ item.created_date }}
            </div>
            <div class="title">
              {{ item.title }}
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    recommand: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/animation.scss";
.recommand-wrapper {
  margin-bottom: 10px;
}
.recommand-item {
  font-size: 12px;
  margin-bottom: 4px;
  @media (min-width: 640px) {
    font-size: 18px;
  }
}
.recommand-list {
  animation: moveUp 0.7s ease-in 0s 1 normal forwards running;
}
.time {
  flex: 1;
  text-align: center;
}
.title {
  flex: 1;
}
.box {
  &:hover {
    color: rgb(114, 201, 248);
  }
}
</style>
