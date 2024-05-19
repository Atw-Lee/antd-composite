---
nav:
  title: Components
group:
  title: Input
  order: 0
---

# InputUnit

There is an input field for unit selection.

## When To Use

Input data with units, such as degrees/hours/seconds. m/km/h

## Examples

<code src='./demo/basic.tsx' title='Basic'></code>

## API

> `extends Omit<`[InputProps](https://ant-design.antgroup.com/components/select#select-props)`, 'value' | 'onChange' | 'addonAfter'>`

| 属性      | 说明                                                | 类型                                                                                                                        | 默认值 |
| --------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------ |
| options   | Unit selector dataflow configuration option content | `{ label, value }[]`                                                                                                        | -      |
| unitProps | Unit pull-down selector Props                       | `Omit<`[SelectProps](https://ant-design.antgroup.com/components/select#select-props)`, 'value' \| 'onChange' \| 'options'>` | -      |
| value     | Selected data                                       | [Value](#value)                                                                                                             | -      |
| onChange  | This function is called when value changes          | (value:[Value](#value))=>void                                                                                               | -      |

### Value

| 属性  | 说明           | 类型   |
| ----- | -------------- | ------ |
| input | Input value    | string |
| unit  | Selector value | string |
