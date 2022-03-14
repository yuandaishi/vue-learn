<!--
 * @Author: your name
 * @Date: 2022-03-07 13:44:08
 * @LastEditTime: 2022-03-08 18:32:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\app\src\components\Emit.vue
-->
<template>
  <div>
    <p>测试$emit:{{ msg }}</p>
    <el-button @click="changeFarAction">点击触发父组件事件</el-button>
    <input
      type="text"
      :value="msg"
      :bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
    <slot name="body"></slot>
    <slot></slot>
    <p>测试插槽位置</p>
    <slot name="foot" :user="user">{{ user.firstName }}</slot>
  </div>
</template>

<script>
export default {
  name: "emit",
  props: {
    msg: {
      type: String,
    },
  },
  data: function () {
    return {
      user: {
        firstName: "测试用xxxx",
        lastName: "测试用lastName",
      },
    };
  },
  methods: {
    changeFarAction() {
      console.log(this.$attrs);
      this.$emit("changeMsg", "aaaa", "bbbb");
    },
  },
};
</script>

<style></style>
