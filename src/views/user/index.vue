<template>
  <div>
    <TableVue
      v-model="formData"
      :tableData="this.tableData"
      :options="this.options"
      @handleSelectionChange="handleSelectionChange"
    >
      <template v-slot:switch="slotData">
        <el-button @click="handleEdit(slotData)">编辑</el-button>
      </template>
    </TableVue>
  </div>
</template>

<script>
import TableVue from "@/components/tableVue";
export default {
  name: "user",
  components: {
    TableVue,
  },
  data() {
    return {
      formData: {},
      tableData: [
        {
          username: "san",
          realName: "张三",
          email: "12123@qq.com",
          appkey: "123sdf-2sdf",
          role: "admin",
          enable: true,
        },
        {
          username: "si",
          realName: "李四",
          email: "12123@qq.com",
          appkey: "123sdf-2sdf",
          role: "admin",
          enable: true,
        },
        {
          username: "wu",
          realName: "王五",
          email: "12123@qq.com",
          appkey: "123sdf-2sdf",
          role: "admin",
          enable: true,
        },
      ],
      options: {
        align: "center",
        column: [
          { label: "用户名", prop: "username" },
          { label: "真是姓名", prop: "realName" },
          { label: "角色", prop: "role" },
          { label: "邮箱", prop: "email" },
          { label: "appkey", prop: "appkey" },
          { label: "是否启用", prop: "enable", type: "checkBox" },
          { label: "操作", type: "slot", slotName: "switch" },
        ],
        selection: "true",
      },
    };
  },
  methods: {
    handleEdit(row) {
      console.log(row.data);
    },
    handleSelectionChange(arr){
      console.log("外部打印",arr);
    }
  },
};
</script>

<style>
</style>