<template>
  <el-dialog
    :append-to-body="true"
    :visible.sync="dialogVisible"
    @close="close"
  >
    信息管理首页弹窗
  </el-dialog>
</template>

<script>
export default {
  name: "infoDialog",
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    close() {
      this.$emit("update:flag", false);
    },
  },
  props: {
    flag: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    flag: {
      handler(newVal, oldVal) {
        this.dialogVisible = newVal;
      },
    },
  },
};
</script>

<style>
</style>