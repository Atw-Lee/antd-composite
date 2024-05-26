---
nav:
  title: 组件
group:
  title: Transfer
  order: 100
---

# SortableTransfer 可排序的穿梭框

可以排序的双栏穿梭选择框。

## 何时使用

- 需要在多个可选项中进行多选时。
- 比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。
- 需要对选择的数据进行重新排序时。

## 代码演示

<code src='./demo/basic.tsx' title='基础使用'></code>

<code src='./demo/resizable.tsx' title='可拖拽'></code>

## API

| 参数              | 说明                           | 类型                                                          | 默认值                |
| ----------------- | ------------------------------ | ------------------------------------------------------------- | --------------------- |
| width             | 组件宽度                       | `number`                                                      | `700`                 |
| height            | 组件高度                       | `number`                                                      | `375`                 |
| transferWidth     | 左右盒子宽度                   | `number`                                                      | `340`                 |
| allowResizable    | 允许拖拽左右盒子               | `boolean`                                                     | `false`               |
| dataSource        | 数据源                         | `T[]`                                                         | -                     |
| fieldNames        | 自定义节点 id、name 的字段     | `object`                                                      | {id:`id`,name:`name`} |
| sourceHeaderLeft  | 自定义源数据Header-Left部分    | `( numerator: number,denominator: number) => React.ReactNode` | -                     |
| sourceHeaderRight | 自定义源数据Header-Right部分   | `React.ReactNode`                                             | -                     |
| targetHeaderLeft  | 自定义目标数据Header-Left部分  | `(selected: number) => React.ReactNode`                       | -                     |
| targetHeaderRight | 自定义目标数据Header-Right部分 | `React.ReactNode`                                             | -                     |
| value             | 选中的value                    | `T[]`                                                         | -                     |
| onChange          | 目标数据发生改变时，调用此方法 | `(data: T[]) => void`                                         | -                     |
