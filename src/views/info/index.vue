<template>
  <el-container>
    <el-table border centers :data="tableData" style="width: 100%">
      <el-table-column align="center" prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column align="center" prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column align="center" prop="address" label="地址">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" round @click="handleClick(scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" round>删除</el-button>
          <el-button size="mini" round @click="handleDetail(scope.row.id)"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 信息管理首页弹窗 -->
    <InfoDialog :flag.sync="flag" :slotData="this.dialogSlot">
      <template v-slot:dialogSlot="dialogData">
        <el-button @click="handleDialogClick(dialogData)">按钮</el-button>
      </template>
    </InfoDialog>
  </el-container>
</template>

<script>
// import InfoDialog from "./dialog/infoDialog";
import InfoDialog from "@/components/dialog";
export default {
  name: "infoIndex",
  components: {
    InfoDialog,
  },
  methods: {
    handleClick(row) {
      this.flag = true;
      this.dialogSlot = row;
      // this.say() //测试全局方法
    },
    handleDetail(id) {
      this.$router.push({
        name: "InfoDetail",
        query: {
          id,
        },
      });
    },
    handleDialogClick(val) {
      console.log(val);
    },
  },
  data() {
    return {
      dialogSlot: {},
      flag: false,
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "zhang3",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "zhang3",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "zhang3",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "zhang3",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "zhang3",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "zhang3",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style>
</style>