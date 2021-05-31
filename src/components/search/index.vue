<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <!-- <el-form-item label="关键词:">
      <el-input
        v-model="formInline.user"
        placeholder="请输入搜索内容"
      ></el-input>
    </el-form-item>
    <el-form-item label="关键词:">
      <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option value="1"></el-option>
      </el-select>
    </el-form-item> -->
    <!-- slot -->
    <template v-for="item in this.config">
      <el-form-item
        :label="item.label"
        :key="item.id"
        v-if="item.type === 'input'"
      >
      </el-form-item>
    </template>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from "axios";
// import province from "@s/province.json";
export default {
  props: {
    config: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      formInline: {
        user: "",
        region: "",
        self: "",
      },
      provinceList: [],
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.config);
    },
  },
  created() {
    console.log("123123", this.config);
    // console.log(province);
    // this.provinceList = province.sort((a, b) => a.adcode - b.adcode);
    // axios.get("/static/province.json").then((res) => {
    //   console.log(res);
    //   // this.provinceList = res.data.sort((a,b) => a.adcode - b.adcode);
    // });
  },
};
</script>

<style lang="scss" scoped>
</style>