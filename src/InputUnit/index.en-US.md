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

| Property  | Description                                         | Type                                                                                                                        | Default |
| --------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| options   | Unit selector dataflow configuration option content | `{ label, value }[]`                                                                                                        | -       |
| unitProps | Unit pull-down selector Props                       | `Omit<`[SelectProps](https://ant-design.antgroup.com/components/select#select-props)`, 'value' \| 'onChange' \| 'options'>` | -       |
| value     | Selected data                                       | [Value](#value)                                                                                                             | -       |
| onChange  | This function is called when value changes          | (value:[Value](#value))=>void                                                                                               | -       |

### Value

| Property | Description    | Type     |
| -------- | -------------- | -------- |
| input    | Input value    | `string` |
| unit     | Selector value | `string` |
