"use strict";(self.webpackChunkantd_composite=self.webpackChunkantd_composite||[]).push([[9410],{67560:function(r,t,e){e.r(t),e.d(t,{demos:function(){return p}});var l=e(90228),o=e.n(l),i=e(87999),I=e.n(i),d=e(75271),p={"sortabletransfer-demo-basic":{component:d.memo(d.lazy(function(){return e.e(6170).then(e.bind(e,48382))})),asset:{type:"BLOCK",id:"sortabletransfer-demo-basic",refAtomIds:["SortableTransfer"],dependencies:{"index.tsx":{type:"FILE",value:e(18111).Z},"antd-composite":{type:"NPM",value:"0.0.1"},mockjs:{type:"NPM",value:"1.1.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Basic"},context:{"antd-composite":e(69106),mockjs:e(90674),react:e(75271)},renderOpts:{compile:function(){var s=I()(o()().mark(function u(){var n,m=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(2980).then(e.bind(e,92980));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,m));case 3:case"end":return a.stop()}},u)}));function c(){return s.apply(this,arguments)}return c}()}},"sortabletransfer-demo-resizable":{component:d.memo(d.lazy(function(){return e.e(6170).then(e.bind(e,97114))})),asset:{type:"BLOCK",id:"sortabletransfer-demo-resizable",refAtomIds:["SortableTransfer"],dependencies:{"index.tsx":{type:"FILE",value:e(80969).Z},"antd-composite":{type:"NPM",value:"0.0.1"},mockjs:{type:"NPM",value:"1.1.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Resizable"},context:{"antd-composite":e(69106),mockjs:e(90674),react:e(75271)},renderOpts:{compile:function(){var s=I()(o()().mark(function u(){var n,m=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(2980).then(e.bind(e,92980));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,m));case 3:case"end":return a.stop()}},u)}));function c(){return s.apply(this,arguments)}return c}()}}}},6514:function(r,t,e){e.r(t),e.d(t,{texts:function(){return l}});const l=[{value:"Double column transfer choice box can be sorted.",paraId:0,tocIndex:0},{value:"It is a select control essentially which can be use for selecting multiple items.",paraId:1,tocIndex:1},{value:"Transfer can display more information for items and take up more space.",paraId:1,tocIndex:1},{value:"When the selected data needs to be reordered.",paraId:1,tocIndex:1},{value:"Property",paraId:2,tocIndex:5},{value:"Description",paraId:2,tocIndex:5},{value:"Type",paraId:2,tocIndex:5},{value:"Default",paraId:2,tocIndex:5},{value:"width",paraId:2,tocIndex:5},{value:"Component width",paraId:2,tocIndex:5},{value:"number",paraId:2,tocIndex:5},{value:"700",paraId:2,tocIndex:5},{value:"height",paraId:2,tocIndex:5},{value:"Component height",paraId:2,tocIndex:5},{value:"number",paraId:2,tocIndex:5},{value:"375",paraId:2,tocIndex:5},{value:"transferWidth",paraId:2,tocIndex:5},{value:"Box width",paraId:2,tocIndex:5},{value:"number",paraId:2,tocIndex:5},{value:"340",paraId:2,tocIndex:5},{value:"allowResizable",paraId:2,tocIndex:5},{value:"Allow dragging the left and right boxes",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"false",paraId:2,tocIndex:5},{value:"dataSource",paraId:2,tocIndex:5},{value:"dataSource",paraId:2,tocIndex:5},{value:"T[]",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"fieldNames",paraId:2,tocIndex:5},{value:"User-defined node id and name fields",paraId:2,tocIndex:5},{value:"object",paraId:2,tocIndex:5},{value:"{id:",paraId:2,tocIndex:5},{value:"id",paraId:2,tocIndex:5},{value:",name:",paraId:2,tocIndex:5},{value:"name",paraId:2,tocIndex:5},{value:"}",paraId:2,tocIndex:5},{value:"sourceHeaderLeft",paraId:2,tocIndex:5},{value:"Customize the source data Header-Left section",paraId:2,tocIndex:5},{value:"( numerator: number,denominator: number) => React.ReactNode",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"sourceHeaderRight",paraId:2,tocIndex:5},{value:"Customize the source data Header-Right section",paraId:2,tocIndex:5},{value:"React.ReactNode",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"targetHeaderLeft",paraId:2,tocIndex:5},{value:"Customize the target data Header-Left section",paraId:2,tocIndex:5},{value:"(selected: number) => React.ReactNode",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"targetHeaderRight",paraId:2,tocIndex:5},{value:"Customize the target data Header-Right section",paraId:2,tocIndex:5},{value:"React.ReactNode",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"value",paraId:2,tocIndex:5},{value:"T[]",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"onChange",paraId:2,tocIndex:5},{value:"This method is called when the target data changes",paraId:2,tocIndex:5},{value:"(data: T[]) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},18111:function(r,t){t.Z=`/*
 * @Author: atwlee
 * @Date: 2023-09-25 09:59:51
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-26 22:18:24
 * @Description:
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
`},80969:function(r,t){t.Z=`/*
 * @Author: atwlee
 * @Date: 2023-09-25 09:59:51
 * @LastEditors: atwlee
 * @LastEditTime: 2024-05-26 22:18:19
 * @Description:
 * @FilePath: /antd-composite/src/SortableTransfer/demo/resizable.tsx
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
  return <SortableTransfer dataSource={data} allowResizable />;
}

export default Index;
`}}]);
