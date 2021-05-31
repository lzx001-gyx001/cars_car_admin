<template>
  <!-- 商品新增 -->
  <div>
    <!-- 按钮 -->
    <el-row>
      <el-col>
        <el-button type="success" @click="$router.go(-1)">back</el-button>
      </el-col>
    </el-row>
    <!-- 步骤条 -->
    <el-row style="margin: 20px 0 110px 0">
      <el-col :span="12" class="center">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <!-- 表单 -->
    <el-row>
      <el-col :span="12" class="center">
        <!-- 表单1 -->

        <div v-if="this.active == 0">
          <FormFirst />
        </div>
        <!-- 表单2 -->
        <div v-if="this.active == 1">
          <FormSecond />
        </div>
        <div class="btn-wrap">
          <el-button @click="next" type="danger">
            {{ this.active == 1 ? "提交" : "下一步" }}
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import FormFirst from "./stepFormFirst";
import FormSecond from "./stepFormSecond";
export default {
  components: {
    FormFirst,
    FormSecond,
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    next() {
      if (this.active >= 1) {
        this.active = 0;
        this.$router.push({
          name: "GoodsList",
        });
        return;
      }
      this.active++;
    },
  },
};
</script>

<style lang="scss" scoped>
.center {
  transform: translateX(-50%);
}
.btn-wrap {
  margin-top: 30px;
  text-align: center;
}
</style>