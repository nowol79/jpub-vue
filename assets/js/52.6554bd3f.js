(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{479:function(n,e,t){"use strict";t.r(e);t(24),t(115);var i={data:function(){return{name:"키메라",list:[{id:1,name:"슬라임",hp:100},{id:2,name:"고블린",hp:200},{id:3,name:"드래곤",hp:500}]}},methods:{doAdd:function(){var n=this.list.reduce(function(n,e){return n>e.id?n:e.id},0);this.list.push({id:n+1,name:this.name,hp:500})}}},a=t(1),o=Object(a.a)(i,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n  이름\n  "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.name,expression:"name"}],domProps:{value:n.name},on:{input:function(e){e.target.composing||(n.name=e.target.value)}}}),n._v(" "),t("button",{on:{click:n.doAdd}},[n._v("몬스터 추가하기")]),n._v(" "),t("ul",n._l(n.list,function(e){return t("li",{key:e.id},[n._v("\n      ID."+n._s(e.id)+" "+n._s(e.name)+" HP."+n._s(e.hp)+"\n    ")])}))])},[],!1,null,null,null);o.options.__file="demo05.vue";e.default=o.exports}}]);