"use strict";(self.webpackChunkantd_composite=self.webpackChunkantd_composite||[]).push([[4610],{93613:function(o,a,e){e.r(a),e.d(a,{demos:function(){return c}});var t=e(90228),d=e.n(t),u=e(87999),s=e.n(u),r=e(75271),c={"moneyrange-demo-basic":{component:r.memo(r.lazy(function(){return e.e(3545).then(e.bind(e,67388))})),asset:{type:"BLOCK",id:"moneyrange-demo-basic",refAtomIds:["moneyRange"],dependencies:{"index.tsx":{type:"FILE",value:e(43245).Z},"antd-composite":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Basic"},context:{"antd-composite":e(14615),react:e(75271)},renderOpts:{compile:function(){var I=s()(d()().mark(function m(){var l,i=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2980).then(e.bind(e,92980));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,i));case 3:case"end":return n.stop()}},m)}));function p(){return I.apply(this,arguments)}return p}()}}}},66237:function(o,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"Enter the input box for the amount range.",paraId:0,tocIndex:0},{value:"When you need to enter a range of amounts, or other scenarios where starting values are required.",paraId:1,tocIndex:1},{value:"Property",paraId:2,tocIndex:4},{value:"Description",paraId:2,tocIndex:4},{value:"Type",paraId:2,tocIndex:4},{value:"Default",paraId:2,tocIndex:4},{value:"classNames",paraId:2,tocIndex:4},{value:"Semantic DOM class",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"styles",paraId:2,tocIndex:4},{value:"Semantic DOM style",paraId:2,tocIndex:4},{value:"CSSProperties",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"placeholder",paraId:2,tocIndex:4},{value:"Placeholder of MoneyRange",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"value",paraId:2,tocIndex:4},{value:"value",paraId:2,tocIndex:4},{value:"Value",paraId:3,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"onChange",paraId:2,tocIndex:4},{value:"This function is called when value changes",paraId:2,tocIndex:4},{value:"(value:",paraId:2,tocIndex:4},{value:"Value",paraId:4,tocIndex:4},{value:")=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"Property",paraId:5,tocIndex:5},{value:"Description",paraId:5,tocIndex:5},{value:"Type",paraId:5,tocIndex:5},{value:"start",paraId:5,tocIndex:5},{value:"start value",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"end",paraId:5,tocIndex:5},{value:"end value",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5}]},43245:function(o,a){a.Z=`/*
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
`}}]);
