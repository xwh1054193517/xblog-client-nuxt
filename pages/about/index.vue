<template>
  <div class="about">
    <div class="about-wrapper shadow-md">
      <div
        class="author-part w-full author-part flex justify-center items-center flex-wrap"
      >
        <div class="author-box">
          <div class="author-avatar my-0 mx-auto">
            <img class="shadow rounded-full" :src="author.avatar" alt="" />
          </div>
          <div class="info">
            <div class="name text-2xl py-3 text-pink-600">EternalStar</div>
            <div class="pos py-2 text-md flex items-center">
              <span role="img" aria-label="environment" style="color: rgb(255, 205, 144)"
                ><svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="environment"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"
                  ></path></svg></span
              >广州 &nbsp;|&nbsp;SCUT
            </div>
            <div class="intro py-1 text-md border-b-2 border-dashed">
              {{ author.description }}
            </div>
          </div>
        </div>
        <div class="clock-b0x">
          <h2 class="text-center">Time won't wait for Anyone</h2>
          <div class="clock">
            <div class="outer-clock-face">
              <div class="marking marking-one"></div>
              <div class="marking marking-two"></div>
              <div class="marking marking-three"></div>
              <div class="marking marking-four"></div>
              <div class="inner-clock-face">
                <div class="hand hour-hand"></div>
                <div class="hand min-hand"></div>
                <div class="hand second-hand"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="g-img1"></section>

      <div class="skill-part my-2">
        <div class="title flex items-center">
          <svg
            t="1655209050095"
            class="icon"
            viewBox="0 0 1025 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1841"
            width="1em"
            height="1em"
          >
            <path
              d="M254.037315 745.648h267.208c11.52 19.344 24.616 37.304 39.44 53.536h-306.64v-53.536z m0-84.688h231.312a358.4 358.4 0 0 1-10.112-53.504h-221.2v53.504z m0-138.16H475.941315c2.304-18.288 5.712-36.256 10.72-53.496H254.021315v53.496h0.024z m431.304 358.72v46.8c0 22.384-16.76 40.6-37.336 40.6h-560.56c-20.608 0-37.304-18.216-37.304-40.6V250.08l185.76-167.68v178H138.101315v53.504h147.12V53.504h362.784c20.608 0 37.336 18.216 37.336 40.528v160.072c15.896-5.4 32.424-9.024 49.36-11.56v-148.48C734.725315 42.24 695.813315 0 648.037315 0H250.021315L0.821315 224.944v703.336c0 51.84 38.872 94.072 86.656 94.072h560.56c47.792 0 86.696-42.16 86.696-94.072v-35.28c-16.936-2.496-33.464-6.12-49.36-11.48h-0.032zM187.053315 469.336h-63.68v53.504h63.68v-53.504z m-63.648 329.84h63.68v-53.528h-63.68v53.536z m63.648-191.68h-63.68v53.496h63.68v-53.504z m717.744-120.336l-39.168-32.56-99.576 140.904-89.52-74.44-30.096 42.488 128.728 107.04 129.632-183.432zM1024.821315 567.824c0-149.056-111.76-270.256-249.176-270.256-137.344 0-249.08 121.24-249.08 270.256 0 149.024 111.76 270.264 249.08 270.264 137.376 0 249.144-121.2 249.144-270.264H1024.821315z m-49.36 0c0 119.464-89.624 216.8-199.848 216.8-110.16 0-199.896-97.264-199.896-216.8 0-119.528 89.56-216.792 199.896-216.792 110.224 0 199.856 97.264 199.856 216.8z"
              p-id="1842"
            ></path></svg
          >技能列表
        </div>
        <skill-list :skill="skill"></skill-list>
      </div>
      <section class="g-img2"></section>
      <div class="introduce-part my-2">
        <div class="title">关于我</div>
        <div class="desrcipion text-md text-center">
          <p>🎈我是一个喜欢钻牛角尖的人，总想着吃透原理，确又总是吃不下🎉</p>
          <p>🎈喜欢接触新的事物，感觉新的东西都很有意思🎉</p>
          <p>🎈内向的人，很想表达却止于迈出的一步🎉</p>
          <p>🎈未来任重而道远，希望能够一直坚持下去🎉</p>
        </div>
      </div>
      <section class="g-img3"></section>
      <!-- <div class="animation-part my-2">
        <div class="title">共勉</div>

        <div class="inspire"></div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import skillList from "~/components/common/skill-list/skill-list.vue";
