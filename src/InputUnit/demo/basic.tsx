/*
 * @Author: atwlee
 * @Date: 2024-05-14 12:03:26
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-19 18:23:04
 * @Description:
 * @FilePath: /antd-composite/src/InputUnit/demo/basic.tsx
 */
import { InputUnit } from 'antd-composite';
import React from 'react';
function Index() {
  return (
    <InputUnit
      options={[
        {
          label: 'M/S',
          value: 'M/S',
        },
        {
          label: 'KM/H',
          value: 'KM/H',
        },
      ]}
      placeholder="Please enter refresh time"
      onChange={(value) => {
        console.log(value);
      }}
    />
  );
}

export default Index;
