---
nav:
  title: Components
group:
  title: Select
  order: 1
demo:
  cols: 2
---

# AlphabetSelect

Alphabet selection control.

## When To Use

The selected data structure can be installed with letters A-Z for initial differentiation, such as city, currency, and so on.

## Examples

<code src='./demo/basic.tsx' title='Basic'></code>
<code src='./demo/multiple.tsx' title='Multiple Selection'></code>

## API

> `extends Omit<`[SelectProps](https://ant-design.antgroup.com/components/select#select-props)`, 'value' | 'onChange' | 'dropdownRender' | 'options' | 'fieldNames' | 'filterOption' |'filterSort' | 'optionFilterProp' | 'optionRender'>`

| Property   | Description                                                  | Type                                                            | Default               |
| ---------- | ------------------------------------------------------------ | --------------------------------------------------------------- | --------------------- |
| data       | Data source                                                  | [Value](#value)[]                                               | -                     |
| value      | The selected data, single and multiple selections are arrays | [Value](#value)[]                                               | -                     |
| fieldNames | User-defined node id and name fields                         | `object`                                                        | {id:`id`,name:`name`} |
| rowProps   | Attributes of rows in the data                               | [RowProps](https://ant-design.antgroup.com/components/grid#row) | {gutter:`[8, 8]`}     |
| colProps   | Column properties in the data                                | [ColProps](https://ant-design.antgroup.com/components/grid#col) | {span:`6`}            |
| onChange   | This function is called when value changes                   | (value:[Value](#value)[])=>void                                 | {span:`6`}            |

### Value

| Property | Description            | Type                 |
| -------- | ---------------------- | -------------------- |
| id       | id                     | `string`             |
| name     | name                   | `string`             |
| alphabet | Initial identification | `A` \| `B`... \| `Z` |
