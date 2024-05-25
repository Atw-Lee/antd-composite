/*
 * @Author: atwlee
 * @Date: 2024-05-13 10:09:20
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-24 23:16:32
 * @Description:
 * @FilePath: /antd-composite/src/AlphabetSelect/type.ts
 */
import type { ColProps, RowProps, SelectProps } from 'antd';

export type AlphabetKey =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';

export interface Value {
  id?: string;
  name?: string;
  alphabet: AlphabetKey;
  [key: string]: any;
}

export interface AlphabetSelectProps
  extends Omit<
    SelectProps,
    | 'value'
    | 'onChange'
    | 'dropdownRender'
    | 'options'
    | 'fieldNames'
    | 'filterOption'
    | 'filterSort'
    | 'optionFilterProp'
    | 'optionRender'
  > {
  value?: Value[];
  onChange?: (value: Value[]) => void;
  data?: Value[];
  fieldNames?: {
    id: string;
    name: string;
  };
  rowProps?: RowProps;
  colProps?: ColProps;
}
