---
nav:
  title: Components
group:
  title: Transfer
  order: 100
---

# SortableTransfer

Double column transfer choice box can be sorted.

## When To Use

- It is a select control essentially which can be use for selecting multiple items.
- Transfer can display more information for items and take up more space.
- When the selected data needs to be reordered.

## Examples

<code src='./demo/basic.tsx' title='Basic'></code>

<code src='./demo/resizable.tsx' title='Resizable'></code>

## API

| Property          | Description                                        | Type                                                          | Default               |
| ----------------- | -------------------------------------------------- | ------------------------------------------------------------- | --------------------- |
| width             | Component width                                    | `number`                                                      | `700`                 |
| height            | Component height                                   | `number`                                                      | `375`                 |
| transferWidth     | Box width                                          | `number`                                                      | `340`                 |
| allowResizable    | Allow dragging the left and right boxes            | `boolean`                                                     | `false`               |
| dataSource        | dataSource                                         | `T[]`                                                         | -                     |
| fieldNames        | User-defined node id and name fields               | `object`                                                      | {id:`id`,name:`name`} |
| sourceHeaderLeft  | Customize the source data Header-Left section      | `( numerator: number,denominator: number) => React.ReactNode` | -                     |
| sourceHeaderRight | Customize the source data Header-Right section     | `React.ReactNode`                                             | -                     |
| targetHeaderLeft  | Customize the target data Header-Left section      | `(selected: number) => React.ReactNode`                       | -                     |
| targetHeaderRight | Customize the target data Header-Right section     | `React.ReactNode`                                             | -                     |
| value             | value                                              | `T[]`                                                         | -                     |
| onChange          | This method is called when the target data changes | `(data: T[]) => void`                                         | -                     |
