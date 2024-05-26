/*
 * @Author: atwlee
 * @Date: 2023-09-25 09:59:51
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-26 22:18:37
 * @Description:
 * @FilePath: /antd-composite/src/inputRange/demo/basic.tsx
 */
import { InputRange } from 'antd-composite';
import React from 'react';

function Index() {
  return (
    <InputRange
      placeholder="Please enter the amount range"
      onChange={(value) => console.log(value)}
      styles={{ width: '60%' }}
    />
  );
}

export default Index;
