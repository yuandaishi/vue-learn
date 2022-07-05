<template comments>
  <div>
    <!-- comments编译的时候保留注释 -->
    <p>动态设置img</p>
    <el-button @click="changeImg('xxxxx',$event)">点击改变下图</el-button>
    <img :src="imgUrl"  alt="图片" />
  </div>
</template>

<script>
import Logo from './logo.png'
import A from './a.gif'
export default {
  name: "Img",
  data:function(){
    return{
        imgUrl:Logo
    }
  },
  methods:{
    changeImg:function(e,value){
        console.log(e,value)
        this.imgUrl==='/img/logo.82b9c7a5.png'?this.imgUrl=A:this.imgUrl=Logo
        // console.log(this.$data,this.$options.data())
    }
  }
};
</script>

<style></style>
