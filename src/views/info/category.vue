<template>
  <div>
    <TableVue :tableData="tableData" :options="options">
      <template v-slot:switch="slotData">
        <el-button size="mini" type="success" @click="handleClick(slotData)">{{
          "编辑"
        }}</el-button>
        <el-button size="mini" type="danger" @click="handleClick(slotData)">{{
          "删除"
        }}</el-button>
      </template>
      <template v-slot:footer="slotData">
        <el-switch
          v-model="slotData.data.isWork"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </template>
    </TableVue>
  </div>
</template>

<script>
import TableVue from "@/components/tableVue/index";
export default {
  name: "infoCategory",
  components: {
    TableVue,
  },
  data() {
    return {
      options: {
        align: "center",
        column: [
          {
            prop: "name",
            label: "姓名",
          },
          {
            prop: "age",
            label: "年龄",
          },
          {
            prop: "address",
            label: "地址",
          },
          {
            label: "开关",
            type: "slot",
            slotName: "footer",
          },
          {
            label: "操作",
            type: "slot",
            slotName: "switch",
          },
        ],
      },
      tableData: [
        {
          name: "张三",
          age: 18,
          address: "手动阀沙发",
          isWork: true,
        },
        {
          name: "李四",
          age: 20,
          address: "手动阀沙发",
          isWork: false,
        },
        {
          name: "王5",
          age: 23,
          address: "手动阀沙发",
          isWork: false,
        },
      ],
    };
  },
  methods: {
    handleClick(row) {
      console.log(row.data);
    },
  },
};
</script>

<style>
</style>