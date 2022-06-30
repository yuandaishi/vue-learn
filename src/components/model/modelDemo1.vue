<template>
  <div>
    <el-checkbox @value='check' @change="(event)=>{$emit('change', event)}">请勾选</el-checkbox>
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
    return {};
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
  methods: {
    change: function (e) {
      console.log(e);
      this.$emit("change", e);
    },
  },
};
</script>

<style></style>
