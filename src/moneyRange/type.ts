/*
 * @Author: atwlee
 * @Date: 2024-05-24 07:18:12
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-24 22:44:18
 * @Description:
 * @FilePath: /antd-composite/src/moneyRange/type.ts
 */
export interface MoneyInputRangeProps {
  classNames?: string;
  placeholder?: string;
  styles?: React.CSSProperties;
  onChange?: ({ start, end }: { start?: number; end?: number }) => void;
  value?: {
    start?: number;
    end?: number;
  };
}
