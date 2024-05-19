/*
 * @Author: atwlee
 * @Date: 2024-05-17 23:55:34
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-19 17:07:45
 * @Description:
 * @FilePath: /antd-composite/src/InputUnit/type.ts
 */
import type { InputProps, SelectProps } from 'antd';

export interface Value {
  value: string;
  unit: string;
}

export interface InputUnitProps
  extends Omit<InputProps, 'value' | 'onChange' | 'addonAfter'> {
  value?: Value;
  onChange?: (value: Value) => void;
  options: SelectProps['options'];
  unitProps?: Omit<SelectProps, 'value' | 'onChange' | 'options'>;
}
