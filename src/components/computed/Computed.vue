<!--
 * @Author: your name
 * @Date: 2022-03-04 09:05:44
 * @LastEditTime: 2022-03-04 16:25:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\app\src\components\computed\Computed.vue
-->
<template>
  <div>
    <p>我的名字叫做：{{ name }}</p>
    <p>新名字叫做：{{ newName }}</p>
    <el-button type="primary" @click="changeName">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "Computed",
  data: function () {
    return {
      name: "yds",
    };
  },
  methods: {
    changeName: function () {
      this.name = this.name + "aaaa";
    },
  },
  computed: {
    newName: function () {
      return this.name + "xxxxx";
    },
  },
};
</script>

<style></style>
