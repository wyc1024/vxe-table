(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e02b4b3"],{"4df4":function(e,n,a){"use strict";var t=a("da84"),s=a("0366"),r=a("c65b"),o=a("7b0b"),l=a("9bdd"),d=a("e95a"),i=a("68ee"),c=a("07fa"),m=a("8418"),v=a("9a1f"),u=a("35a1"),x=t.Array;e.exports=function(e){var n=o(e),a=i(this),t=arguments.length,h=t>1?arguments[1]:void 0,p=void 0!==h;p&&(h=s(h,t>2?arguments[2]:void 0));var b,f,g,_,w,T,k=u(n),C=0;if(!k||this==x&&d(k))for(b=c(n),f=a?new this(b):x(b);b>C;C++)T=p?h(n[C],C):n[C],m(f,C,T);else for(_=v(n,k),w=_.next,f=a?new this:[];!(g=r(w,_)).done;C++)T=p?l(_,h,[g.value,C],!0):g.value,m(f,C,T);return f.length=C,f}},"9bdd":function(e,n,a){var t=a("825a"),s=a("2a62");e.exports=function(e,n,a,r){try{return r?n(t(a)[0],a[1]):n(a)}catch(o){s(e,"throw",o)}}},a630:function(e,n,a){var t=a("23e7"),s=a("4df4"),r=a("1c7e"),o=!r((function(e){Array.from(e)}));t({target:"Array",stat:!0,forced:o},{from:s})},f0d7:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("p",{staticClass:"tip"},[e._v(" 默认的渲染 "),a("table-column-api-link",{attrs:{prop:"cell-render"}}),e._v("，查看 "),a("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table-docs/tree/main/v2/src/plugins/xtable/renderer"}},[e._v("示例的源码")]),a("span",{staticClass:"red"},[e._v("（具体请自行实现，该示例仅供参考）")]),a("br"),e._v(" 配置参数："),a("br"),e._v(" renderHeader (h, renderOpts, "),a("vxe-tooltip",{attrs:{content:"params: { column, columnIndex, columnIndex, $rowIndex, $table }",enterable:""}},[a("i",{staticClass:"fa fa-question-circle"})]),e._v("params) 表头"),a("br"),e._v(" renderDefault (h, renderOpts, "),a("vxe-tooltip",{attrs:{content:"params: { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $table }",enterable:""}},[a("i",{staticClass:"fa fa-question-circle"})]),e._v("params) 表内容"),a("br"),e._v(" renderFooter (h, renderOpts, "),a("vxe-tooltip",{attrs:{content:"params: { column, columnIndex, $columnIndex, $rowIndex, _columnIndex, items, $table }",enterable:""}},[a("i",{staticClass:"fa fa-question-circle"})]),e._v("params) 表尾"),a("br"),e._v(" exportMethod ("),a("vxe-tooltip",{attrs:{content:"params: { row, column }",enterable:""}},[a("i",{staticClass:"fa fa-question-circle"})]),e._v("params) 单元格导出函数"),a("br"),e._v(" footerExportMethod ("),a("vxe-tooltip",{attrs:{content:"params: { items, _columnIndex }",enterable:""}},[a("i",{staticClass:"fa fa-question-circle"})]),e._v("params) 表尾单元格导出函数"),a("br")],1),a("vxe-table",{attrs:{border:"",data:e.tableData}},[a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"name",title:"Name","cell-render":{name:"MyLink",events:{click:e.linkEvent}}}}),a("vxe-table-column",{attrs:{field:"sex",title:"sex"}}),a("vxe-table-column",{attrs:{field:"age",title:"Age"}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")])],1)},s=[],r=(a("d3b7"),a("159b"),a("a630"),a("3ca3"),a("b0c0"),a("f4e8")),o=a.n(r),l={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women ",age:23,address:"Shenzhen"},{id:10005,name:"Test5",role:"Develop",sex:"Women ",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women ",age:21,address:"Shenzhen"},{id:10007,name:"Test7",role:"Test",sex:"Man ",age:29,address:"Shenzhen"},{id:10008,name:"Test8",role:"Develop",sex:"Man ",age:35,address:"Shenzhen"}],demoCodes:["\n        // 创建一个简单的超链接渲染\n        VXETable.renderer.add('MyLink', {\n          // 默认显示模板\n          renderDefault (h, renderOpts, params) {\n            let { row, column } = params\n            let { events } = renderOpts\n            return [\n              <a class=\"my-link\" onClick={ () => events.click(params) }>{row[column.property]}</a>\n            ]\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          :data="tableData">\n          <vxe-table-column type="seq" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :cell-render="{name: \'MyLink\', events: {click: linkEvent}}"></vxe-table-column>\n          <vxe-table-column field="sex" title="sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'Shenzhen' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'Shenzhen' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'Shenzhen' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'Shenzhen' }\n              ]\n            }\n          },\n          methods: {\n            linkEvent ({ row }) {\n              console.log(row.name)\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){o.a.highlightBlock(e)}))},methods:{linkEvent:function(e){var n=e.row;console.log(n.name)}}},d=l,i=a("2877"),c=Object(i["a"])(d,t,s,!1,null,null,null);n["default"]=c.exports}}]);