/*
 * @Author: atwlee
 * @Date: 2023-10-13 16:15:56
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-24 22:44:30
 * @Description:
 * @FilePath: /antd-composite/src/moneyRange/index.tsx
 */
import { Input, InputNumber, Space } from 'antd';
import React, { useEffect } from 'react';
import type { MoneyInputRangeProps } from './type';

function MoneyInputRange(props: MoneyInputRangeProps) {
  const { placeholder, classNames, onChange, styles } = props;

  const [value, setValue] = React.useState<MoneyInputRangeProps['value']>();

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <Space.Compact className={classNames} style={styles}>
      <InputNumber
        placeholder={placeholder}
        value={value?.start}
        onChange={(e) => {
          setValue((prev) => ({ ...prev, start: e ?? undefined }));
          onChange?.({ start: e ?? undefined, end: value?.end });
        }}
        style={{ width: '100%' }}
        controls={false}
      />
      <Input
        placeholder="~"
        disabled
        style={{ maxWidth: '30px', flexShrink: 0, cursor: 'default' }}
      />
      <InputNumber
        placeholder={placeholder}
        value={value?.end}
        onChange={(e) => {
          setValue((prev) => ({ ...prev, end: e ?? undefined }));
          onChange?.({ start: value?.start, end: e ?? undefined });
        }}
        style={{ width: '100%' }}
        controls={false}
      />
    </Space.Compact>
  );
}

export default MoneyInputRange;
