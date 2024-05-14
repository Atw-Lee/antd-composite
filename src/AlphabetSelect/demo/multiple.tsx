/*
 * @Author: atwlee
 * @Date: 2024-05-14 12:03:26
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-14 15:18:30
 * @Description:
 * @FilePath: /antd-composite/src/AlphabetSelect/demo/multiple.tsx
 */
import { AlphabetSelect } from 'antd-composite';
import type { Value } from 'antd-composite/AlphabetSelect/type';
import React, { useState } from 'react';
function Index() {
  const [data] = useState<Value[]>([
    { id: 'USD', name: '美元', alphabet: 'U' },
    { id: 'EUR', name: '欧元', alphabet: 'E' },
    { id: 'GBP', name: '英镑', alphabet: 'G' },
    { id: 'JPY', name: '日元', alphabet: 'J' },
    { id: 'CNY', name: '人民币', alphabet: 'C' },
    { id: 'CAD', name: '加拿大元', alphabet: 'C' },
    { id: 'AUD', name: '澳大利亚元', alphabet: 'A' },
    { id: 'CHF', name: '瑞士法郎', alphabet: 'C' },
    { id: 'HKD', name: '港币', alphabet: 'H' },
    { id: 'SGD', name: '新加坡元', alphabet: 'S' },
    { id: 'KRW', name: '韩元', alphabet: 'K' },
    { id: 'INR', name: '印度卢比', alphabet: 'I' },
    { id: 'BRL', name: '巴西雷亚尔', alphabet: 'B' },
    { id: 'MXN', name: '墨西哥比索', alphabet: 'M' },
    { id: 'ZAR', name: '南非兰特', alphabet: 'Z' },
    { id: 'RUB', name: '俄罗斯卢布', alphabet: 'R' },
    { id: 'TRY', name: '土耳其里拉', alphabet: 'T' },
    { id: 'SEK', name: '瑞典克朗', alphabet: 'S' },
    { id: 'NZD', name: '新西兰元', alphabet: 'N' },
    { id: 'THB', name: '泰铢', alphabet: 'T' },
    { id: 'NOK', name: '挪威克朗', alphabet: 'N' },
    { id: 'DKK', name: '丹麦克朗', alphabet: 'D' },
    { id: 'PLN', name: '波兰兹罗提', alphabet: 'P' },
    { id: 'CZK', name: '捷克克朗', alphabet: 'C' },
    { id: 'HUF', name: '匈牙利福林', alphabet: 'H' },
    { id: 'ILS', name: '以色列新谢克尔', alphabet: 'I' },
    { id: 'CLP', name: '智利比索', alphabet: 'C' },
    { id: 'PHP', name: '菲律宾比索', alphabet: 'P' },
    { id: 'IDR', name: '印尼盾', alphabet: 'I' },
    { id: 'TWD', name: '新台币', alphabet: 'T' },
  ]);

  const [value, setValue] = useState<Value[]>();

  return (
    <AlphabetSelect
      value={value}
      style={{ width: 300 }}
      data={data.sort((a, b) => a.alphabet.localeCompare(b.alphabet))}
      placeholder="请选择"
      onChange={setValue}
      mode="multiple"
    />
  );
}

export default Index;
