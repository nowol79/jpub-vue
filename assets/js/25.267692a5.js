(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{243:function(t,e,i){},293:function(t,e,i){"use strict";var n=i(243);i.n(n).a},344:function(t,e,i){"use strict";i.r(e);i(114),i(115),i(30);var n={props:{autoplay:Boolean},data:function(){return{timer:null,index:0,original:["기능별로 Vue.js를 설명하는 입문서입니다. Vue.js를 한 번도 다루어 본 적이 없는 분과 이미 Vue.js를 사용하고 있는 분 모두 즐겁게 책을 볼 수 있을 것입니다.","Vue.js는 직관적으로 사용할 수 있는 내용이 많습니다. 그래서 어떻게든 작동이 되니 자세한 이해 없이 코드를 작성하는 경우가 많습니다. 많이들 실수하는 코드를 살펴보며 어떠한 장점과 단점이 있는지 분석하는 내용도 담고 있습니다.","Vue.js는 직관적으로 사용할 수 있는 내용이 많습니다. 그래서 어떻게든 작동이 되니 자세한 이해 없이 코드를 작성하는 경우가 많습니다. 많이들 실수하는 코드를 살펴보며 어떠한 장점과 단점이 있는지 분석하는 내용도 담고 있습니다."],messages:[],text:""}},computed:{editor:{get:function(){return this.text.map(function(t){return t.text}).join("")},set:function(t){this.text=this.convText(t)}}},watch:{autoplay:function(t){clearTimeout(this.timer),t&&this.ticker()}},methods:{ticker:function(){var t=this;this.timer=setTimeout(function(){t.autoplay&&(t.index=t.index<t.messages.length-1?t.index+1:0,t.text=t.messages[t.index],t.ticker())},5e3)},convText:function(t){var e={},i=t.split("").map(function(t){return e[t]=e[t]?++e[t]:1,{id:"".concat(t,"_").concat(e[t]),text:t}});return Object.freeze(i)}},created:function(){var t=this;this.messages=this.original.map(function(e){return t.convText(e)}),this.text=this.messages[0],this.ticker()}},s=(i(293),i(1)),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"TextAnime1"},[i("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.editor,expression:"editor",modifiers:{lazy:!0}}],staticStyle:{width:"80%",height:"40px"},domProps:{value:t.editor},on:{change:function(e){t.editor=e.target.value}}}),t._v(" "),i("transition-group",{staticClass:"title",attrs:{tag:"div"}},t._l(t.text,function(e){return i("span",{key:e.id,staticClass:"item",domProps:{textContent:t._s(e.text)}})}),0)],1)},[],!1,null,"fdda225a",null);a.options.__file="TextAnime3.vue";e.default=a.exports}}]);