export default {
  components: { skillList },
  async fetch({ store }) {
    await store.dispatch("about/getAuthor", { id: 1 });
  },
  computed: {
    ...mapState("about", ["author"]),
  },
  data() {
    return {
      timer:null,
      skill: [
        { name: "HTML5", num: 62 },
        { name: "CSS3", num: 35 },
        { name: "JavaScript", num: 70 },
        { name: "Vue.js", num: 54 },
        { name: "Node.js", num: 28 },
        { name: "Webpack", num: 21 },
        { name: "Koa", num: 23 },
        { name: "Mysql", num: 20 },
      ],
    };
  },
  methods: {
    setDate() {
      const secondHand = document.querySelector(".second-hand");
      const minsHand = document.querySelector(".min-hand");
      const hourHand = document.querySelector(".hour-hand");
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const mins = now.getMinutes();
      const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    },
  },
  mounted() {
    this.timer=setInterval(this.setDate, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
};
</script>

<style lang="scss" scoped>
.about {
  margin-top: 60px;
  min-height: 86vh;
  width: 100%;
}

.about-wrapper {
  width: 95%;
  margin: 0 auto;
  padding: 10px 20px;
  @media (min-width: 640px) {
    width: 90%;
  }
}
.author-avatar {
  width: 100px;
  height: 100px;

  @media (min-width: 640px) {
    width: 150px;
    height: 150px;
  }
}
.clock {
  width: 15rem;
  height: 15rem;
  border: 5px solid #545271;
  border-radius: 50%;
  margin: 1rem auto;
  position: relative;
  padding: 1rem;
  -webkit-box-shadow: 0 20px 30px rgba(104, 75, 106, 0.65);
  -moz-box-shadow: 0 20px 30px rgba(104, 75, 106, 0.65);
  box-shadow: 0 20px 30px rgba(104, 75, 106, 0.65);
  background: #545271;
  @media (min-width: 640px) {
    width: 20rem;
    height: 20rem;
  }
}

.outer-clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: #fefefc;
  -webkit-box-shadow: 0 20px 10px rgba(62, 47, 63, 0.45);
  -moz-box-shadow: 0 20px 10px rgba(62, 47, 63, 0.45);
  box-shadow: 0 20px 10px rgba(62, 47, 63, 0.45);
  overflow: hidden;
}

.outer-clock-face::after {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  transform: rotate(90deg);
}

.outer-clock-face::before,
.outer-clock-face::after,
.outer-clock-face .marking {
  content: "";
  position: absolute;
  width: 6px;
  height: 100%;
  background: #b8b8c5;
  z-index: 0;
  left: 49%;
}

.outer-clock-face .marking {
  background: #bdbdcb;
  width: 3px;
}

.outer-clock-face .marking.marking-one {
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  transform: rotate(30deg);
}

.outer-clock-face .marking.marking-two {
  -webkit-transform: rotate(60deg);
  -moz-transform: rotate(60deg);
  transform: rotate(60deg);
}

.outer-clock-face .marking.marking-three {
  -webkit-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  transform: rotate(120deg);
}

.outer-clock-face .marking.marking-four {
  -webkit-transform: rotate(150deg);
  -moz-transform: rotate(150deg);
  transform: rotate(150deg);
}

.inner-clock-face {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  background: #fefefc;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  z-index: 1;
}

.inner-clock-face::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  border-radius: 18px;
  margin-left: -9px;
  margin-top: -6px;
  background: #4d4b63;
  z-index: 11;
}

.hand {
  width: 50%;
  right: 50%;
  height: 6px;
  background: #61afff;
  position: absolute;
  top: 50%;
  border-radius: 6px;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}

.hand.hour-hand {
  width: 20%;
  z-index: 3;
}

.hand.min-hand {
  height: 3px;
  z-index: 10;
  width: 35%;
}

.hand.second-hand {
  background: #ff5e5e;
  width: 40%;
}

.title {
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 5px;
  border-bottom: 1px dashed #4d4b63;
}

$img1: 'https://xblog-pic-1305549463.cos.ap-guangzhou.myqcloud.com/about/nier1.jpg';

$img2: 'https://xblog-pic-1305549463.cos.ap-guangzhou.myqcloud.com/about/nier2.jpg';

$img3: 'https://xblog-pic-1305549463.cos.ap-guangzhou.myqcloud.com/about/nier3.jpg';

section {
    height: 70vh;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    width: 100%;
    text-align: center;
}

.g-img1 {
    
    background-image: url($img1);
    background-attachment: fixed;
    background-size: cover;
    
    background-position: center center;
}

.g-img2 {
    background-image: url($img2);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
}

.g-img3 {
    background-image: url($img3);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
}
</style>
