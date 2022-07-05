<template>
  <div>
    <el-checkbox :value='check' @change="(event)=>{$emit('change', event)}">请勾选</el-checkbox>
    <!-- <input
      type="checkbox"
      v-bind:checked="check"
      v-on:change="$emit('change', $event.target.checked)"
    /> -->
  </div>
</template>

<script>
export default {
  name: "model-demo1",
  data: function () {
    return {
        name:'xxxxx'
    };
  },
  model: {
    prop: "check",
    event: "change",
  },
  props: {
    check: {
      type: Boolean,
      default: false,
    },
  },
  mounted(){
    console.log(this.$root.name)
  },
  created(){
    console.log(this.$root)
  },
  methods: {
    change: function (e) {
      console.log(e);
      this.$emit("change", e);
    },
  },
};
</script>

<style></style>
