(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207b29"],{a246:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" "+t._s(t.postUrl)+" "),n("form",{attrs:{action:t.postUrl,method:"post",enctype:"multipart/form-data"}},[t._v(" 入口文件："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"}],attrs:{name:"entry"},domProps:{value:t.entry},on:{input:function(e){e.target.composing||(t.entry=e.target.value)}}}),t._v(" 选择文件"),n("input",{attrs:{type:"file",name:"file",multiple:"multiple"}}),n("input",{attrs:{type:"submit",value:"提交"}})])])},r=[],o={data:function(){return{entry:"",postUrl:"http://".concat(location.host,"/file-upload")}}},l=o,i=n("623f"),u=Object(i["a"])(l,a,r,!1,null,null,null);e["default"]=u.exports}}]);