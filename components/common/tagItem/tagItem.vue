<template>
  <li class="tagItem  flex items-center rounded text-white " 
  :style="{backgroundColor:`${color[id%color.length]}` }">{{name}}</li>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    id: { type: Number, default: null },
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
}
</script>

<style lang="scss" scoped>
.tagItem {
  user-select: none;
  font-size: 11px;
  margin: 0px 5px 3px 2px;
  padding: 0 10px;
}
</style>