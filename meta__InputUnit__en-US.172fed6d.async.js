"use strict";(self.webpackChunkantd_composite=self.webpackChunkantd_composite||[]).push([[3758],{39666:function(o,n,e){e.r(n),e.d(n,{demos:function(){return p}});var t=e(90228),d=e.n(t),r=e(87999),s=e.n(r),l=e(75271),p={"inputunit-demo-basic":{component:l.memo(l.lazy(function(){return e.e(4078).then(e.bind(e,67228))})),asset:{type:"BLOCK",id:"inputunit-demo-basic",refAtomIds:["InputUnit"],dependencies:{"index.tsx":{type:"FILE",value:e(73681).Z},"antd-composite":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Basic"},context:{"antd-composite":e(14615),react:e(75271)},renderOpts:{compile:function(){var I=s()(d()().mark(function i(){var u,v=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(2980).then(e.bind(e,92980));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,v));case 3:case"end":return a.stop()}},i)}));function c(){return I.apply(this,arguments)}return c}()}}}},57106:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"There is an input field for unit selection.",paraId:0,tocIndex:0},{value:"Input data with units, such as degrees/hours/seconds. m/km/h",paraId:1,tocIndex:1},{value:"extends Omit<",paraId:2,tocIndex:4},{value:"InputProps",paraId:2,tocIndex:4},{value:", 'value' | 'onChange' | 'addonAfter'>",paraId:2,tocIndex:4},{value:"Property",paraId:3,tocIndex:4},{value:"Description",paraId:3,tocIndex:4},{value:"Type",paraId:3,tocIndex:4},{value:"Default",paraId:3,tocIndex:4},{value:"options",paraId:3,tocIndex:4},{value:"Unit selector dataflow configuration option content",paraId:3,tocIndex:4},{value:"{ label, value }[]",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"unitProps",paraId:3,tocIndex:4},{value:"Unit pull-down selector Props",paraId:3,tocIndex:4},{value:"Omit<",paraId:3,tocIndex:4},{value:"SelectProps",paraId:3,tocIndex:4},{value:", 'value' | 'onChange' | 'options'>",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"Selected data",paraId:3,tocIndex:4},{value:"Value",paraId:4,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:"This function is called when value changes",paraId:3,tocIndex:4},{value:"(value:",paraId:3,tocIndex:4},{value:"Value",paraId:5,tocIndex:4},{value:")=>void",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"Property",paraId:6,tocIndex:5},{value:"Description",paraId:6,tocIndex:5},{value:"Type",paraId:6,tocIndex:5},{value:"input",paraId:6,tocIndex:5},{value:"Input value",paraId:6,tocIndex:5},{value:"string",paraId:6,tocIndex:5},{value:"unit",paraId:6,tocIndex:5},{value:"Selector value",paraId:6,tocIndex:5},{value:"string",paraId:6,tocIndex:5}]},73681:function(o,n){n.Z=`/*
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
