---
nav:
  title: Components
group:
  title: Input
---

# InputRange

Input field for the input range.

## When To Use

Scenarios where starting values need to be entered, such as range of amounts, maximum and minimum values.

## Examples

<code src='./demo/basic.tsx' title='Basic'></code>

## API

| Property    | Description                                | Type                          | Default |
| ----------- | ------------------------------------------ | ----------------------------- | ------- |
| classNames  | Semantic DOM class                         | `string`                      | -       |
| styles      | Semantic DOM style                         | `CSSProperties`               | -       |
| placeholder | Placeholder of MoneyRange                  | `string`                      | -       |
| value       | value                                      | [Value](#value)               | -       |
| onChange    | This function is called when value changes | (value:[Value](#value))=>void | -       |

### Value

| Property | Description | Type     |
| -------- | ----------- | -------- |
| start    | start value | `number` |
| end      | end value   | `number` |
