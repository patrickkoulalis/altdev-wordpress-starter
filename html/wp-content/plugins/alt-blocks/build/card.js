(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{16:function(e,t,n){}}]),function(e){function t(t){for(var r,a,l=t[0],u=t[1],i=t[2],s=0,f=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(p&&p(t);f.length;)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={1:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var p=u;c.push([24,8]),n()}({0:function(e,t){e.exports=window.wp.element},2:function(e,t){e.exports=window.wp.blockEditor},24:function(e,t,n){"use strict";n.r(t);var r=n(4),o=(n(16),n(0)),c=n(3),a=n(2),l=n(5);Object(r.registerBlockType)("altblocks/card",{edit:function(){return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("p",Object(a.useBlockProps)(),Object(l.a)(a.useBlockProps),Object(c.__)("ALTdev Block – hello from the editor!","alt-blocksaaaaaaaaaaaaa")))},save:function(){return Object(o.createElement)("p",a.useBlockProps.save(),Object(c.__)("ALTdev Block – hello from the saved content!","alt-blocks"))}})},3:function(e,t){e.exports=window.wp.i18n},4:function(e,t){e.exports=window.wp.blocks},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){return Object(r.createElement)("span",{className:"block-label"},`${e()["data-title"]} ${e().id}`)}}});