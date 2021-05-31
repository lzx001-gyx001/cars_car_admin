<template>
  <div>
    children2

    {{ "使用$parent方法" + this.$parent.f_data }}
    {{ "使用eventBus方法" + this.msg_1 }}
  </div>
</template>

<script>
import { eventBus } from "@/utils/eventBus";
export default {
  data() {
    return {
      c_data: "children_data",
      msg: "this is children2",
      msg_1: "",
    };
  },
  created() {
  },
  mounted() {
    eventBus.$on("getChildren1", (params) => {
      this.msg_1 = params;
    });
  },
  methods: {
    say() {
      console.log("this is children2");
    },
  },
};
</script>

<style>
</style>