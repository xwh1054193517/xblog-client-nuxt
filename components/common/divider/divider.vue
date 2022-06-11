<template>
  <div class="divider-wrapper flex items-center">
    <slot name="icon"></slot>
    <span v-if="desc" class="desc">{{desc}}</span>
    <div class="split"></div>
  </div>
</template>

<script>
  
export default {
  props:{
    desc:{
      type:String,
      default:''
    }
  }
}
</script>

<style lang='scss' scoped>
.desc{
  font-size: 13px;
  font-weight: bold;
  padding:0 8px 0 4px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.split{
  flex: 1;
  height: 1px;
  background-color: rgb(30, 30, 30);
}
</style>