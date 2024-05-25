/*
 * @Author: atwlee
 * @Date: 2023-09-25 09:59:51
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-24 23:22:19
 * @Description: iv
 * @FilePath: /antd-composite/src/moneyRange/demo/basic.tsx
 */
import { MoneyRange } from 'antd-composite';
import React from 'react';

function Index() {
  return (
    <MoneyRange
      placeholder="Please enter the amount range"
      onChange={(value) => console.log(value)}
      styles={{ width: '60%' }}
    />
  );
}

export default Index;
