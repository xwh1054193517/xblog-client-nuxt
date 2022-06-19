<template>
  <div class="container shadow-md p-2 bg-opacity-60 backdrop-brightness-75 rounded-lg">
    <div class="wrapper text-sm">
      <div class="name flex items-center justify-between">
        <div class="nickname flex items-center">
          <svg
            t="1655365735713"
            class="icon p-1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2147"
            width="1.5em"
            height="1.5em"
          >
            <path
              d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667zM288 810.666667c0-123.733333 100.266667-224 224-224S736 686.933333 736 810.666667c-61.866667 46.933333-140.8 74.666667-224 74.666666s-162.133333-27.733333-224-74.666666z m128-384c0-53.333333 42.666667-96 96-96s96 42.666667 96 96-42.666667 96-96 96-96-42.666667-96-96z m377.6 328.533333c-19.2-96-85.333333-174.933333-174.933333-211.2 32-29.866667 51.2-70.4 51.2-117.333333 0-87.466667-72.533333-160-160-160s-160 72.533333-160 160c0 46.933333 19.2 87.466667 51.2 117.333333-89.6 36.266667-155.733333 115.2-174.933334 211.2-55.466667-66.133333-91.733333-149.333333-91.733333-243.2 0-204.8 168.533333-373.333333 373.333333-373.333333S885.333333 307.2 885.333333 512c0 93.866667-34.133333 177.066667-91.733333 243.2z"
              p-id="2148"
            ></path>
          </svg>
          {{ messages.nickname ? messages.nickname : "匿名Vistor" }}
        </div>
        <div class="pubTime text-xs font-light">{{ messages.createTime }}</div>
      </div>
      <div class="content">
        {{ messages.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 350px;
  min-height: 150px;
  transition: all 0.4s ease;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px 10px #ccc;
  }
}
.name {
  font-size: 1.1rem;
  padding: 4px 0;
  font-weight: bold;
}
.content {
  text-indent: 2em;
  padding: 3px;
  font-size: 0.8rem;
  color: rgb(6, 194, 28);
}
</style>
