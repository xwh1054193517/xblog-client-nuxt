<template>
  <client-only>
    <div class="timeline ">
      <a-timeline mode="alternate"
                  pending="正在创造更多......">
        <a-timeline-item v-for="item in archiveTimeline"
                         :key="item.id"
                         :color="color[getRandom()]">
     <nuxt-link :to="{ name: 'article-id', params: { id: item.id } }">                    
          <div class="timeItem">
            <div class="content">
              <h4 :style="{color:color[getRandom()]}">{{item.title}}</h4>
              <p :style="{color:color[(getRandom()+1)%color.length]}">{{item.description}}</p>
              <img src=""
                   alt="">
            </div>
            <div class="time"
                 :style="{color:color[(getRandom()+2)%color.length]}">{{item.created_date}}</div>
          </div>
     </nuxt-link>
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
.timeItem {
  display: block;
  position: relative;
  transition: all 0.4s ease;
  &:hover{
    transform: translateY(10%);
  }
}
.time {
  border-bottom: 1px dashed;
}

</style>