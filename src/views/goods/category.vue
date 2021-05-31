<template>
  <div>
    <!-- 商品类目页 -->
    <div>父组件</div>
    <div>{{ this.c_data + this.f_data }}</div>
    <Children2 ref="children" />
    <Children1 />
    <el-button type="success" @click="handleGetData"> 获取数据 </el-button>
  </div>
</template>

<script>
import Children2 from "./children_2";
import Children1 from "./children_1";
export default {
  components: {
    Children2,
    Children1,
  },
  data() {
    return {
      f_data: "f_data",
      c_data: "",
    };
  },
  methods: {
    handleGetData() {
      this.c_data = this.$children[0].c_data;
      this.$refs.children.say();
    },
  },

};
</script>

<style lang="scss" scoped>
</style>