"use strict";(self.webpackChunkantd_composite=self.webpackChunkantd_composite||[]).push([[9144],{37226:function(O,e,a){a.r(e);var o=a(48305),t=a.n(o),i=a(14615),l=a(90674),n=a.n(l),p=a(56939),d=a.n(p),_=a(75271),u=a(52676);function h(){var s=(0,_.useState)([]),m=t()(s,2),E=m[0],r=m[1];(0,_.useEffect)(function(){for(var P=[],C=0;C<500;C++){var M=n().mock("@city"),c=d()(M,{style:d().STYLE_FIRST_LETTER})[0][0].charAt(0).toUpperCase();P.push({id:n().Random.guid(),name:M,alphabet:c})}r(P.sort(function(v,R){return v.alphabet.localeCompare(R.alphabet)}))},[]);var b=(0,_.useState)(),D=t()(b,2),T=D[0],I=D[1];return(0,u.jsx)(i.AlphabetSelect,{value:T,style:{width:300},data:E,placeholder:"Please select",onChange:I})}e.default=h},53823:function(O,e,a){a.r(e);var o=a(48305),t=a.n(o),i=a(14615),l=a(75271),n=a(52676);function p(){var d=(0,l.useState)([{id:"USD",name:"\u7F8E\u5143",alphabet:"U"},{id:"EUR",name:"\u6B27\u5143",alphabet:"E"},{id:"GBP",name:"\u82F1\u9551",alphabet:"G"},{id:"JPY",name:"\u65E5\u5143",alphabet:"J"},{id:"CNY",name:"\u4EBA\u6C11\u5E01",alphabet:"C"},{id:"CAD",name:"\u52A0\u62FF\u5927\u5143",alphabet:"C"},{id:"AUD",name:"\u6FB3\u5927\u5229\u4E9A\u5143",alphabet:"A"},{id:"CHF",name:"\u745E\u58EB\u6CD5\u90CE",alphabet:"C"},{id:"HKD",name:"\u6E2F\u5E01",alphabet:"H"},{id:"SGD",name:"\u65B0\u52A0\u5761\u5143",alphabet:"S"},{id:"KRW",name:"\u97E9\u5143",alphabet:"K"},{id:"INR",name:"\u5370\u5EA6\u5362\u6BD4",alphabet:"I"},{id:"BRL",name:"\u5DF4\u897F\u96F7\u4E9A\u5C14",alphabet:"B"},{id:"MXN",name:"\u58A8\u897F\u54E5\u6BD4\u7D22",alphabet:"M"},{id:"ZAR",name:"\u5357\u975E\u5170\u7279",alphabet:"Z"},{id:"RUB",name:"\u4FC4\u7F57\u65AF\u5362\u5E03",alphabet:"R"},{id:"TRY",name:"\u571F\u8033\u5176\u91CC\u62C9",alphabet:"T"},{id:"SEK",name:"\u745E\u5178\u514B\u6717",alphabet:"S"},{id:"NZD",name:"\u65B0\u897F\u5170\u5143",alphabet:"N"},{id:"THB",name:"\u6CF0\u94E2",alphabet:"T"},{id:"NOK",name:"\u632A\u5A01\u514B\u6717",alphabet:"N"},{id:"DKK",name:"\u4E39\u9EA6\u514B\u6717",alphabet:"D"},{id:"PLN",name:"\u6CE2\u5170\u5179\u7F57\u63D0",alphabet:"P"},{id:"CZK",name:"\u6377\u514B\u514B\u6717",alphabet:"C"},{id:"HUF",name:"\u5308\u7259\u5229\u798F\u6797",alphabet:"H"},{id:"ILS",name:"\u4EE5\u8272\u5217\u65B0\u8C22\u514B\u5C14",alphabet:"I"},{id:"CLP",name:"\u667A\u5229\u6BD4\u7D22",alphabet:"C"},{id:"PHP",name:"\u83F2\u5F8B\u5BBE\u6BD4\u7D22",alphabet:"P"},{id:"IDR",name:"\u5370\u5C3C\u76FE",alphabet:"I"},{id:"TWD",name:"\u65B0\u53F0\u5E01",alphabet:"T"}]),_=t()(d,1),u=_[0],h=(0,l.useState)(),s=t()(h,2),m=s[0],E=s[1];return(0,n.jsx)(i.AlphabetSelect,{value:m,style:{width:300},data:u.sort(function(r,b){return r.alphabet.localeCompare(b.alphabet)}),placeholder:"Please select",onChange:E,mode:"multiple"})}e.default=p}}]);
