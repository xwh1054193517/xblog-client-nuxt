<template>
  <div class="slide-img-box" id="slide-box">
    <!-- 只有一张图片 -->
    <div class="slide-img" v-if="list.length  ===  1">
      <a href="javascript:;">
        <img :src="list[0].src"/>
      </a>
    </div>

    <!-- 左右滑动的方式 -->
    <div class="slide-img-type slide-img-left" v-if="type  ===  'slide'  &&  direction  ===  'left'  &&  list.length  >  1">
      <ul :style="{'width':ulWidth,'transform':'translate3d(-'+(listWidth*(nowIdx+1))+'%,0,0)','transition-timing-function':slideChange}" :class="{'tran':notLast}" 
      @touchstart="touchStart" @touchend="touchEnd">
        <!-- 最后一张图片 -->
        <li :style="{'width':listWidth+'%'}">
          <a href="javascript:;">
        <img class="slide-img" :src="list[list.length-1].src" />
      </a>
        </li>
        <!-- 遍历的图片 -->
        <li v-for="(item,idx) in list" :key="idx" :style="{'width':listWidth+'%'}" >
          <a href="javascript:;">
            <img class="slide-img" :src="item.src" />
      </a>
        </li>
        <!-- 第一张图片 -->
        <li :style="{'width':listWidth+'%'}">
          <a href="javascript:;">
        <img class="slide-img"  :src="list[0].src"/>
      </a>
        </li>
      </ul>
    </div>

      <!--透明度滑动方式-->
      <div class="slide-img-type slide-img-transparent" v-if="type==='transparent'&&list.length>1">
          <ul >
              <li v-for="(item,index) in list" :key="index" :class="{'cur':index===nowIdx,'show':index===nowIdxShow}" @touchstart="touchStart" @touchend="touchEnd" >
                  <a :href="'javascript:;'" >
                      <img :src="item.src" class="slide-img"/>
                  </a>
              </li>
          </ul>
      </div>

    <!-- 小点 -->
    <div class="slide-option" v-if="option&&list.length>1" :class="{'isLast':nowIdx===list.length, 'isFirst':nowIdx===-1,'ec-slide-option-top':direction==='top'}">
          <div>
              <span class="active span1" v-if="nowIdx===list.length"></span>
              <span v-for="(item,index) in list" :key="index" :class="{'active':index===nowIdx}"></span>
              <span class="active span2" v-if="nowIdx===-1"></span>
          </div>
      </div>
  </div>
</template>
<script > 
  export default{
    props:['list','autoplay','type','time','direction','option'],
    data(){
      return {
        nowIdx:0,
        nowIdxShow:0,
        notLast:true,
        timer:null,
        slideChange:'',
        startX:0,
        startY:0,
        isClicking:false
      }
    },
    computed:{
      ulWidth(){
        return (this.list.length+2)+"00%"
      },
      listWidth(){
        return 100/(this.list.length+2)
      }
    },
    mounted(){
      if(this.autoplay){
        this.autoSwitch()
      }
    },
    methods:{
        //开始滑动
          touchStart(e){
            console.log(e);
          //e.preventDefault();
          this.startX=e.changedTouches[0].clientX;
          this.startY=e.changedTouches[0].clientY;
          },
          //滑动结束
          touchEnd(e){
              //e.preventDefault();
              if(this.direction==='left'){
                  if(e.changedTouches[0].clientX-this.startX>50){
                      this.switchDo('reduce')
                  }
                  else if(e.changedTouches[0].clientX-this.startX<-50){
                      this.switchDo()
                  }
              }
            },
      switchDo(reduce){
        clearInterval(this.timer)
        //往回滑
        if(reduce==='reduce'){
          if(this.nowIdx===0){
            if(this.type==='slide'){
              this.nowIdx--
              setTimeout(() => {
                this.nowIdx=this.list.length-1
                this.notLast=false
              }, 400);
            }else{
              this.nowIdx=this.list.length-1
            }
          }else{
            this.nowIdx--
          }
        }else{
          this.nowIdx++
        }

        if(this.nowIdx===this.list.length){
          if(this.type==='slide'){
            setTimeout(() => {
              this.nowIdx=0
              this.notLast=false
            }, 400);
          }else{
            this.nowIdx=0
          }
        }

        //透明切换
        setTimeout(()=>{
                  this.nowIdxShow=this.nowIdx;
              },1)
          if(this.autoplay){
            this.autoSwitch()
          }
          if(this.type==='slide'){
            this.notLast=true
          }
        },
      autoSwitch(){
        let time=this.time||4000;
        this.timer=setInterval(() => {
          this.switchDo()
        }, time);
      }
    }
  }
 

</script>

<style lang="scss" scoped>
 .slide-img-box{
  width: 100%;
  height: 100%;
  position: relative;
  touch-action: none;
 }
 .slide-img{
  width:100%;
  height:100%;
 }
 .title{
  display: block;
  text-align: center;
  position: absolute;
  font-size: 14px;
  z-index:10;
 }
 .slide-img-type{
  position: relative;
  overflow: hidden;
  width:100%;
  height:100%;
    &.slide-img-left{
      li{
        display: inline-block;
        font-size: 0;
      }
    }
    &.slide-img-transparent {
          li {
              opacity: 0;
              transition: opacity 1s;
              width: 0;
              &.cur {
                  width: auto;
                  height:300px!important
              }
              &.show{
                  opacity: 1;
              }
          }
      }
    ul{
      font-size: 0;
      &.tran{
        transition:all .4s;
      
      }
      li{
        text-align: center;
      }
      img{
        vertical-align: middle;
      }
    }
 }
 .slide-option{
  position: absolute;
  font-size: 0;
  bottom: 10px;
  text-align:center;
  width:100%;
  z-index:5;
  &:isFirst{
    span:first-child{
      display: none;
    }
  }&.isLast {
          span:last-child {
              display: none;
          }
      }
      span {
          border-radius: 100%;
          margin: 0 5px;
          background: #fff;
          display: inline-block;
          width: 10px;
          height: 10px;
          &.active {
              background: #09f;
          }
      }
 }
</style>