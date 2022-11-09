<template>
  <div class='carousel'>
    <ul class="carousel-body">
      <li class="carousel-item" v-for="(item,  i) in swiperArr" :key="i" :class="{  fade:  index  ===  i  }">
          <img :src="item.cover" alt="">
      </li>
    </ul>
    <a href="javascript:;" class="carousel-btn prev" @click="toggle(-1)">
      <svg t="1667995753195" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9127" width="200" height="200"><path d="M369.728 512l384.768-384.704a48.64 48.64 0 0 0 0.896-68.8 48.64 48.64 0 0 0-68.736 0.96L269.44 476.736a48.704 48.704 0 0 0-11.136 17.344c-1.024 2.304-1.024 4.736-1.472 7.04-0.896 3.648-2.048 7.168-2.048 10.88 0 3.712 1.152 7.232 1.984 10.88 0.512 2.368 0.512 4.8 1.472 7.04a48.704 48.704 0 0 0 11.136 17.344l417.216 417.28a48.576 48.576 0 0 0 68.736 0.96 48.576 48.576 0 0 0-0.896-68.736L369.728 512z" p-id="9128"></path></svg>
    </a>
    <a href="javascript:;" class="carousel-btn next" @click="toggle(1)">
      <svg t="1667995768378" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10051" width="200" height="200"><path d="M779.180132 473.232045 322.354755 16.406668c-21.413706-21.413706-56.121182-21.413706-77.534887 0-21.413706 21.413706-21.413706 56.122205 0 77.534887l418.057421 418.057421L244.819868 930.057421c-21.413706 21.413706-21.413706 56.122205 0 77.534887 10.706853 10.706853 24.759917 16.059767 38.767955 16.059767s28.061103-5.353938 38.767955-16.059767L779.180132 550.767955C800.593837 529.35425 800.593837 494.64575 779.180132 473.232045z" p-id="10052"></path></svg>
    </a>
    <div class="carousel-indicator">
      <span v-for="(item,  i) in sliders" :key="i" :class="{  active:  index  ===  i  }"></span>
    </div>
  </div>
</template>

<script>
export default{
  name:'carousel',
  props:{
    sliders:{
      type:Array,
      default:()=>[]
    },
    duration:{
      type:Number,
      default:3000
    },
    autoPlay:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      index:0,
      timer:null,
      swiperArr:[]
    }
  },
  created(){
    this.swiperArr=this.sliders.slice().map(item=>{
      return {
        title:item.title,
        cover:item.cover
      }
    })
    // console.log(this.swiperArr);
  },
  methods:{
    autoPlayFn(){
      clearInterval(this.timer)
      this.timer=setInterval(() => {
        this.index++
        if(this.index>=this.sliders.length){
          this.index=0
        }
      }, this.duration);
    },
    stop(){
      if (timer) clearInterval(timer)
    },
    start(){
      if (this.sliders.length && this.autoPlay) {
        this.autoPlayFn()
      }
    },
    toggle(step){
      this.index+=step
          // 确定右侧临界值
          if (this.index >= this.sliders.length) {
            this.index = 0
        return
      }
      // 确定左侧临界值
      if (this.index < 0) {
        this.index =this.sliders.length - 1
      }
    }
  },
  watch:{
    sliders:{
      handler(newval){
      if(newval.length>1&&this.autoPlay){
        this.index=0
        this.autoPlayFn()
      }
    },
    immediate:true
    },
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang="scss">
.carousel{
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  border: 1px solid #ccc;
  text-decoration: none;
  .carousel{
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      list-style: none;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0,0,0,0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background:  #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0,0,0,.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      font-family: serif;
      text-decoration: none;
      transition: all 0.5s;
      &.prev{
        left: 20px;
      }
      &.next{
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}

</style>