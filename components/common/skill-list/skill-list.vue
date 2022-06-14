<template>
  <div class="skill-list">
    <div class="skill-item" v-for="item in skill" :key="item.name">
      <div class="name">{{ item.name }}</div>
      <a-progress
        :stroke-color="{
          from: '#108ee9',
          to: '#87d068',
        }"
        :percent="item.num"
        status="active"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.skill-list {
  display: grid;
  grid-template-columns: 1fr;
  gap:1rem;
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
