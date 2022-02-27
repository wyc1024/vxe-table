(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b18d4ae8"],{"04ee":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v(" 合并列，通过自定义 "),n("table-api-link",{attrs:{prop:"span-method"}}),e._v(" 合并方法"),n("br"),n("span",{staticClass:"red"},[e._v("（注："),n("table-api-link",{attrs:{prop:"span-method"}}),e._v(" ，不能用于树形结构、展开行、固定列，合并的逻辑都是自行实现的，该示例仅供参考）")],1)],1),n("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{on:{click:function(t){e.allAlign="left"}}},[e._v("居左")]),n("vxe-button",{on:{click:function(t){e.allAlign="center"}}},[e._v("居中")]),n("vxe-button",{on:{click:function(t){e.allAlign="right"}}},[e._v("居右")])]},proxy:!0}])}),n("vxe-table",{attrs:{border:"",resizable:"",height:"300",align:e.allAlign,"scroll-y":{gt:-1},"span-method":e.colspanMethod,data:e.tableData}},[n("vxe-table-column",{attrs:{type:"seq",width:"60"}}),n("vxe-table-column",{attrs:{field:"name",title:"Name"}}),n("vxe-table-column",{attrs:{field:"role",title:"Role"}}),n("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),n("vxe-table-column",{attrs:{field:"age",title:"Age"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),n("p",{staticClass:"tip"},[e._v("通用合并行")]),n("vxe-table",{attrs:{border:"",resizable:"",height:"300","scroll-y":{gt:-1},"span-method":e.mergeRowMethod,data:e.tableData}},[n("vxe-table-column",{attrs:{type:"seq",width:"60"}}),n("vxe-table-column",{attrs:{field:"key",title:"Key"}}),n("vxe-table-column",{attrs:{field:"content",title:"Translate"}}),n("vxe-table-column",{attrs:{field:"language",title:"Language",filters:[{label:"中文",value:"zh_CN"},{label:"English",value:"en_US"}]}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")])],1)},a=[],o=(n("fb6a"),n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("caad"),n("c695")),r=n.n(o),s=n("f4e8"),i=n.n(s),c={data:function(){return{allAlign:null,tableData:[],mergeCells:[{row:1,col:1,rowspan:3,colspan:3},{row:6,col:0,rowspan:2,colspan:2}],demoCodes:['\n        <vxe-toolbar>\n          <template v-slot:buttons>\n            <vxe-button @click="allAlign = \'left\'">居左</vxe-button>\n            <vxe-button @click="allAlign = \'center\'">居中</vxe-button>\n            <vxe-button @click="allAlign = \'right\'">居右</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          resizable\n          height="300"\n          :align="allAlign"\n          :scroll-y="{gt: -1}"\n          :span-method="colspanMethod"\n          :data="tableData">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="role" title="Role"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              allAlign: null,\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 10)\n          },\n          methods: {\n            colspanMethod ({ rowIndex, _columnIndex }) {\n              if (rowIndex % 2 === 0) {\n                if (_columnIndex === 2) {\n                  return { rowspan: 1, colspan: 2 }\n                } else if (_columnIndex === 3) {\n                  return { rowspan: 0, colspan: 0 }\n                }\n              }\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          resizable\n          height="300"\n          :scroll-y="{gt: -1}"\n          :span-method="mergeRowMethod"\n          :data="tableData">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="key" title="Key"></vxe-table-column>\n          <vxe-table-column field="content" title="Translate"></vxe-table-column>\n          <vxe-table-column field="language" title="Language" :filters="[{label: \'中文\', value: \'zh_CN\'}, {label: \'English\', value: \'en_US\'}]"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 10)\n          },\n          methods: {\n            // 通用行合并函数（将相同多列数据合并为一行）\n            mergeRowMethod ({ row, _rowIndex, column, visibleData }) {\n              const fields = ['key']\n              const cellValue = XEUtils.get(row, column.property)\n              if (cellValue && fields.includes(column.property)) {\n                const prevRow = visibleData[_rowIndex - 1]\n                let nextRow = visibleData[_rowIndex + 1]\n                if (prevRow && XEUtils.get(prevRow, column.property) === cellValue) {\n                  return { rowspan: 0, colspan: 0 }\n                } else {\n                  let countRowspan = 1\n                  while (nextRow && XEUtils.get(nextRow, column.property) === cellValue) {\n                    nextRow = visibleData[++countRowspan + _rowIndex]\n                  }\n                  if (countRowspan > 1) {\n                    return { rowspan: countRowspan, colspan: 1 }\n                  }\n                }\n              }\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,10)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){i.a.highlightBlock(e)}))},methods:{colspanMethod:function(e){var t=e.rowIndex,n=e.columnIndex;if(t%2===0){if(2===n)return{rowspan:1,colspan:2};if(3===n)return{rowspan:0,colspan:0}}},mergeRowMethod:function(e){var t=e.row,n=e._rowIndex,l=e.column,a=e.visibleData,o=["key"],s=r.a.get(t,l.property);if(s&&o.includes(l.property)){var i=a[n-1],c=a[n+1];if(i&&r.a.get(i,l.property)===s)return{rowspan:0,colspan:0};var u=1;while(c&&r.a.get(c,l.property)===s)c=a[++u+n];if(u>1)return{rowspan:u,colspan:1}}}}},u=c,d=n("2877"),v=Object(d["a"])(u,l,a,!1,null,null,null);t["default"]=v.exports},"4df4":function(e,t,n){"use strict";var l=n("da84"),a=n("0366"),o=n("c65b"),r=n("7b0b"),s=n("9bdd"),i=n("e95a"),c=n("68ee"),u=n("07fa"),d=n("8418"),v=n("9a1f"),b=n("35a1"),p=l.Array;e.exports=function(e){var t=r(e),n=c(this),l=arguments.length,x=l>1?arguments[1]:void 0,m=void 0!==x;m&&(x=a(x,l>2?arguments[2]:void 0));var f,w,h,g,_,y,A=b(t),C=0;if(!A||this==p&&i(A))for(f=u(t),w=n?new this(f):p(f);f>C;C++)y=m?x(t[C],C):t[C],d(w,C,y);else for(g=v(t,A),_=g.next,w=n?new this:[];!(h=o(_,g)).done;C++)y=m?s(g,x,[h.value,C],!0):h.value,d(w,C,y);return w.length=C,w}},"9bdd":function(e,t,n){var l=n("825a"),a=n("2a62");e.exports=function(e,t,n,o){try{return o?t(l(n)[0],n[1]):t(n)}catch(r){a(e,"throw",r)}}},a630:function(e,t,n){var l=n("23e7"),a=n("4df4"),o=n("1c7e"),r=!o((function(e){Array.from(e)}));l({target:"Array",stat:!0,forced:r},{from:a})}}]);