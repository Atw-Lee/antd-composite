"use strict";(self.webpackChunkantd_composite=self.webpackChunkantd_composite||[]).push([[6471],{17473:function(o,a,e){e.r(a),e.d(a,{demos:function(){return p}});var t=e(90228),d=e.n(t),l=e(87999),s=e.n(l),r=e(75271),p={"inputrange-demo-basic":{component:r.memo(r.lazy(function(){return e.e(8120).then(e.bind(e,55493))})),asset:{type:"BLOCK",id:"inputrange-demo-basic",refAtomIds:["inputRange"],dependencies:{"index.tsx":{type:"FILE",value:e(30371).Z},"antd-composite":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Basic"},context:{"antd-composite":e(69106),react:e(75271)},renderOpts:{compile:function(){var c=s()(d()().mark(function m(){var u,i=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(2980).then(e.bind(e,92980));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,i));case 3:case"end":return n.stop()}},m)}));function I(){return c.apply(this,arguments)}return I}()}}}},67794:function(o,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"Input field for the input range.",paraId:0,tocIndex:0},{value:"Scenarios where starting values need to be entered, such as range of amounts, maximum and minimum values.",paraId:1,tocIndex:1},{value:"Property",paraId:2,tocIndex:4},{value:"Description",paraId:2,tocIndex:4},{value:"Type",paraId:2,tocIndex:4},{value:"Default",paraId:2,tocIndex:4},{value:"classNames",paraId:2,tocIndex:4},{value:"Semantic DOM class",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"styles",paraId:2,tocIndex:4},{value:"Semantic DOM style",paraId:2,tocIndex:4},{value:"CSSProperties",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"placeholder",paraId:2,tocIndex:4},{value:"Placeholder of MoneyRange",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"value",paraId:2,tocIndex:4},{value:"value",paraId:2,tocIndex:4},{value:"Value",paraId:3,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"onChange",paraId:2,tocIndex:4},{value:"This function is called when value changes",paraId:2,tocIndex:4},{value:"(value:",paraId:2,tocIndex:4},{value:"Value",paraId:4,tocIndex:4},{value:")=>void",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"Property",paraId:5,tocIndex:5},{value:"Description",paraId:5,tocIndex:5},{value:"Type",paraId:5,tocIndex:5},{value:"start",paraId:5,tocIndex:5},{value:"start value",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"end",paraId:5,tocIndex:5},{value:"end value",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5}]},30371:function(o,a){a.Z=`/*
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
`}}]);
