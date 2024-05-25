"use strict";(self.webpackChunkantd_composite=self.webpackChunkantd_composite||[]).push([[679],{82451:function(a,e,n){n.r(e),n.d(e,{demos:function(){return u}});var o=n(90228),s=n.n(o),m=n(87999),l=n.n(m),r=n(75271),u={"sortabletransfer-demo-basic":{component:r.memo(r.lazy(function(){return n.e(6170).then(n.bind(n,48382))})),asset:{type:"BLOCK",id:"sortabletransfer-demo-basic",refAtomIds:["SortableTransfer"],dependencies:{"index.tsx":{type:"FILE",value:n(18111).Z},"antd-composite":{type:"NPM",value:"0.0.1"},mockjs:{type:"NPM",value:"1.1.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:{"antd-composite":n(14615),mockjs:n(90674),react:n(75271)},renderOpts:{compile:function(){var i=l()(s()().mark(function _(){var d,p=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(2980).then(n.bind(n,92980));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,p));case 3:case"end":return t.stop()}},_)}));function c(){return i.apply(this,arguments)}return c}()}}}},84547:function(a,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"\u53EF\u4EE5\u6392\u5E8F\u7684\u7A7F\u68AD\u6846.",paraId:0,tocIndex:0},{value:"\u9700\u8981\u5728\u591A\u4E2A\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u65F6\u3002",paraId:1,tocIndex:1},{value:"\u6BD4\u8D77 Select \u548C TreeSelect\uFF0C\u7A7F\u68AD\u6846\u5360\u636E\u66F4\u5927\u7684\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5C55\u793A\u53EF\u9009\u9879\u7684\u66F4\u591A\u4FE1\u606F\u3002",paraId:1,tocIndex:1},{value:"\u9700\u8981\u5BF9\u9009\u62E9\u7684\u6570\u636E\u8FDB\u884C\u91CD\u65B0\u6392\u5E8F\u65F6\u3002",paraId:1,tocIndex:1}]},18111:function(a,e){e.Z=`/*
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
`}}]);
