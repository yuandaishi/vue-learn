<template>
  <div>
    <p>这里是app1</p>
    <el-button @click="changeShow">点击触发</el-button>
    <p v-show="show" ref="p">默认不展示，点击之后展示</p>
  </div>
</template>

<script>
export default {
  name: "app1",
  data: function () {
    return {
      show: false,
    };
  },
  methods: {
    changeShow() {
      this.show = !this.show;
      console.log(this.show, this.$refs.p);
    },
  },
};
</script>

<style>
</style>