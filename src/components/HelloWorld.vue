<!--
 * @Author: your name
 * @Date: 2022-03-04 08:53:11
 * @LastEditTime: 2022-03-08 09:18:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\app\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- 有子元素children的话，则是el-submenu，没有的话，则是el-menu-item -->
      <template v-for="(item, key) in menus">
        <Menu :data="item" :index="item.key" :key="key" />
      </template>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./Menu";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Menu,
  },
  data: function () {
    return {
      menus: [
        {
          name: "computed",
          class: "el-icon-menu",
          key: "1",
          children: [
            {
              name: "computed1",
              key: "1-1",
              link: "/computed1",
            },
            {
              name: "computed2",
              key: "1-2",
              children: [
                {
                  name: "computed2-son",
                  key: "1-2-1",
                  link: "/computed2-son",
                },
              ],
            },
          ],
        },
        {
          name: "KeySame",
          class: "el-icon-document",
          key: "2",
          link: "/KeySame",
        },
        {
          name: "Is",
          class: "el-icon-document",
          key: "3",
          link: "/Is",
        },
        {
          name: "Model",
          class: "el-icon-document",
          key: "4",
          link: "/Model",
        },
        {
          name: "Img",
          class: "el-icon-document",
          key: "5",
          link: "/Img",
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
