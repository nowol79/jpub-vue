(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{314:function(t,e,n){},470:function(t,e,n){"use strict";var i=n(314);n.n(i).a},495:function(t,e,n){"use strict";n.r(e);var i=n(332),r=n.n(i),s={data:function(){return{order:!1,list:[{id:1,name:"사과",price:1e3},{id:2,name:"바나나",price:2e3},{id:3,name:"딸기",price:3e3}]}},computed:{sortedList:function(){return r()(this.list,"price",this.order?"desc":"asc")}}},o=(n(470),n(1)),c=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[n("button",{on:{click:function(e){t.order=!t.order}}},[t._v("변경하기")])]),t._v(" "),n("transition-group",{staticClass:"list",attrs:{tag:"ul"}},t._l(t.sortedList,function(e){return n("li",{key:e.id},[t._v("\n      "+t._s(e.name)+" "+t._s(e.price)+"원\n    ")])}))],1)},[],!1,null,"f6a75bd4",null);c.options.__file="demo06.vue";e.default=c.exports}}]);