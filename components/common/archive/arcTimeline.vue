<template>
  <client-only>
    <div class="timeline ">
      <a-timeline mode="alternate"
                  pending="正在创造更多......">
        <a-timeline-item v-for="item in archiveTimeline"
                         :key="item.id"
                         :color="color[getRandom()]">
          <div class="timeItem">
            <div class="content">
              <h4 :style="{color:color[getRandom()]}">{{item.title}}</h4>
              <p :style="{color:color[getRandom()]}">{{item.description}}</p>
              <img src=""
                   alt="">
            </div>
            <div class="time"
                 :style="{color:color[getRandom()]}">{{item.created_date}}</div>
          </div>
        </a-timeline-item>
      </a-timeline>
    </div>
  </client-only>
</template>

<script>
export default {
  props: {
    archiveTimeline: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      color: [
        'rgb(5, 112, 255)',
        'rgb(255, 87, 119)',
        'rgb(255, 193, 1)',
        'rgb(151, 44, 239)',
        'rgb(22, 238, 40)',
        'rgb(95, 61, 255)',
        'rgb(241, 234, 19)',
        'rgb(174, 131, 253)',
        'rgb(35, 99, 144)',
        'rgb(66, 69, 71)',
      ],
    }
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
.timeItem {
  display: block;
  position: relative;
}
.time {
  border-bottom: 1px dashed;
}

</style>