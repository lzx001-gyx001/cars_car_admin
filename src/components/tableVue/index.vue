<template>
  <div>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      border
      @selection-change="handleSelectionChange"
    >
    <!-- index -->
    <el-table-column v-if="tableConfig.index" type=index label="序号"></el-table-column>
      <!-- selection -->
      <el-table-column
        type="selection"
        :align="this.tableConfig.align"
        v-if="this.tableConfig.selection"
      ></el-table-column>
      <!-- v-slot -->
      <template v-for="item in tableConfig.column">
        <el-table-column
          :align="tableConfig.align || 'left'"
          :prop="item.prop"
          :label="item.label"
          :key="item.id"
          :width="item.width || '150px'"
          v-if="item.type === 'slot'"
        >
          <template slot-scope="scope">
            <slot :name="item.slotName" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <!-- checkBox -->
        <el-table-column
          :align="tableConfig.align || 'left'"
          :key="item.id"
          :prop="item.prop"
          :label="item.label"
          v-else-if="item.type === 'checkBox'"
        >
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.enable"></el-checkbox>
          </template>
        </el-table-column>
        <!-- 文本渲染 -->
        <el-table-column
          :align="tableConfig.align || 'left'"
          :key="item.id"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :formatter="item.formatter ? item.formatter : null"
          v-else
        >
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      tableConfig: {
        //本地默认配置
        column: [], //配置表格组件的列
        align: "left",
        selection: false,
        index:false,
      },
    };
  },
  methods: {
    // 初始化表格参数
    initTableConfig() {
      let configData = this.options;
      for (let key in configData) {
        if (this.tableConfig.hasOwnProperty(key)) {
          this.tableConfig[key] = configData[key];
        }
      }
    },
    //handleSelectionChange
    handleSelectionChange(row) {
      this.$emit("handleSelectionChange", row);
    }
  },
  created() {
    this.initTableConfig(); //初始化表格配置
  },
};
</script>

<style>
</style>