(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee001b36"],{"008b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pictrues"},[a("nav-bar",{attrs:{url:t.navUrl,activeIndex:t.activeIndex}}),a("el-page-header",{attrs:{content:"图片"},on:{back:function(e){return t.$router.push("/mainIndex")}}}),a("img",{attrs:{src:n("c0d3")}}),a("br"),a("img",{attrs:{src:n("735c")}})],1)},i=[],c=n("da1d"),r=n("54ce"),o={name:"pictrues",components:{NavBar:c["a"]},data:function(){return{navUrl:r["a"],activeIndex:"3"}}},s=o,l=n("2877"),u=Object(l["a"])(s,a,i,!1,null,"43cbab63",null);e["default"]=u.exports},"54ce":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=[{index:"0",path:"/mainIndex",label:"首页"},{index:"1",path:"/page01",label:"页面1"},{index:"2",path:"/page02",label:"页面2"},{index:"3",path:"/pictrues",label:"图片"}]},"61f3":function(t,e,n){},"735c":function(t,e,n){t.exports=n.p+"img/gm.c8b2c0e2.gif"},a0e7:function(t,e,n){"use strict";n("61f3")},c0d3:function(t,e,n){t.exports=n.p+"img/插羽毛.35484561.gif"},da1d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navBar"},[n("el-menu",{staticClass:"mainIndex",attrs:{mode:"horizontal","default-active":t.activeIndex},on:{select:t.goto}},t._l(t.url,(function(e){return n("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v(t._s(e.label))])})),1)],1)},i=[],c={name:"navBar",props:["activeIndex","url"],data:function(){return{}},methods:{goto:function(t){console.log(t,this.url[t].path),console.log(this.$route.path),console.log(window.location.host),window.open("#"+this.url[t].path,"_self")}}},r=c,o=(n("a0e7"),n("2877")),s=Object(o["a"])(r,a,i,!1,null,"60e82a83",null);e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-ee001b36.2a94e1a4.js.map