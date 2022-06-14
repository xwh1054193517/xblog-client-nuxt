<template>
  <div class="message-box">
    <div class="message-wrapper">
      <virtual-list :listData="listData" :estimatedItemSize="50"> </virtual-list>
    </div>
  </div>
</template>

<script>
import VirtualList from "~/components/common/comment/virtualList.vue";
let d = [];
for (let i = 0; i < 1000; i++) {
  d.push({ id: i, value: i });
}
export default {
  components: { VirtualList },
  data() {
    return {
      listData: d,
    };
  },
};
</script>

<style lang="scss" scoped>
.message-box {
  transform: translateY(60px);
  min-height: 86vh;
}
.message-wrapper {
  width: 95%;
  height: 500px;
  margin:0 auto;
  background-color: red;
  @media (min-width: 640px) {
    width: 85%;
  }
}
</style>
