/*
 * @Author: atwlee
 * @Date: 2024-05-13 10:14:15
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-13 11:12:31
 * @Description:
 * @FilePath: /antd-composite/src/AlphabetSelect/components/RadioGroup.tsx
 */
import type { RadioGroupProps } from 'antd';
import { Radio } from 'antd';
import React, { useMemo } from 'react';

export type RadioGroupValue = 'ABCDE' | 'FGHIJ' | 'KLMNO' | 'PQRST' | 'UVWXYZ';

function Index(props: RadioGroupProps) {
  const options = useMemo<{ label: RadioGroupValue; value: RadioGroupValue }[]>(
    () => [
      { label: 'ABCDE', value: 'ABCDE' },
      { label: 'FGHIJ', value: 'FGHIJ' },
      { label: 'KLMNO', value: 'KLMNO' },
      { label: 'PQRST', value: 'PQRST' },
      { label: 'UVWXYZ', value: 'UVWXYZ' },
    ],
    [],
  );

  return (
    <Radio.Group
      {...props}
      options={options}
      optionType="button"
      buttonStyle="solid"
    />
  );
}

export default Index;
