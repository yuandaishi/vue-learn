<!--
 * @Author: your name
 * @Date: 2022-03-04 11:07:56
 * @LastEditTime: 2022-03-04 14:48:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\app\src\components\menu.vue
-->

<template>
  <el-submenu v-if="data.children" :index="index">
    <template slot="title">
      <i :class="data.class"></i>
      <span>{{ data.name }}</span>
    </template>
    <template v-for="(item, key) in data.children">
      <Menu :data="item" :index="item.key" :key="key" />
    </template>
  </el-submenu>
  <el-menu-item v-else :index="index">
    <router-link :to="data.link">{{ data.name }}</router-link>
    <!-- <i :class="data.class"></i>
    <span slot="title">{{ data.name }}</span> -->
  </el-menu-item>
</template>
<script>
export default {
  name: "Menu",
  props: {
    data: Object,
    index: String,
  },
};
</script>

<style></style>
