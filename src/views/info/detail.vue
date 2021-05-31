<template>
  <el-row>
    <el-col :span="12">
      <el-button size="small" @click="handleGoBack">返回</el-button>
    </el-col>
    <el-col :span="6">
      {{ this.$route.query.id }}
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "infoDetail",
  methods: {
    handleGoBack() {
      this.$router.go(-1);
    },
  },
  created() {
    console.log(this.$route.query);
  },
};
</script>

<style>
</style>