(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24f54662"],{"0a52":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.$t("app.aside.nav.install")))]),t._m(0),t._m(1),n("h2",[t._v("CDN")]),t._m(2),t._m(3)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"tip"},[t._v(" 推荐使用 npm 的方式安装，它能更好地和 "),n("a",{staticClass:"link",attrs:{href:"https://webpack.js.org/"}},[t._v("webpack")]),t._v(" 打包工具配合使用。"),n("br"),t._v(" 依赖库： "),n("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/xe-utils"}},[t._v("xe-utils2.7+")]),t._v("  "),n("a",{staticClass:"link",staticStyle:{"font-size":"20px","font-weight":"700"},attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D"}},[t._v("vue2.6+")]),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[t._v("    "),n("code",{staticClass:"shell"},[t._v("\n      npm install xe-utils vxe-table@1\n    ")]),t._v("\n    "),n("code",{staticClass:"javascript"},[t._v("\n      import Vue from 'vue'\n      import 'xe-utils'\n      import VXETable from 'vxe-table'\n      import 'vxe-table/lib/style.css'\n\n      Vue.use(VXETable)\n\n      // 给 vue 实例挂载全局窗口对象，例如：\n      // Vue.prototype.$XModal = VXETable.modal\n\n      // 给 vue 实例挂载全局打印对象，例如：\n      // Vue.prototype.$XPrint = VXETable.print\n    ")]),t._v("\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"tip"},[t._v(" 可以通过 "),n("a",{staticClass:"link",attrs:{href:"https://unpkg.com/vxe-table/"}},[t._v("unpkg")]),t._v(" 或 "),n("a",{staticClass:"link",attrs:{href:"https://cdn.jsdelivr.net/npm/vxe-table/"}},[t._v("cdnjs")]),t._v(" 获取到最新版本的资源，并在页面上引入即可"),n("br"),n("span",{staticClass:"red"},[t._v("（注：不建议将公共的CDN地址用于生产，因为该连接随时都可能会失效，导致项目挂掉，使用CDN方式记得锁定版本号）")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[t._v("    "),n("code",{staticClass:"xml"},[t._v('\n      \x3c!-- 引入样式 --\x3e\n      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-table/lib/style.css">\n      \x3c!-- 引入脚本 --\x3e\n      <script src="https://cdn.jsdelivr.net/npm/xe-utils"><\/script>\n      <script src="https://cdn.jsdelivr.net/npm/vxe-table"><\/script>\n    ')]),t._v("\n  ")])}],r=(n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("f4e8")),i=n.n(r),l={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(t){i.a.highlightBlock(t)}))}},c=l,o=n("2877"),v=Object(o["a"])(c,s,a,!1,null,null,null);e["default"]=v.exports},"4df4":function(t,e,n){"use strict";var s=n("da84"),a=n("0366"),r=n("c65b"),i=n("7b0b"),l=n("9bdd"),c=n("e95a"),o=n("68ee"),v=n("07fa"),p=n("8418"),u=n("9a1f"),f=n("35a1"),h=s.Array;t.exports=function(t){var e=i(t),n=o(this),s=arguments.length,_=s>1?arguments[1]:void 0,d=void 0!==_;d&&(_=a(_,s>2?arguments[2]:void 0));var m,b,x,k,w,E,C=f(e),g=0;if(!C||this==h&&c(C))for(m=v(e),b=n?new this(m):h(m);m>g;g++)E=d?_(e[g],g):e[g],p(b,g,E);else for(k=u(e,C),w=k.next,b=n?new this:[];!(x=r(w,k)).done;g++)E=d?l(k,_,[x.value,g],!0):x.value,p(b,g,E);return b.length=g,b}},"9bdd":function(t,e,n){var s=n("825a"),a=n("2a62");t.exports=function(t,e,n,r){try{return r?e(s(n)[0],n[1]):e(n)}catch(i){a(t,"throw",i)}}},a630:function(t,e,n){var s=n("23e7"),a=n("4df4"),r=n("1c7e"),i=!r((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:i},{from:a})}}]);