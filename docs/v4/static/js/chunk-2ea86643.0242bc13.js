(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ea86643"],{"5d06":function(e,n,a){"use strict";a.r(n);var t=a("7a23"),o={class:"tip"},r=Object(t["l"])("配置 "),m=Object(t["l"])(" 启用多字段组合排序，如果是服务端排序，只需加上 "),l=Object(t["l"])("."),u=Object(t["l"])(" 和 "),c=Object(t["l"])(" 事件就可以实现"),i={class:"demo-code"},g=Object(t["l"])("      "),b=Object(t["l"])("\r\n      "),d=Object(t["l"])("\r\n    ");function s(e,n,a,s,f,j){var p=Object(t["L"])("table-api-link"),O=Object(t["L"])("vxe-column"),v=Object(t["L"])("vxe-table"),h=Object(t["L"])("pre-code");return Object(t["D"])(),Object(t["i"])("div",null,[Object(t["j"])("p",o,[r,Object(t["m"])(p,{prop:"multiple"}),m,Object(t["m"])(p,{prop:"sort-config"}),l,Object(t["m"])(p,{prop:"remote"}),u,Object(t["m"])(p,{prop:"sort-change"}),c]),Object(t["m"])(v,{border:"",height:"300","column-config":{isHover:!0},"sort-config":{multiple:!0,trigger:"cell"},data:e.demo1.tableData,onSortChange:e.sortChangeEvent},{default:Object(t["V"])((function(){return[Object(t["m"])(O,{type:"seq",width:"60"}),Object(t["m"])(O,{field:"name",title:"Name",sortable:""}),Object(t["m"])(O,{field:"role",title:"Role",sortable:""}),Object(t["m"])(O,{field:"age",title:"Age",sortable:""}),Object(t["m"])(O,{field:"num",title:"Num",sortable:""})]})),_:1},8,["data","onSortChange"]),Object(t["j"])("p",i,Object(t["O"])(e.$t("app.body.button.showCode")),1),Object(t["j"])("pre",null,[g,Object(t["m"])(h,{class:"xml"},{default:Object(t["V"])((function(){return[Object(t["l"])(Object(t["O"])(e.demoCodes[0]),1)]})),_:1}),b,Object(t["m"])(h,{class:"typescript"},{default:Object(t["V"])((function(){return[Object(t["l"])(Object(t["O"])(e.demoCodes[1]),1)]})),_:1}),d])])}a("a15b"),a("d81d"),a("99af");var f=Object(t["n"])({setup:function(){var e=Object(t["H"])({tableData:[{name:"小红",role:"前端",age:25,num:7},{name:"老王",role:"后端",age:30,num:6},{name:"小红",role:"后端",age:27,num:1},{name:"小明",role:"前端",age:24,num:2},{name:"老徐",role:"测试",age:23,num:3},{name:"老徐",role:"测试",age:28,num:3},{name:"老王",role:"前端",age:29,num:3},{name:"老王",role:"前端",age:27,num:3},{name:"老徐",role:"测试",age:26,num:4},{name:"小明",role:"前端",age:23,num:4},{name:"小明",role:"前端",age:28,num:8},{name:"小明",role:"前端",age:28,num:7},{name:"小明",role:"测试",age:25,num:6},{name:"小红",role:"后端",age:22,num:9},{name:"小红",role:"后端",age:22,num:8},{name:"老徐",role:"前端",age:23,num:5},{name:"老徐",role:"测试",age:26,num:1},{name:"小红",role:"前端",age:23,num:4},{name:"小红",role:"前端",age:29,num:2},{name:"小明",role:"测试",age:27,num:3},{name:"老王",role:"前端",age:24,num:6},{name:"老王",role:"后端",age:22,num:4},{name:"老徐",role:"前端",age:24,num:8},{name:"小明",role:"测试",age:30,num:7},{name:"小明",role:"测试",age:29,num:7}]}),n=function(e){var n=e.sortList;console.info(n.map((function(e){return"".concat(e.property,",").concat(e.order)})).join("; "))};return{demo1:e,sortChangeEvent:n,demoCodes:['\n        <vxe-table\n          border\n          height="300"\n          :column-config="{isHover: true}"\n          :sort-config="{multiple: true, trigger: \'cell\'}"\n          :data="demo1.tableData"\n          @sort-change="sortChangeEvent">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="role" title="Role" sortable></vxe-column>\n          <vxe-column field="age" title="Age" sortable></vxe-column>\n          <vxe-column field="num" title="Num" sortable></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n        import { VxeTableEvents } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const demo1 = reactive({\n              tableData: [\n                { name: '小红', role: '前端', age: 25, num: 7 },\n                { name: '老王', role: '后端', age: 30, num: 6 },\n                { name: '小红', role: '后端', age: 27, num: 1 },\n                { name: '小明', role: '前端', age: 24, num: 2 },\n                { name: '老徐', role: '测试', age: 23, num: 3 },\n                { name: '老徐', role: '测试', age: 28, num: 3 },\n                { name: '老王', role: '前端', age: 29, num: 3 },\n                { name: '老王', role: '前端', age: 27, num: 3 },\n                { name: '老徐', role: '测试', age: 26, num: 4 },\n                { name: '小明', role: '前端', age: 23, num: 4 },\n                { name: '小明', role: '前端', age: 28, num: 8 },\n                { name: '小明', role: '前端', age: 28, num: 7 },\n                { name: '小明', role: '测试', age: 25, num: 6 },\n                { name: '小红', role: '后端', age: 22, num: 9 },\n                { name: '小红', role: '后端', age: 22, num: 8 },\n                { name: '老徐', role: '前端', age: 23, num: 5 },\n                { name: '老徐', role: '测试', age: 26, num: 1 },\n                { name: '小红', role: '前端', age: 23, num: 4 },\n                { name: '小红', role: '前端', age: 29, num: 2 },\n                { name: '小明', role: '测试', age: 27, num: 3 },\n                { name: '老王', role: '前端', age: 24, num: 6 },\n                { name: '老王', role: '后端', age: 22, num: 4 },\n                { name: '老徐', role: '前端', age: 24, num: 8 },\n                { name: '小明', role: '测试', age: 30, num: 7 },\n                { name: '小明', role: '测试', age: 29, num: 7 }\n              ]\n            })\n\n            const sortChangeEvent: VxeTableEvents.SortChange = ({ sortList }) => {\n              console.info(sortList.map((item) => `${item.property},${item.order}`).join('; '))\n            }\n\n            return {\n              demo1,\n              sortChangeEvent\n            }\n          }\n        })\n        "]}}}),j=a("6b0d"),p=a.n(j);const O=p()(f,[["render",s]]);n["default"]=O},"99af":function(e,n,a){"use strict";var t=a("23e7"),o=a("da84"),r=a("d039"),m=a("e8b5"),l=a("861d"),u=a("7b0b"),c=a("07fa"),i=a("8418"),g=a("65f0"),b=a("1dde"),d=a("b622"),s=a("2d00"),f=d("isConcatSpreadable"),j=9007199254740991,p="Maximum allowed index exceeded",O=o.TypeError,v=s>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),h=b("concat"),x=function(e){if(!l(e))return!1;var n=e[f];return void 0!==n?!!n:m(e)},C=!v||!h;t({target:"Array",proto:!0,forced:C},{concat:function(e){var n,a,t,o,r,m=u(this),l=g(m,0),b=0;for(n=-1,t=arguments.length;n<t;n++)if(r=-1===n?m:arguments[n],x(r)){if(o=c(r),b+o>j)throw O(p);for(a=0;a<o;a++,b++)a in r&&i(l,b,r[a])}else{if(b>=j)throw O(p);i(l,b++,r)}return l.length=b,l}})},a15b:function(e,n,a){"use strict";var t=a("23e7"),o=a("e330"),r=a("44ad"),m=a("fc6a"),l=a("a640"),u=o([].join),c=r!=Object,i=l("join",",");t({target:"Array",proto:!0,forced:c||!i},{join:function(e){return u(m(this),void 0===e?",":e)}})}}]);