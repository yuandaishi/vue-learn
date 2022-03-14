<!--
 * @Author: your name
 * @Date: 2022-03-07 08:52:44
 * @LastEditTime: 2022-03-08 18:34:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\app\src\components\computed\keySame.vue
-->
<template>
  <div>
    <input v-if="con" placeholder="Enter your username" key="a" />
    <input v-else placeholder="Enter your email address" key="b" />
    <input value="测试v-model" v-model="con" />
    <el-button @click="changeCon">点击修改</el-button>
    <div v-for="n in 10" :key="n">{{ n }}</div>
    <el-button @click.ctrl="ctrlClick($event)" key="c"
      >点击ctrl+click的时候触发</el-button
    >
    <emit :msg="msg" @changeMsg="changeMsg" v-model="msg" sex='man'
      ><div class="box">这是一个例子，好不好再说:性别：{{sex}}</div>
      <template v-slot:body>这是body插槽</template>
      <template v-slot:header>这是头部插槽</template>
      <template v-slot:default="user"> {{ user.firstName }}</template>
      </emit
    >
  </div>
</template>

<script>
import Emit from "./Emit.vue";

export default {
  name: "KeySame",
  data: function () {
    return {
      con: true,
      msg: "父组件msg",
      sex:'女',
      user:{
        firstName:"yuan"
      }
    };
  },
  components: {
    Emit,
  },
  methods: {
    changeCon() {
      console.log("xxx");
      return (this.con = !this.con);
    },
    ctrlClick(event) {
      console.log("ctrl", event);
      console.log(this.$el);
    },
    changeMsg(a, b) {
      console.log(a, b);
      this.msg += 1;
    },
  },
};
</script>

<style scope>
.box {
  border: 1px solid #cccccc;
}
</style>
