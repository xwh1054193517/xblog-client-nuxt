<template>
  <div class="message-box">
    <div class="message-wrapper shadow-md">
      <h1 class="font-bold text-yellow-900">留言板</h1>
      <div class="message-List">
        <div
          class="mes-Item"
          ref="mesItem"
          v-for="(item, index) in messages"
          :key="index"
        >
          <message-box :messages="item"></message-box>
        </div>
      </div>
      <div class="loadmore" v-if="LoadMore" @click="loadMoreMessage"></div>
      <loading v-if="loading"></loading>
      <div
        v-if="!loading && messages.length >= total"
        class="noMore mt-5 text-center text-lg text-red-400"
      >
        ~再往下已经没有辣~
      </div>
    </div>

    <div class="publish m-4">
      <message-editor @publish="onPublish" ref="editor"></message-editor>
    </div>
  </div>
</template>

<script>
import Loading from "~/components/layout/loading/loading.vue";
import messageBox from "~/components/common/message/messageBox.vue";
import { mapState } from "vuex";
import MessageEditor from "~/components/common/message/messageEditor.vue";
export default {
  async fetch({ store, params }) {
    await store.dispatch("message/getMessages", { page: 0, count: 12 });
  },
  components: { messageBox, Loading, MessageEditor },
  data() {
    return {
      page: 0,
      loading: false,
    };
  },
  computed: {
    ...mapState("message", ["messages", "total"]),
    LoadMore() {
      if (this.messages.length && !this.loading) {
        return this.total > this.messages.length;
      } else {
        return false;
      }
    },
  },

  methods: {
    async loadMoreMessage() {
      this.page++;
      await this.$store.dispatch("message/getMoreMessages", {
        page: this.page,
        count: 12,
      });
    },
    async onPublish(val){
      await this.$store.dispatch('message/createMessage',{
        nickname:val.nickname,
        content:val.content
      })
      this.$refs.editor.resetForm()
      await this.$store.dispatch("message/getMessages", { page: 0, count: 12 });
      this.$message.success('发布成功')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/animation.scss";
.message-box {
  margin-top: 60px;
  min-height: 86vh;

  background-size: cover;
  background-image: url("https://xblog-pic-1305549463.cos.ap-guangzhou.myqcloud.com/about/nier3.jpg");
}
.message-wrapper {
  width: 95%;
  height: 80vh;
  margin: 0 auto;
  overflow: hidden;
  padding: 10px 15px;
  transition: all 1s ease-in-out;
  animation: moveDown 0.8s ease-in-out 0s 1 normal forwards running ;
  &:hover {
    overflow: auto;
  }
  @media (min-width: 640px) {
    padding: 10px 3px;
  }
}
.message-List {
  display: grid;
  grid-template-columns: auto;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 470px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
.loadmore {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  margin-top: 12px;
  border: 8px solid rgb(240, 94, 162);
  border-radius: 50%;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 30px;
    height: 30px;
    border-width: 5px;
  }

  &:hover {
    border-color: rgb(240, 94, 162);
    background-color: rgb(240, 94, 162);
    transform: scale(0.65);
  }
}
</style>
