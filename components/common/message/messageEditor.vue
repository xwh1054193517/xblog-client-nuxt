<template>
  <div class="editor-container shadow-sm mt-3 rounded-md mb-3">
    <div class="info flex justify-start items-center">
      <div class="avatar">
        <!-- 用户头像唯一 -->
        <img class="avatar" src="https://www.shirmy.me/_nuxt/img/8d326fe.png" />
      </div>
      <div class="nickname">
        <input
          v-model="form.nickname"
          maxlength="32"
          class="user-input"
          :required="isMessageEditor ? false : true"
          name="text"
          type="text"
          :placeholder="isMessageEditor ? '昵称（非必填）' : '昵称（必填）'"
        />
      </div>
    </div>
    <div class="editor">
      <a-textarea
        ref="editContent"
        class="content"
        placeholder="发表一下..."
        :rows="5"
        v-model="form.content"
      />
    </div>
    <div class="tool-wrapper flex items-center justify-end mt-2">
      <div class="publish" v-debounce="{ fn: publish,delay:1000 }">发表</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMessageEditor: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      form: {
        nickname: "",
        content: "",
      },
    };
  },
  methods: {
    publish() {
      let valid = this.getValid();
      if (valid) {
         this.$message.error(valid);
        return
      }
      this.$emit("publish",this.form);
    },
    getValid() {
      if (!this.form.content || !this.form.content.replace(/\s/g, "")) {
        if (
          this.form.content.length > 1000 ||
          this.form.content.split("\n").length > 30
        ) {
          return `${
            this.isMessageEditor ? "留言" : "评论"
          }内容不能超过1000个字且控制在30行以内`;
        }
        return this.isMessageEditor ? "留言内容不能为空" : "评论内容不能为空";
      }
      // 留言墙
      if (this.isMessageEditor) {
        if (this.form.nickname && this.form.nickname.length > 32) {
          return "昵称不能超过32个字符";
        }
      } else {
        if (!this.form.nickname || this.form.nickname.length > 32) {
          return "昵称不能为空且长度不能超过32个字符";
        }
      }
      return false;
    },
    resetForm(){
      this.form.nickname='';
      this.form.content='';
    }
  },
};
</script>

<style lang="scss" scoped>
.editor-container {
  width: 90%;
  margin: 0 auto;
  padding: 10px 15px;
  border: 1px solid rgba(136, 136, 136, 0.4);
  background-color: rgba(136, 136, 136, 0.4);
  @media (min-width: 640px) {
    width: 80%;
  }
}
.info {
  padding: 5px 2px;
  margin: 5px;
}
.avatar {
  width: 35px;
  height: 35px;
  margin-right: 0.5rem;
}
.nickname {
  input {
    width: 100%;
    height: 2em;
    line-height: normal; // 解决 placeholder 在 ios 无法垂直居中的问题
    padding: 8px 10px;
    outline: none;
    border-radius: 10px;
  }
}
.content {
  min-height: 200px;
}
.publish {
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  border: 1px solid;
  color: white;
  font-weight: bold;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  vertical-align: baseline;
  transition: all 0.4s ease;

  &:hover {
    background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
    transform: translateY(2px);
  }
}
</style>
