<template>
  <div class="bar-item box-border">
    <div class="techInfo py-4 px-3 text-center">
      <div class="fixed-item flex flex-col items-center">
        <img class="avatar"
             :src="author.avatar"
             alt="">
        <div class="perName py-2 text-lg font-semibold text-yellow-600">EternalStar</div>
        <div class="major text-xs text-yellow-600 py-1">
          <div>SCUT-软件工程</div>
          <div>
            2019-2023
          </div>
        </div>
        <div class="perInfo flex flex-col items-center  text-purple-400">
          <div class="pos flex items-center">
            <span role="img"
                  aria-label="environment"
                  class=" block mr-1"><svg viewBox="64 64 896 896"
                   focusable="false"
                   data-icon="environment"
                   width="1em"
                   height="1em"
                   fill="currentColor"
                   aria-hidden="true">
                <path d="M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"></path>
              </svg></span>广东-广州
          </div>
          <div>Front：Nuxt + Ant Design Vue + tailWindCss</div>
          <div>Admin：Vue2 + Element UI</div>
          <div>Server：Node(Koa) + MySql + Jwt</div>
        </div>
        <div class="sen">Every moment is worthy</div>

        <div class="toSay ">
          <div class="title ">遇见的你</div>
          <div>
            你的ip是: <span>{{ip}}</span>
          </div>
          <div>你的地址:
            <span>{{add}}</span>
          </div>
          <div>
            当前时间:
            <span>{{dateTime}}</span>
          </div>

        </div>

        <div class="toSay w-full py-4 my-2">
          <div class="title">标签贴条</div>
          <div class="taglist flex flex-wrap justify-center">
            <tag-item v-for="item in tags"
                      :key="item.id" :name='item.name' :id="item.id"></tag-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tagItem from '../tagItem/tagItem.vue'
export default {
  components: { tagItem },
  props:{
    tags:{
      type:Array,
      default:()=>[]
    },
    author:{
      type:Object,
      default:()=>{}
    }
  },
  data() {
    return {
      dateTime: null,
      ip: null,
      add: null,
    }
  },

  methods: {
    check(val) {
      if (val < 10) {
        return '0' + val
      } else {
        return val
      }
    },
    displayTime() {
      //获取系统当前的年、月、日、小时、分钟、毫秒
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      let hour = date.getHours()
      let minutes = date.getMinutes()
      let second = date.getSeconds()
      this.dateTime =
        year +
        '年' +
        month +
        '月' +
        day +
        '日  ' +
        this.check(hour) +
        ':' +
        this.check(minutes) +
        ':' +
        this.check(second)
    },
    getIpandAdd() {
      this.ip = returnCitySN['cip']
      this.add = returnCitySN['cname']
    },
  },
 
  mounted() {
    this.getIpandAdd()
    setInterval(this.displayTime, 1000)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/animation.scss';
.avatar {
  width: 90px;
  height: 90px;
  margin: 5px;
  border-radius: 50%;
  animation: 2s ease 0s infinite normal none running changeShadow;
}

.perInfo {
  font-size: 13px;
  padding: 5px 0;
  .pos {
    line-height: 13px;
  }
}
.title {
  margin: 6px;
  font-size: 16px;
  color: rgb(42, 219, 236);
  border-radius: 5px;
  border-bottom: 1px solid rgb(212, 157, 157);
}
.sen {
  margin: 5px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 216, 80, 0.818);
}
.toSay {
  font-size: 14px;
}
</style>