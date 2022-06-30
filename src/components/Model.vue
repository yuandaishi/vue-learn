<template>
  <div>
    <p>这是一个测试model的例子</p>
    <el-input v-model="name"></el-input>
    <p>{{`name:${name}`}}</p>
    <modelDemo1 v-model="check" />
    <p>父组件的值跟着变化:{{check?'是':'否'}}</p>
  </div>
</template>

<script>
import modelDemo1 from './model/modelDemo1.vue';
export default {
  name: "Model",
  components:{
    modelDemo1
  },
  data:function(){
    return {
        name:'yds',
        check:true,
    }
  }
};
</script>

<style></style>
