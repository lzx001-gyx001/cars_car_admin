<template>
  <!-- 商品列表页 -->
  <div>
    <!-- 搜索 -->
    <el-row>
      <el-col>
        <Search @onSearch="handleSearch" :categoryList="this.selectList" />
      </el-col>
    </el-row>
    <!-- 新增按钮 -->
    <el-row style="margin: 20px 0">
      <el-col>
        <el-button v-debounce="[this.handleAdd, 1000, false]">
          新增{{ this.count }}
        </el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-row>
      <el-col>
        <TableVue :options="this.options" :tableData="this.tableData">
          <template v-slot:statusSlot="slotData">
            <el-switch
              v-model="slotData.data.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
          <template v-slot:switch="slotData">
            <el-button
              size="mini"
              type="success"
              @click="handleClick(slotData)"
              >{{ "编辑" }}</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleClick(slotData)"
              >{{ "删除" }}</el-button
            >
          </template>
        </TableVue></el-col
      >
    </el-row>
  </div>
</template>

<script>
import TableVue from "@/components/tableVue/index";
import Search from "./search";
import { getProducts, getSelectOptions } from "@/api/goods";
export default {
  components: {
    TableVue,
    Search,
  },
  data() {
    return {
      count: 0,
      selectList: [], //类目内容
      searchQuery: {
        page: 1,
        pageSize: 10,
      },
      tableData: [],
      options: {
        index: true,
        align: "center",
        column: [
          {
            prop: "title",
            label: "商品标题",
          },
          {
            prop: "desc",
            label: "商品描述",
          },
          {
            prop: "category",
            label: "类目",
            width: "80",
            formatter: this.categoryFormatter(),
          },
          {
            prop: "tags",
            label: "标签",
          },
          {
            prop: "price",
            label: "价格",
            width: "50",
          },
          {
            prop: "price_off",
            label: "折扣价",
            width: "50",
          },
          {
            prop: "unit",
            label: "单位",
            width: "80px",
          },
          {
            prop: "status",
            label: "上架状态",
            type: "slot",
            slotName: "statusSlot",
            width: "80",
          },
          {
            prop: "inventory",
            label: "库存量",
            width: "80px",
          },
          {
            prop: "sale",
            label: "销量",
            width: "120",
          },
          {
            label: "操作",
            type: "slot",
            slotName: "switch",
          },
        ],
      },
    };
  },
  methods: {
    //点击查询按钮
    async handleSearch(val) {
      let params = {
        ...this.searchQuery,
        ...val,
      };
      try {
        const res = await getProducts(params);
        if (res.status !== "success") return;
        this.tableData = res.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    //获取类目
    async getOptions() {
      const select = await getSelectOptions();
      this.selectList = select.data.data;
    },
    //获取表格数据
    async getTableData() {
      let data = {
        ...this.searchQuery,
      };
      try {
        const res = await getProducts(data);
        if (res.status == "success") {
          this.tableData = res.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    //格式化category
    categoryFormatter() {
      return (row, column) => {
        if (row.category == 1) {
          return "酒水冲调";
        } else if (row.category == 2) {
          return "时令水果";
        } else if (row.category == 3) {
          return "安心乳品";
        } else if (row.category == 4) {
          return "休闲零食";
        } else {
          return "新鲜蔬菜";
        }
      };
    },
    //点击新增按钮
    handleAdd() {
      this.count++;
      return;
      this.$router.push({
        name: "GoodsAdd",
      });
    },
  },
  activated() {console.log("进入");},
  deactivated() {console.log("离开");},
  created() {
    console.log("created");
    this.getOptions(); //查询商品列表
    this.getTableData(); //获取表格数据
    // console.log(this.btnPermission("add")); //全局方法
  },
};
</script>

<style lang="scss" scoped>
</style>