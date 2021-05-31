<template>
  <div>
    children1

    <el-button type="denger" @click="handleGetChildren2"
      >children1 的按钮</el-button
    >

    {{ this.msg }}
  </div>
</template>

<script>
import { eventBus } from "@/utils/eventBus";
export default {
  data() {
    return {
      msg: "this is children1",
    };
  },
  methods: {
    handleGetChildren2() {
      console.log("获取children_2的数据");
      eventBus.$emit("getChildren1", this.msg);
    },
  },
  destroyed(){
      eventBus.$off("getChildren1",'')
  }
};
</script>

<style>
</style>