/*
 * @Author: atwlee
 * @Date: 2024-05-14 12:03:26
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-14 15:01:09
 * @Description:
 * @FilePath: /antd-composite/src/AlphabetSelect/demo/basic.tsx
 */
import { AlphabetSelect } from 'antd-composite';
import type { AlphabetKey, Value } from 'antd-composite/AlphabetSelect/type';
import Mock from 'mockjs';
import pinyin from 'pinyin';
import React, { useEffect, useState } from 'react';
function Index() {
  const [data, setData] = useState<Value[]>([]);

  useEffect(() => {
    const cities = [];
    for (let i = 0; i < 500; i++) {
      const city = Mock.mock('@city');
      const key = pinyin(city, {
        style: pinyin.STYLE_FIRST_LETTER,
      })[0][0]
        .charAt(0)
        .toUpperCase() as AlphabetKey; // 获取城市名的首字母并转换为大写
      cities.push({
        id: Mock.Random.guid(),
        name: city,
        alphabet: key,
      });
    }
    setData(cities.sort((a, b) => a.alphabet.localeCompare(b.alphabet)));
  }, []);
  const [value, setValue] = useState<Value[]>();

  return (
    <AlphabetSelect
      value={value}
      style={{ width: 300 }}
      data={data}
      placeholder="请选择"
      onChange={setValue}
    />
  );
}

export default Index;
