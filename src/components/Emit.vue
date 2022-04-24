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
    <p>从路由获取的数据:{{ sex }}</p>
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
    <slot user="user"> 作用域插槽：{{ msg }} </slot>
  </div>
</template>

<script>
export default {
  name: "emit",
  props: {
    msg: {
      type: String,
    },
    age:{
      type:Number,
      default:100
    }
  },
  beforeCreate() {
    // 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。
    console.log("beforeCreate", this, this.$el);
  },
  created() {
    // 在实例创建完成后被立即同步调用。在这一步中，实例已完成对选项的处理，意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。然而，挂载阶段还没开始，且 $el property 目前尚不可用。
    console.log("created", this, this.$el);
  },
  beforeMount() {
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    // 该钩子在服务器端渲染期间不被调用。
    console.log("beforeMount", this, this.$el);
  },
  mounted() {
    // 实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。
    // 注意 mounted 不会保证所有的子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕再执行某些操作，可以在 mounted 内部使用 vm.$nextTick：
    console.log("mounted", this, this.$el);
  },
  data: function () {
    return {
      sex: "那哪那男",
      salary:100000000000,
    };
  },
  watch: {
    $route: {
      // 在beforecreate之后执行
      handler: function (loaction) {
        if (loaction.query.sex) {
          // 如果msg后期异步改变了，这里将监听不多，这里只会监听到默认的值
          console.log("父组件传过来的msg", this.msg);
          this.sex = loaction.query.sex;
        }
        console.log(loaction);
      },
      immediate: false,
    },
    salary: {
      handler: function (val) {
        console.log('salary',val);
      },
      // immediate为false，不监听第一次，也就是说如果没有改变的话，不执行
      // immediate为true，默认监听第一次，就算没有改变也执行一次，而且在beforeCreate周期之后执行
      immediate: true,
    },
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
