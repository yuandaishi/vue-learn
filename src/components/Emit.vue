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
    <slot>后背内容</slot>
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot :user='user'>
      作用域插槽：{{msg}}
    </slot>
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
  data:function(){
    return {
      sex:"男"
    }
  },
  methods: {
    changeFarAction() {
      console.log(this.$attrs)
      this.$emit("changeMsg", "aaaa", "bbbb");
    },
  },
};
</script>

<style></style>
