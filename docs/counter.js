!function(n,t){for(var r in t)n[r]=t[r]}(window,function(n){function t(t){for(var o,c,i=t[0],f=t[1],p=t[2],a=0,s=[];a<i.length;a++)c=i[a],e[c]&&s.push(e[c][0]),e[c]=0;for(o in f)Object.prototype.hasOwnProperty.call(f,o)&&(n[o]=f[o]);for(l&&l(t);s.length;)s.shift()();return u.push.apply(u,p||[]),r()}function r(){for(var n,t=0;t<u.length;t++){for(var r=u[t],o=!0,i=1;i<r.length;i++){var f=r[i];0!==e[f]&&(o=!1)}o&&(u.splice(t--,1),n=c(c.s=r[0]))}return n}var o={},e={3:0},u=[];function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=n,c.c=o,c.d=function(n,t,r){c.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},c.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},c.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var l=f;return u.push([3,0]),r()}({3:function(n,t,r){"use strict";r.r(t);var o=r(0),e=function(){return function(){this.count=0}}(),u=function(){function n(){}return n.prototype.down=function(n){return function(t){return{count:t.count-n}}},n.prototype.up=function(n){return function(t){return{count:t.count+n}}},n}(),c=new e,i=new u;Object(o.app)(c,i,function(n,t){return Object(o.h)("div",null,Object(o.h)("h1",null,n.count),Object(o.h)("button",{onclick:function(){return t.down(1)},disabled:n.count<=0},"-"),Object(o.h)("button",{onclick:function(){return t.up(1)}},"+"))},document.body)}}));