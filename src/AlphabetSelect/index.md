---
nav:
  title: 组件
group:
  title: Select
  order: 1
demo:
  cols: 2
---

# AlphabetSelect 字母选择

字母选择控件.

## 何时使用

选择的数据结构是可安装字母A-Z进行首字母区分的，如城市、货币等等。

## 代码演示

<code src='./demo/basic.tsx' title='基本使用'></code>
<code src='./demo/multiple.tsx' title='多选'></code>

## API

> `extends Omit<`[SelectProps](https://ant-design.antgroup.com/components/select-cn#select-props)`, 'value' | 'onChange' | 'dropdownRender' | 'options' | 'fieldNames' | 'filterOption' |'filterSort' | 'optionFilterProp' | 'optionRender'>`

| 参数       | 说明                         | 类型                                                               | 默认值                |
| ---------- | ---------------------------- | ------------------------------------------------------------------ | --------------------- |
| data       | 数据源                       | [Value](#value)[]                                                  | -                     |
| value      | 选择的数据，单选多选都是数组 | [Value](#value)[]                                                  | -                     |
| fieldNames | 自定义节点 id、name 的字段   | `object`                                                           | {id:`id`,name:`name`} |
| rowProps   | 数据中行属性                 | [RowProps](https://ant-design.antgroup.com/components/grid-cn#row) | {gutter:`[8, 8]`}     |
| colProps   | 数据中列属性                 | [ColProps](https://ant-design.antgroup.com/components/grid-cn#col) | {span:`6`}            |
| onChange   | value 变化时，调用此函数     | (value:[Value](#value)[])=>void                                    | {span:`6`}            |

### Value

| 参数     | 说明       | 类型                 |
| -------- | ---------- | -------------------- |
| id       | id         | `string`             |
| name     | name       | `string`             |
| alphabet | 首字母标识 | `A` \| `B`... \| `Z` |
