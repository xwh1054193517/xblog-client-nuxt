<template>
  <!-- 瀑布图 容器 -->
  <div id="water-fall-content"></div>
</template>

<script>
import { resolve } from 'path';

export default {
  name: "Waterfall",
  props: {
      imgList: {
          type: Array,
          default: () => [],
      },
      //列数
      column: {
          type: Number,
          default: 4,
      },

      //图片 间隔
      imgMargin: {
          type: Number,
          default: 0.5,
      },
  },
  data() {
      return {
          minHeight: [],
          arr: [],
      };
  },
  mounted() {
    this.createImg()
  },
  methods: {
      createImg() {
          const ul = document.getElementById("water-fall-content");
          //计算图片的真实宽度 比例 为 column*2边距为边距总宽，
          // 100-边距总宽为内容总宽 再除以column列数 得到每列内容总宽
          let trueWidth = Math.floor(
              (100 - this.column * this.imgMargin * 2) / this.column
          );
          const fr=document.createDocumentFragment()
          //动态插入li并设置宽度 边距 浮动为left
          for (let i = 0; i < this.column; i++) {
              let li = document.createElement("li");
              li.style.listStyle = "none";
              li.style.float = "left";
              li.style.width = `${trueWidth}%`;
              li.style.margin = `0 ${this.imgMargin}%`;
              fr.appendChild(li);
              //将每个li存到arr中
              this.arr.push(li);
              
              this.minHeight.push(0);
          }
          //创建Image对象加载图片
          //此时minheight=[0,0,0,0,0]
          let img = new Image();
          img.num = 0;
          img.src = this.imgList[img.num];
          img.style.width = "100%";
          // 当图片加载完后
          img.onload = this.loadHandler;
          ul.appendChild(fr)
      },
      imgClick(img) {
          this.$emit("imgClick", img.srcElement.src);
      },
      loadHandler(that) {
          const img = that.path[0];
          const minHeight = this.minHeight;
          const arr = this.arr;
          // 高度数组的最小值
          const min = Math.min.apply(null, minHeight);
          // 拿到高度数组的最小值的 索引
          const minIndex = minHeight.indexOf(min);
          // 克隆一份图片
         const im = img.cloneNode(true);
          im.onclick = this.imgClick;
          // // 将图片加入到对应最小值索引的容器中
          arr[minIndex].appendChild(im);
          // 更新最小值索引的容器的高度
          minHeight[minIndex] += im.height;
          img.num++;
          img.src = this.imgList[img.num]

  },
  }
}
</script>

<style lang="scss" scoped>
#water-fall-content {
  margin: 0;
  padding: 0;
}
</style>