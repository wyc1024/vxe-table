(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51883702"],{"4df4":function(t,e,n){"use strict";var a=n("da84"),o=n("0366"),r=n("c65b"),i=n("7b0b"),l=n("9bdd"),c=n("e95a"),d=n("68ee"),s=n("07fa"),u=n("8418"),f=n("9a1f"),v=n("35a1"),b=a.Array;t.exports=function(t){var e=i(t),n=d(this),a=arguments.length,h=a>1?arguments[1]:void 0,m=void 0!==h;m&&(h=o(h,a>2?arguments[2]:void 0));var p,_,x,g,k,w,y=v(e),C=0;if(!y||this==b&&c(y))for(p=s(e),_=n?new this(p):b(p);p>C;C++)w=m?h(e[C],C):e[C],u(_,C,w);else for(g=f(e,y),k=g.next,_=n?new this:[];!(x=r(k,g)).done;C++)w=m?l(g,h,[x.value,C],!0):x.value,u(_,C,w);return _.length=C,_}},"9bdd":function(t,e,n){var a=n("825a"),o=n("2a62");t.exports=function(t,e,n,r){try{return r?e(a(n)[0],n[1]):e(n)}catch(i){o(t,"throw",i)}}},a630:function(t,e,n){var a=n("23e7"),o=n("4df4"),r=n("1c7e"),i=!r((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:i},{from:o})},c4aa:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"tip"},[t._v("虚拟树的使用")]),n("vxe-virtual-tree",{ref:"xVTree",attrs:{resizable:"","show-overflow":"","row-key":"",height:"500",loading:t.loading,data:t.tableData,toolbar:{slots:{buttons:"toolbar_buttons"}},"radio-config":{labelField:"name"},"tree-config":{children:"children"},columns:t.tableColumn},scopedSlots:t._u([{key:"toolbar_buttons",fn:function(){return[n("vxe-button",{on:{click:function(e){return t.loadData(1e3)}}},[t._v("加载1k节点")]),n("vxe-button",{on:{click:function(e){return t.loadData(5e3)}}},[t._v("加载5k节点")]),n("vxe-button",{on:{click:function(e){return t.loadData(1e4)}}},[t._v("加载1w节点")]),n("vxe-button",{on:{click:function(e){return t.$refs.xVTree.setAllTreeExpand(!0)}}},[t._v("展开所有")]),n("vxe-button",{on:{click:function(e){return t.$refs.xVTree.setAllTreeExpand(!1)}}},[t._v("收起所有")])]},proxy:!0}])}),n("p",{staticClass:"demo-code"},[t._v(t._s(t.$t("app.body.button.showCode")))]),n("pre",[t._v("    "),n("code",{staticClass:"xml"},[t._v(t._s(t.demoCodes[0]))]),t._v("\n    "),n("code",{staticClass:"javascript"},[t._v(t._s(t.demoCodes[1]))]),t._v("\n  ")])],1)},o=[],r=(n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("99af"),n("f4e8")),i=n.n(r),l={data:function(){return{loading:!1,tableData:[],tableColumn:[{type:"seq",title:"序号",width:100},{type:"radio",title:"Name",treeNode:!0},{field:"id",title:"ID"}],demoCodes:['\n        <vxe-virtual-tree\n          resizable\n          show-overflow\n          row-key\n          ref="xVTree"\n          height="500"\n          :loading="loading"\n          :data="tableData"\n          :toolbar="{slots: {buttons: \'toolbar_buttons\'}}"\n          :radio-config="{labelField: \'name\'}"\n          :tree-config="{children: \'children\'}"\n          :columns="tableColumn">\n          <template v-slot:toolbar_buttons>\n            <vxe-button @click="$refs.xVTree.setAllTreeExpand(true)">展开所有</vxe-button>\n            <vxe-button @click="$refs.xVTree.setAllTreeExpand(false)">收起所有</vxe-button>\n          </template>\n        </vxe-virtual-tree>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              tableColumn: [\n                { type: 'seq', title: '序号', width: 100 },\n                { type: 'radio', title: 'Name', treeNode: true },\n                { field: 'id', title: '邮政编码' },\n                { field: 'date', title: '更新时间' }\n              ]\n            }\n          },\n          created () {\n            this.findCityAll()\n          },\n          methods: {\n            findCityAll () {\n              this.loading = true\n              XEAjax.get('/api/conf/city/all').then(data => {\n                this.tableData = data\n                this.loading = false\n              })\n            }\n          }\n        }\n        "]}},created:function(){this.loadData(500)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(t){i.a.highlightBlock(t)}))},methods:{loadData:function(t){var e=this;this.loading=!0,this.getTreeList(t).then((function(t){e.tableData=t,e.loading=!1}))},getTreeList:function(t){return new Promise((function(e){setTimeout((function(){for(var n=t/2,a=3,o=2,r=2,i=6,l=[],c=1e4,d=0,s=0;s<n;s++){if(d>=t)break;for(var u=[],f=0;f<a;f++){if(d>=t)break;for(var v=[],b=0;b<o;b++){if(d>=t)break;for(var h=[],m=0;m<r;m++){if(d>=t)break;for(var p=[],_=0;_<i;_++){if(d>=t)break;var x={id:c+d++,name:"name".concat(s,"_").concat(f,"_").concat(b,"_").concat(m,"_").concat(_),children:[]};p.push(x)}var g={id:c+d++,name:"name".concat(s,"_").concat(f,"_").concat(b,"_").concat(m),children:p};h.push(g)}var k={id:c+d++,name:"name".concat(s,"_").concat(f,"_").concat(b),children:h};v.push(k)}var w={id:c+d++,name:"name".concat(s,"_").concat(f),children:v};u.push(w)}var y={id:c+d++,name:"name".concat(s),children:u};l.push(y)}e(l)}),300)}))}}},c=l,d=n("2877"),s=Object(d["a"])(c,a,o,!1,null,null,null);e["default"]=s.exports}}]);