<template>
  <div class="archive-container">
    <div class="archive w-full">
      <arc-timeline :archiveTimeline="archiveTimeline"></arc-timeline>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import arcTimeline from '~/components/common/archive/arcTimeline.vue'
export default {
  components: { arcTimeline },
  async fetch({ store, params }) {
    await store.dispatch('article/getArchive')
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('article', ['archiveTimeline', 'archive']),
  },
  mounted() {
    // console.log(this.archiveTimeline,this.archive);
  },
  methods: {
    getRandom() {
      return Math.round(Math.random() * 9)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/animation.scss';
.archive-container {
  transform: translateY(60px);
  min-height: 86vh;
}

.archive {
  padding: 10px;
  animation: moveUp 0.6s ease-in-out 0s 1 normal none running;
}
</style>