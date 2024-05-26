---
nav:
  title: 组件
group:
  title: Input
  order: 0
---

# InputUnit 单位输入框

有单位选择的输入框。

## 何时使用

输入的数据带有单位，如次/时分秒、m/km/h。

## 代码演示

<code src='./demo/basic.tsx' title='基础使用'></code>

## API

> `extends Omit<`[InputProps](https://ant-design.antgroup.com/components/select-cn#select-props)`, 'value' | 'onChange' | 'addonAfter'>`

| 参数      | 说明                             | 类型                                                                                                                           | 默认值 |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------ |
| options   | 单位下拉选择器数据化配置选项内容 | `{ label, value }[]`                                                                                                           | -      |
| unitProps | 单位下拉选择器Props              | `Omit<`[SelectProps](https://ant-design.antgroup.com/components/select-cn#select-props)`, 'value' \| 'onChange' \| 'options'>` | -      |
| value     | 选择的数据                       | [Value](#value)                                                                                                                | -      |
| onChange  | value 变化时，调用此函数         | (value:[Value](#value))=>void                                                                                                  | -      |

### Value

| 参数  | 说明                | 类型     |
| ----- | ------------------- | -------- |
| input | 输入框value         | `string` |
| unit  | 单位下拉选择器value | `string` |
