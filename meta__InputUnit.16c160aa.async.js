"use strict";(self.webpackChunkantd_composite=self.webpackChunkantd_composite||[]).push([[666],{99383:function(o,n,e){e.r(n),e.d(n,{demos:function(){return p}});var t=e(90228),d=e.n(t),r=e(87999),I=e.n(r),u=e(75271),p={"inputunit-demo-basic":{component:u.memo(u.lazy(function(){return e.e(4078).then(e.bind(e,67228))})),asset:{type:"BLOCK",id:"inputunit-demo-basic",refAtomIds:["InputUnit"],dependencies:{"index.tsx":{type:"FILE",value:e(73681).Z},"antd-composite":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:{"antd-composite":e(69106),react:e(75271)},renderOpts:{compile:function(){var s=I()(d()().mark(function m(){var l,i=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(2980).then(e.bind(e,92980));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,i));case 3:case"end":return a.stop()}},m)}));function c(){return s.apply(this,arguments)}return c}()}}}},4854:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u6709\u5355\u4F4D\u9009\u62E9\u7684\u8F93\u5165\u6846.",paraId:0,tocIndex:0},{value:"\u8F93\u5165\u7684\u6570\u636E\u5E26\u6709\u5355\u4F4D\uFF0C\u5982\u6B21/\u65F6\u5206\u79D2\u3002m/km/h",paraId:1,tocIndex:1},{value:"extends Omit<",paraId:2,tocIndex:4},{value:"InputProps",paraId:2,tocIndex:4},{value:", 'value' | 'onChange' | 'addonAfter'>",paraId:2,tocIndex:4},{value:"\u53C2\u6570",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:4},{value:"options",paraId:3,tocIndex:4},{value:"\u5355\u4F4D\u4E0B\u62C9\u9009\u62E9\u5668\u6570\u636E\u5316\u914D\u7F6E\u9009\u9879\u5185\u5BB9",paraId:3,tocIndex:4},{value:"{ label, value }[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"unitProps",paraId:3,tocIndex:4},{value:"\u5355\u4F4D\u4E0B\u62C9\u9009\u62E9\u5668Props",paraId:3,tocIndex:4},{value:"Omit<",paraId:3,tocIndex:4},{value:"SelectProps",paraId:3,tocIndex:4},{value:", 'value' | 'onChange' | 'options'>",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\u9009\u62E9\u7684\u6570\u636E",paraId:3,tocIndex:4},{value:"Value",paraId:4,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:"value \u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570",paraId:3,tocIndex:4},{value:"(value:",paraId:3,tocIndex:4},{value:"Value",paraId:5,tocIndex:4},{value:")=>void",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"\u53C2\u6570",paraId:6,tocIndex:5},{value:"\u8BF4\u660E",paraId:6,tocIndex:5},{value:"\u7C7B\u578B",paraId:6,tocIndex:5},{value:"input",paraId:6,tocIndex:5},{value:"\u8F93\u5165\u6846value",paraId:6,tocIndex:5},{value:"string",paraId:6,tocIndex:5},{value:"unit",paraId:6,tocIndex:5},{value:"\u5355\u4F4D\u4E0B\u62C9\u9009\u62E9\u5668value",paraId:6,tocIndex:5},{value:"string",paraId:6,tocIndex:5}]},73681:function(o,n){n.Z=`/*
 * @Author: atwlee
 * @Date: 2024-05-14 12:03:26
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-21 22:11:31
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
`}}]);
