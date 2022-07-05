<template>
  <div class="box">
    <p>这是一个测试model的例子</p>
    <el-input v-model="name"></el-input>
    <p class="box-p">{{`name:${name}`}}</p>
    <modelDemo1 v-model="check" />
    <p>父组件的值跟着变化:{{check?'是':'否'}}</p>
    <p>下面为子组件单独的model</p>
    <el-input v-model='inputValue' @change.native="(ev,$event)=>change('xxxx',ev,$event)"></el-input>
    <input type="text"  @change="(ev)=>change('xxxx')">
    <p>input的值：{{inputValue}}</p>
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
        inputValue:'hello'
    }
  },
  methods:{
    change:function(e,value,$event){
        console.log(e,value,$event)
    }
  }
};
</script>

<style  scoped>

</style>
