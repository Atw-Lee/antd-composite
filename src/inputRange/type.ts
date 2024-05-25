/*
 * @Author: atwlee
 * @Date: 2024-05-24 07:18:12
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-25 23:41:03
 * @Description:
 * @FilePath: /antd-composite/src/inputRange/type.ts
 */
export interface InputRangeProps {
  classNames?: string;
  placeholder?: string;
  styles?: React.CSSProperties;
  onChange?: ({ start, end }: { start?: number; end?: number }) => void;
  value?: {
    start?: number;
    end?: number;
  };
}
