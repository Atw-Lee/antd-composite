/*
 * @Author: atwlee
 * @Date: 2023-09-25 09:59:51
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-22 22:43:14
 * @Description: iv
 * @FilePath: /antd-composite/src/SortableTransfer/demo/basic.tsx
 */
import { SortableTransfer } from 'antd-composite';
import Mock from 'mockjs';

import React from 'react';

const data = Mock.mock({
  'items|100': [
    {
      'id|+1': 1,
      name: '@name',
    },
  ],
}).items;
function Index() {
  return (
    <SortableTransfer
      dataSource={data}
      onChange={(data) => {
        console.log('onChange', data);
      }}
    />
  );
}

export default Index;
