<template>
  <div>
    <p>keep-alive组件</p>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, key) in tabData"
        :label="item.label"
        :name="item.name"
        :key="key"
      >
        <keep-alive>
          <component :is="currentComponent"></component>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import app1 from "./keepAlive/App1.vue";
import app2 from "./keepAlive/App2.vue";
import app3 from "./keepAlive/App3.vue";
export default {
  name: "keep",
  data: function () {
    return {
      currentComponent: "app2",
      componentsList: {
        first: "app1",
        second: "app2",
        third: "app3",
      },
      activeName: "second",
      tabData: [
        {
          label: "用户管理",
          name: "first",
        },
        {
          label: "配置管理",
          name: "second",
        },
        {
          label: "角色管理",
          name: "third",
        },
      ],
    };
  },
  methods: {
    handleClick: function (tab) {
      console.log(tab);
      this.currentComponent = this.componentsList[tab.name];
      // console.log(this.$refs.p);
    },
  },
  components: {
    app1,
    app2,
    app3,
  },
  props: {},
};
</script>
    
<style>
</style>