---
nav:
  title: 组件
group:
  title: Input
---

# InputRange 范围输入框

输入范围的输入框。

## 何时使用

需要输入起始值的场景，如金额范围，最大值最小值。

## 代码演示

<code src='./demo/basic.tsx' title='基础使用'></code>

## API

| 参数        | 说明                     | 类型                          | 默认值 |
| ----------- | ------------------------ | ----------------------------- | ------ |
| classNames  | 语义化结构 class         | `string`                      | -      |
| styles      | 语义化结构 style         | `CSSProperties`               | -      |
| placeholder | 输入框默认文本           | `string`                      | -      |
| value       | value值                  | [Value](#value)               | -      |
| onChange    | value 变化时，调用此函数 | (value:[Value](#value))=>void | -      |

### Value

| 参数  | 说明        | 类型     |
| ----- | ----------- | -------- |
| start | start value | `number` |
| end   | end value   | `number` |
