属性（attr）：

| 参数      | 说明             | 类型   | 可选值 | 默认值 |
| --------- | ---------------- | ------ | ------ | ------ |
| tableData | 表格要渲染的数据 | Array  |        | []     |
| options   | 配置表格的参数   | Object |        | {}     |

options：

| 参数      | 说明         | 类型/可选值                     | 默认值 |
| --------- | ------------ | ------------------------------- | ------ |
| selection | 表格全选     | Boolean                         | false  |
| align     | 表格对齐方式 | string/left,right,center        | left   |
| column    | 表头         | Array/[{prop:'xx',label:"xxx"}] | []     |

```js
column=[
    {
        prop:"name",//对应字段
        label："姓名",//表头名称
        slotName:"xxx",//插槽名称（随意起）
        type:"slot",//类型，可选值（slot,checkBox)
    },
        {
        prop:"iswork",//对应字段
        label："是否启用",//表头名称
        slotName:"xxx",//插槽名称（随意起）
        type:"checkBox",//类型，可选值（slot,checkBox)
    }
]
```



事件（event）：

| event                 | 说明                                      | 事件参数val    |
| --------------------- | ----------------------------------------- | -------------- |
| handleSelectionChange | selection为true时的监听函数，当前选中的列 | 当前选中的的列 |
|                       |                                           |                |
|                       |                                           |                |

回调（callback）：