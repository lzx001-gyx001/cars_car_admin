<template>
  <!-- 搜索组件 -->
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="关键词:">
      <el-input
        v-model="formInline.searchWord"
        placeholder="关键词"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item label="商品类目">
      <el-select v-model="formInline.category" clearable placeholder="商品类目">
        <!-- 请求字典 -->
        <el-option
          :label="item.name"
          :value="item.id"
          v-for="item in categoryList"
          :key="item.id"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        searchWord: "",
        category: "",
      },
    };
  },
  props:["categoryList"],
  methods: {
    onSubmit() {
      this.$emit("onSearch", this.formInline);
    },
  },
  created() {},
};
</script>

<style lang="sass" scoped>
</style>