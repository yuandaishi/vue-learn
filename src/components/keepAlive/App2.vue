<template>
  <div>
    <p>这里是app2</p>
    <p>{{ conutd }}</p>
    <p>{{ number }}</p>
    <p>{{ mySelf }}</p>
    <a @click="changeCount" href="#">点击改变store.count</a>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "app2",
  data: function () {
    return {
      // count: this.$store.state.count,
    };
  },
  methods: {
    changeCount() {
      console.log("xxxx");
      // this.$store.commit("increment");
      // this.$store.commit("changeAge");
      this.$store.dispatch("increment");
      console.log(this.$store.state.count); //这个值虽然改变了，如果count直接定义在data中，视图并不会跟着改变
    },
  },
  computed: {
    ...mapState({
      conutd: "count",
    }),
    number: function () {
      return this.$store.state.count + 1;
    },
    ...mapGetters({
      mySelf: "self",
    }),
  },
  mounted: function () {
    console.log(this.$store);
  },
};
</script>

<style>
</style>