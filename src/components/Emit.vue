<!--
 * @Author: your name
 * @Date: 2022-03-07 13:44:08
 * @LastEditTime: 2022-03-07 14:13:44
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
      @input="$emit('input', $event.target.value)"
    />
    <slot></slot>
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
  methods: {
    changeFarAction() {
      this.$emit("changeMsg", "aaaa", "bbbb");
    },
  },
};
</script>

<style></style>
