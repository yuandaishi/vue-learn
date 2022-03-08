<!--
 * @Author: your name
 * @Date: 2022-03-08 09:15:29
 * @LastEditTime: 2022-03-08 09:28:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\app\src\components\Is.vue
-->
<template>
  <div>
      <!-- 会渲染相应的组件在这里 -->
    <component :is="currentComponent"></component>
    <el-button @click="changeComponent('1')">点击切换1</el-button>
    <el-button @click="changeComponent('2')">点击切换2</el-button>
    <el-button @click="changeComponent('3')">点击切换3</el-button>
  </div>
</template>

<script>
import App1 from './is/app1.vue'
import App2 from './is/app2.vue'
import App3 from './is/app3.vue'

export default {
  name: "Is",
  data: function () {
    return {
      currentComponent: "app1",
    };
  },
  components:{
      App1,
      App2,
      App3
  },
  methods: {
    changeComponent(key) {
      switch (key) {
        case "1":
          this.currentComponent = "app1";
          break;
        case "2":
          this.currentComponent = "app2";
          break;
        case "3":
          this.currentComponent = "app3";
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style></style>
