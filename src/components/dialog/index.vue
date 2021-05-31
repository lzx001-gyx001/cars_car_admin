<template>
  <el-dialog
    :append-to-body="true"
    :visible.sync="dialogVisible"
    @close="close"
  >
    <slot name="dialogSlot" :dialogData="this.slotData"></slot>
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
    slotData: {
      
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