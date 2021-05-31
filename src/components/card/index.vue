<template>
  <el-card class="box-card" :class="bg"  shadow="hover">
    <div slot="header" class="clearfix" style="height:10px">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >操作按钮</el-button
      >
    </div>
    <div v-for="o in 1" :key="o" class="text item">
      {{ "列表内容 " + o }}
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: "",
    },
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  // margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
.success {
  background-color: rgba($color: #67c23a, $alpha: 0.6);
}
.warning {
  background-color: rgba($color: #e6a23c, $alpha: 0.6);
}
.danger {
  background-color: rgba($color: #f56c6c, $alpha: 0.6);
}
</style>