(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{25:function(e,t,n){}}]),function(e){function t(t){for(var l,r,a=t[0],s=t[1],i=t[2],b=0,p=[];b<a.length;b++)r=a[b],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);for(u&&u(t);p.length;)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],l=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(l=!1)}l&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var l={},o={4:0},c=[];function r(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=l,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=s;c.push([33,11]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.components},11:function(e,t,n){"use strict";var l=n(0),o=n(9);const c=Object(l.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(l.createElement)(o.Path,{d:"M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z"}));t.a=c},2:function(e,t){e.exports=window.wp.blockEditor},33:function(e,t,n){"use strict";n.r(t);var l=n(7),o=(n(25),n(0)),c=n(4),r=n(2),a=n(1),s=n(11),i=n(8),u=n(5);Object(l.registerBlockType)("altblocks/list",{apiVersion:2,attributes:{},edit:function({attributes:e,setAttributes:t}){const[n,l]=Object(o.useState)(e.fullwidth);return t({fullwidth:n}),Object(o.createElement)(o.Fragment,null,Object(o.createElement)("section",Object(r.useBlockProps)(),Object(o.createElement)(i.a,{useBlockProps:r.useBlockProps}),Object(o.createElement)(r.InspectorControls,{key:"setting"},Object(o.createElement)(a.Panel,null,Object(o.createElement)(a.PanelBody,{title:"Color",icon:s.a,initialOpen:!0},Object(o.createElement)(a.PanelRow,null,Object(o.createElement)("fieldset",null,Object(o.createElement)("legend",{className:"components-visually-hidden"},Object(c.__)("Background Color","alt-blocks")),Object(o.createElement)("label",{className:"components-custom-select-control__label"},Object(c.__)("Background Color","alt-blocks")),Object(o.createElement)(r.ColorPalette,null))))),Object(o.createElement)(a.Panel,null,Object(o.createElement)(a.PanelBody,{title:"Layout",icon:s.a,initialOpen:!0},Object(o.createElement)(a.PanelRow,null,Object(o.createElement)("fieldset",null,Object(o.createElement)("legend",{className:"components-visually-hidden"},Object(c.__)("Full Width","alt-blocks")),Object(o.createElement)("label",{className:"components-custom-select-control__label"},Object(c.__)("Full Width","alt-blocks"))))))),Object(o.createElement)(u.a,{styles:generatedStyles}),Object(o.createElement)(r.InnerBlocks,{allowedBlocks:["altblocks/iconlistitem"]})))},save:function({attributes:e}){return Object(o.createElement)("ul",r.useBlockProps.save(),Object(o.createElement)(u.a,{styles:generatedStyles}),Object(o.createElement)(r.InnerBlocks.Content,null))}})},4:function(e,t){e.exports=window.wp.i18n},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var l=n(0);function o({styles:e}){return e?Object(l.createElement)("style",null,e):""}},7:function(e,t){e.exports=window.wp.blocks},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var l=n(0);function o({useBlockProps:e}){return Object(l.createElement)("span",{className:"block-label"},`${e()["data-title"]} ${e().id}`)}},9:function(e,t){e.exports=window.wp.primitives}});