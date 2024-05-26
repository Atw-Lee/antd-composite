"use strict";(self.webpackChunkantd_composite=self.webpackChunkantd_composite||[]).push([[1640],{69685:function(o,n,e){e.r(n),e.d(n,{demos:function(){return I}});var p=e(90228),d=e.n(p),m=e(87999),c=e.n(m),l=e(75271),I={"alphabetselect-demo-basic":{component:l.memo(l.lazy(function(){return e.e(9144).then(e.bind(e,37226))})),asset:{type:"BLOCK",id:"alphabetselect-demo-basic",refAtomIds:["AlphabetSelect"],dependencies:{"index.tsx":{type:"FILE",value:e(79842).Z},"antd-composite":{type:"NPM",value:"0.0.1"},mockjs:{type:"NPM",value:"1.1.0"},pinyin:{type:"NPM",value:"2.11.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Basic"},context:{"antd-composite":e(69106),mockjs:e(90674),pinyin:e(56939),react:e(75271)},renderOpts:{compile:function(){var r=c()(d()().mark(function u(){var t,s=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(2980).then(e.bind(e,92980));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},u)}));function i(){return r.apply(this,arguments)}return i}()}},"alphabetselect-demo-multiple":{component:l.memo(l.lazy(function(){return e.e(9144).then(e.bind(e,53823))})),asset:{type:"BLOCK",id:"alphabetselect-demo-multiple",refAtomIds:["AlphabetSelect"],dependencies:{"index.tsx":{type:"FILE",value:e(62918).Z},"antd-composite":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Multiple Selection"},context:{"antd-composite":e(69106),react:e(75271)},renderOpts:{compile:function(){var r=c()(d()().mark(function u(){var t,s=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(2980).then(e.bind(e,92980));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},u)}));function i(){return r.apply(this,arguments)}return i}()}}}},46215:function(o,n,e){e.r(n),e.d(n,{texts:function(){return p}});const p=[{value:"Alphabet selection control.",paraId:0,tocIndex:0},{value:"The selected data structure can be installed with letters A-Z for initial differentiation, such as city, currency, and so on.",paraId:1,tocIndex:1},{value:"extends Omit<",paraId:2,tocIndex:5},{value:"SelectProps",paraId:2,tocIndex:5},{value:", 'value' | 'onChange' | 'dropdownRender' | 'options' | 'fieldNames' | 'filterOption' |'filterSort' | 'optionFilterProp' | 'optionRender'>",paraId:2,tocIndex:5},{value:"Property",paraId:3,tocIndex:5},{value:"Description",paraId:3,tocIndex:5},{value:"Type",paraId:3,tocIndex:5},{value:"Default",paraId:3,tocIndex:5},{value:"data",paraId:3,tocIndex:5},{value:"Data source",paraId:3,tocIndex:5},{value:"Value",paraId:4,tocIndex:5},{value:"[]",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"value",paraId:3,tocIndex:5},{value:"The selected data, single and multiple selections are arrays",paraId:3,tocIndex:5},{value:"Value",paraId:5,tocIndex:5},{value:"[]",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"fieldNames",paraId:3,tocIndex:5},{value:"User-defined node id and name fields",paraId:3,tocIndex:5},{value:"object",paraId:3,tocIndex:5},{value:"{id:",paraId:3,tocIndex:5},{value:"id",paraId:3,tocIndex:5},{value:",name:",paraId:3,tocIndex:5},{value:"name",paraId:3,tocIndex:5},{value:"}",paraId:3,tocIndex:5},{value:"rowProps",paraId:3,tocIndex:5},{value:"Attributes of rows in the data",paraId:3,tocIndex:5},{value:"RowProps",paraId:3,tocIndex:5},{value:"{gutter:",paraId:3,tocIndex:5},{value:"[8, 8]",paraId:3,tocIndex:5},{value:"}",paraId:3,tocIndex:5},{value:"colProps",paraId:3,tocIndex:5},{value:"Column properties in the data",paraId:3,tocIndex:5},{value:"ColProps",paraId:3,tocIndex:5},{value:"{span:",paraId:3,tocIndex:5},{value:"6",paraId:3,tocIndex:5},{value:"}",paraId:3,tocIndex:5},{value:"onChange",paraId:3,tocIndex:5},{value:"This function is called when value changes",paraId:3,tocIndex:5},{value:"(value:",paraId:3,tocIndex:5},{value:"Value",paraId:6,tocIndex:5},{value:"[])=>void",paraId:3,tocIndex:5},{value:"{span:",paraId:3,tocIndex:5},{value:"6",paraId:3,tocIndex:5},{value:"}",paraId:3,tocIndex:5},{value:"Property",paraId:7,tocIndex:6},{value:"Description",paraId:7,tocIndex:6},{value:"Type",paraId:7,tocIndex:6},{value:"id",paraId:7,tocIndex:6},{value:"id",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"name",paraId:7,tocIndex:6},{value:"name",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"alphabet",paraId:7,tocIndex:6},{value:"Initial identification",paraId:7,tocIndex:6},{value:"A",paraId:7,tocIndex:6},{value:" | ",paraId:7,tocIndex:6},{value:"B",paraId:7,tocIndex:6},{value:"... | ",paraId:7,tocIndex:6},{value:"Z",paraId:7,tocIndex:6}]},79842:function(o,n){n.Z=`/*
 * @Author: atwlee
 * @Date: 2024-05-14 12:03:26
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-14 23:10:17
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
        .toUpperCase() as AlphabetKey; // \u83B7\u53D6\u57CE\u5E02\u540D\u7684\u9996\u5B57\u6BCD\u5E76\u8F6C\u6362\u4E3A\u5927\u5199
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
      placeholder="Please select"
      onChange={setValue}
    />
  );
}

export default Index;
`},62918:function(o,n){n.Z=`/*
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
    { id: 'USD', name: '\u7F8E\u5143', alphabet: 'U' },
    { id: 'EUR', name: '\u6B27\u5143', alphabet: 'E' },
    { id: 'GBP', name: '\u82F1\u9551', alphabet: 'G' },
    { id: 'JPY', name: '\u65E5\u5143', alphabet: 'J' },
    { id: 'CNY', name: '\u4EBA\u6C11\u5E01', alphabet: 'C' },
    { id: 'CAD', name: '\u52A0\u62FF\u5927\u5143', alphabet: 'C' },
    { id: 'AUD', name: '\u6FB3\u5927\u5229\u4E9A\u5143', alphabet: 'A' },
    { id: 'CHF', name: '\u745E\u58EB\u6CD5\u90CE', alphabet: 'C' },
    { id: 'HKD', name: '\u6E2F\u5E01', alphabet: 'H' },
    { id: 'SGD', name: '\u65B0\u52A0\u5761\u5143', alphabet: 'S' },
    { id: 'KRW', name: '\u97E9\u5143', alphabet: 'K' },
    { id: 'INR', name: '\u5370\u5EA6\u5362\u6BD4', alphabet: 'I' },
    { id: 'BRL', name: '\u5DF4\u897F\u96F7\u4E9A\u5C14', alphabet: 'B' },
    { id: 'MXN', name: '\u58A8\u897F\u54E5\u6BD4\u7D22', alphabet: 'M' },
    { id: 'ZAR', name: '\u5357\u975E\u5170\u7279', alphabet: 'Z' },
    { id: 'RUB', name: '\u4FC4\u7F57\u65AF\u5362\u5E03', alphabet: 'R' },
    { id: 'TRY', name: '\u571F\u8033\u5176\u91CC\u62C9', alphabet: 'T' },
    { id: 'SEK', name: '\u745E\u5178\u514B\u6717', alphabet: 'S' },
    { id: 'NZD', name: '\u65B0\u897F\u5170\u5143', alphabet: 'N' },
    { id: 'THB', name: '\u6CF0\u94E2', alphabet: 'T' },
    { id: 'NOK', name: '\u632A\u5A01\u514B\u6717', alphabet: 'N' },
    { id: 'DKK', name: '\u4E39\u9EA6\u514B\u6717', alphabet: 'D' },
    { id: 'PLN', name: '\u6CE2\u5170\u5179\u7F57\u63D0', alphabet: 'P' },
    { id: 'CZK', name: '\u6377\u514B\u514B\u6717', alphabet: 'C' },
    { id: 'HUF', name: '\u5308\u7259\u5229\u798F\u6797', alphabet: 'H' },
    { id: 'ILS', name: '\u4EE5\u8272\u5217\u65B0\u8C22\u514B\u5C14', alphabet: 'I' },
    { id: 'CLP', name: '\u667A\u5229\u6BD4\u7D22', alphabet: 'C' },
    { id: 'PHP', name: '\u83F2\u5F8B\u5BBE\u6BD4\u7D22', alphabet: 'P' },
    { id: 'IDR', name: '\u5370\u5C3C\u76FE', alphabet: 'I' },
    { id: 'TWD', name: '\u65B0\u53F0\u5E01', alphabet: 'T' },
  ]);

  const [value, setValue] = useState<Value[]>();

  return (
    <AlphabetSelect
      value={value}
      style={{ width: 300 }}
      data={data.sort((a, b) => a.alphabet.localeCompare(b.alphabet))}
      placeholder="Please select"
      onChange={setValue}
      mode="multiple"
    />
  );
}

export default Index;
`}}]);
