/*
 * @Author: atwlee
 * @Date: 2024-05-17 23:54:38
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-19 18:27:00
 * @Description:
 * @FilePath: /antd-composite/src/InputUnit/index.tsx
 */
import { Input, Select } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react';
import type { InputUnitProps, Value } from './type';
function Index(props: InputUnitProps) {
  const { options, unitProps, onChange, ...restProps } = props;

  const [value, setValue] = useState<Value>({
    value: '',
    unit: options?.[0].value?.toString() ?? '',
  });

  const addonAfter = (
    <Select
      defaultValue={options?.[0].value}
      popupMatchSelectWidth={false}
      {...unitProps}
      options={options}
      value={value.unit}
      onChange={(unit) => {
        setValue({
          ...value,
          unit,
        });
        onChange?.({
          ...value,
          unit,
        });
      }}
    />
  );
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue({
      ...value,
      value: event.target.value,
    });
    onChange?.({
      ...value,
      value: event.target.value,
    });
  }

  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  return (
    <Input
      {...restProps}
      addonAfter={addonAfter}
      value={value?.value}
      onChange={handleChange}
    />
  );
}

export default Index;
