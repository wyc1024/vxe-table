(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10408668"],{"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("d3b7");function r(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function c(e){r(i,a,o,c,l,"next",e)}function l(e){r(i,a,o,c,l,"throw",e)}c(void 0)}))}}},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(V){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof b?t:b,o=Object.create(a.prototype),i=new z(r||[]);return o._invoke=R(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(V){return{type:"throw",arg:V}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",f="executing",m="completed",v={};function b(){}function h(){}function w(){}var y={};l(y,o,(function(){return this}));var x=Object.getPrototypeOf,g=x&&x(x($([])));g&&g!==n&&r.call(g,o)&&(y=g);var j=w.prototype=b.prototype=Object.create(y);function O(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}var a;function o(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function R(e,t,n){var r=d;return function(a,o){if(r===f)throw new Error("Generator is already running");if(r===m){if("throw"===a)throw o;return L()}n.method=a,n.arg=o;while(1){var i=n.delegate;if(i){var c=I(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var l=s(e,t,n);if("normal"===l.type){if(r=n.done?m:p,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=m,n.method="throw",n.arg=l.arg)}}}function I(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=s(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function $(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){while(++a<e.length)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:L}}function L(){return{value:t,done:!0}}return h.prototype=w,l(j,"constructor",w),l(w,"constructor",h),h.displayName=l(w,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,l(e,c,"GeneratorFunction")),e.prototype=Object.create(j),e},e.awrap=function(e){return{__await:e}},O(T.prototype),l(T.prototype,i,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new T(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(j),l(j,c,"Generator"),l(j,o,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=$,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:$(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("d039"),i=n("e8b5"),c=n("861d"),l=n("7b0b"),u=n("07fa"),s=n("8418"),d=n("65f0"),p=n("1dde"),f=n("b622"),m=n("2d00"),v=f("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",w=a.TypeError,y=m>=51||!o((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),x=p("concat"),g=function(e){if(!c(e))return!1;var t=e[v];return void 0!==t?!!t:i(e)},j=!y||!x;r({target:"Array",proto:!0,forced:j},{concat:function(e){var t,n,r,a,o,i=l(this),c=d(i,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?i:arguments[t],g(o)){if(a=u(o),p+a>b)throw w(h);for(n=0;n<a;n++,p++)n in o&&s(c,p,o[n])}else{if(p>=b)throw w(h);s(c,p++,o)}return c.length=p,c}})},fe33:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r["j"])("p",{class:"tip"},"树形结构，增删改查",-1),o=Object(r["l"])("新增"),i=Object(r["l"])("获取新增"),c=Object(r["l"])("获取删除"),l=Object(r["l"])("获取修改"),u=Object(r["l"])("插入节点"),s=Object(r["l"])("顶部插入节点"),d=Object(r["l"])("尾部插入子节点"),p=Object(r["l"])("删除节点"),f={class:"demo-code"},m=Object(r["l"])("      "),v=Object(r["l"])("\r\n      "),b=Object(r["l"])("\r\n    ");function h(e,t,n,h,w,y){var x=Object(r["L"])("vxe-button"),g=Object(r["L"])("vxe-toolbar"),j=Object(r["L"])("vxe-column"),O=Object(r["L"])("vxe-input"),T=Object(r["L"])("vxe-table"),R=Object(r["L"])("pre-code");return Object(r["D"])(),Object(r["i"])("div",null,[a,Object(r["m"])(g,{ref:"xToolbar",refresh:{query:e.searchMethod},export:"",print:"",custom:""},{buttons:Object(r["V"])((function(){return[Object(r["m"])(x,{onClick:e.insertEvent},{default:Object(r["V"])((function(){return[o]})),_:1},8,["onClick"]),Object(r["m"])(x,{onClick:e.getInsertEvent},{default:Object(r["V"])((function(){return[i]})),_:1},8,["onClick"]),Object(r["m"])(x,{onClick:e.getRemoveEvent},{default:Object(r["V"])((function(){return[c]})),_:1},8,["onClick"]),Object(r["m"])(x,{onClick:e.getUpdateEvent},{default:Object(r["V"])((function(){return[l]})),_:1},8,["onClick"])]})),_:1},8,["refresh"]),Object(r["m"])(T,{"show-overflow":"","keep-source":"",ref:"xTable","row-config":{keyField:"id"},"column-config":{resizable:!0},"print-config":{},"export-config":{},loading:e.demo1.loading,"tree-config":e.demo1.treeConfig,"edit-config":{trigger:"click",mode:"row",showStatus:!0},data:e.demo1.tableData},{default:Object(r["V"])((function(){return[Object(r["m"])(j,{type:"checkbox",width:"60"}),Object(r["m"])(j,{field:"name",title:"Name","tree-node":""}),Object(r["m"])(j,{field:"size",title:"Size","edit-render":{}},{edit:Object(r["V"])((function(e){var t=e.row;return[Object(r["m"])(O,{modelValue:t.size,"onUpdate:modelValue":function(e){return t.size=e},type:"text"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(r["m"])(j,{field:"type",title:"Type","edit-render":{}},{edit:Object(r["V"])((function(e){var t=e.row;return[Object(r["m"])(O,{modelValue:t.type,"onUpdate:modelValue":function(e){return t.type=e},type:"text"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(r["m"])(j,{field:"date",title:"Date","edit-render":{}},{edit:Object(r["V"])((function(e){var t=e.row;return[Object(r["m"])(O,{modelValue:t.date,"onUpdate:modelValue":function(e){return t.date=e},type:"date",transfer:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(r["m"])(j,{title:"操作",width:"500"},{default:Object(r["V"])((function(t){var n=t.row;return[Object(r["m"])(x,{type:"text",status:"primary",onClick:function(t){return e.insertRow(n,"current")}},{default:Object(r["V"])((function(){return[u]})),_:2},1032,["onClick"]),Object(r["m"])(x,{type:"text",status:"primary",onClick:function(t){return e.insertRow(n,"top")}},{default:Object(r["V"])((function(){return[s]})),_:2},1032,["onClick"]),Object(r["m"])(x,{type:"text",status:"primary",onClick:function(t){return e.insertRow(n,"bottom")}},{default:Object(r["V"])((function(){return[d]})),_:2},1032,["onClick"]),Object(r["m"])(x,{type:"text",status:"primary",onClick:function(t){return e.removeRow(n)}},{default:Object(r["V"])((function(){return[p]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["loading","tree-config","data"]),Object(r["j"])("p",f,Object(r["O"])(e.$t("app.body.button.showCode")),1),Object(r["j"])("pre",null,[m,Object(r["m"])(R,{class:"xml"},{default:Object(r["V"])((function(){return[Object(r["l"])(Object(r["O"])(e.demoCodes[0]),1)]})),_:1}),v,Object(r["m"])(R,{class:"typescript"},{default:Object(r["V"])((function(){return[Object(r["l"])(Object(r["O"])(e.demoCodes[1]),1)]})),_:1}),b])])}var w=n("1da1"),y=(n("96cf"),n("d3b7"),n("99af"),n("55db")),x=Object(r["n"])({setup:function(){var e=Object(r["H"])({loading:!1,tableData:[],treeConfig:{transform:!0,rowField:"id",parentField:"parentId"}}),t=Object(r["I"])({}),n=Object(r["I"])({}),a=function(){return e.loading=!0,new Promise((function(t){setTimeout((function(){e.tableData=[{id:1e4,parentId:null,name:"vxe-table test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"vxe-table test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"vxe-table test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"vxe-table test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"vxe-table test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}],e.loading=!1,t(null)}),300)}))},o=function(){var e=t.value;return e.clearAll(),a()},i=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(n,r){var a,o,i,c,l,u,s,d,p,f,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.value,o=new Date,"current"!==r){e.next=12;break}return i={name:"新数据",id:Date.now(),parentId:n.parentId,date:"".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate())},e.next=6,a.insertAt(i,n);case 6:return c=e.sent,l=c.row,e.next=10,a.setActiveRow(l);case 10:e.next=34;break;case 12:if("top"!==r){e.next=24;break}return u={name:"新数据",id:Date.now(),parentId:n.id,date:"".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate())},e.next=16,a.insert(u);case 16:return s=e.sent,d=s.row,e.next=20,a.setTreeExpand(n,!0);case 20:return e.next=22,a.setActiveRow(d);case 22:e.next=34;break;case 24:if("bottom"!==r){e.next=34;break}return p={name:"新数据",id:Date.now(),parentId:n.id,date:"".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate())},e.next=28,a.insertAt(p,-1);case 28:return f=e.sent,m=f.row,e.next=32,a.setTreeExpand(n,!0);case 32:return e.next=34,a.setActiveRow(m);case 34:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.value,e.next=3,r.remove(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.value,r=new Date,a={name:"新数据",id:Date.now(),parentId:null,date:"".concat(r.getFullYear(),"-").concat(r.getMonth()+1,"-").concat(r.getDate())},e.next=5,n.insert(a);case 5:return o=e.sent,i=o.row,e.next=9,n.setActiveRow(i);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=t.value,n=e.getInsertRecords();y["a"].modal.alert("新增：".concat(n.length))},s=function(){var e=t.value,n=e.getRemoveRecords();y["a"].modal.alert(n.length)},d=function(){var e=t.value,n=e.getUpdateRecords();y["a"].modal.alert("更新：".concat(n.length))};return Object(r["u"])((function(){var e=t.value,r=n.value;e.connect(r),a()})),{xTable:t,xToolbar:n,demo1:e,insertEvent:l,searchMethod:o,removeRow:c,insertRow:i,getInsertEvent:u,getRemoveEvent:s,getUpdateEvent:d,demoCodes:['\n        <vxe-toolbar ref="xToolbar" :refresh="{query: searchMethod}" export print custom>\n          <template #buttons>\n            <vxe-button @click="insertEvent">新增</vxe-button>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          show-overflow\n          keep-source\n          ref="xTable"\n          :row-config="{keyField: \'id\'}"\n          :column-config="{resizable: true}"\n          :print-config="{}"\n          :export-config="{}"\n          :loading="demo1.loading"\n          :tree-config="demo1.treeConfig"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}"\n          :data="demo1.tableData">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" tree-node></vxe-column>\n          <vxe-column field="size" title="Size" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.size" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="type" title="Type" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.type" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="date" title="Date" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.date" type="date" transfer></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column title="操作" width="500">\n            <template #default="{ row }">\n              <vxe-button type="text" status="primary" @click="insertRow(row, \'current\')">插入节点</vxe-button>\n              <vxe-button type="text" status="primary" @click="insertRow(row, \'top\')">顶部插入节点</vxe-button>\n              <vxe-button type="text" status="primary" @click="insertRow(row, \'bottom\')">尾部插入子节点</vxe-button>\n              <vxe-button type="text" status="primary" @click="removeRow(row)">删除节点</vxe-button>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref, nextTick } from 'vue'\n        import { VXETable, VxeTableInstance, VxeToolbarInstance } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const demo1 = reactive({\n              loading: false,\n              tableData: [] as any[],\n              treeConfig: {\n                transform: true,\n                rowField: 'id',\n                parentField: 'parentId'\n              }\n            })\n\n            const xTable = ref({} as VxeTableInstance)\n            const xToolbar = ref({} as VxeToolbarInstance)\n\n            const findList = () => {\n              demo1.loading = true\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  demo1.tableData = [\n                    { id: 10000, parentId: null, name: 'vxe-table test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                    { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                    { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                    { id: 20045, parentId: 24300, name: 'vxe-table test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                    { id: 10053, parentId: 24300, name: 'vxe-table test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                    { id: 24330, parentId: 10053, name: 'vxe-table test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                    { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                    { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                    { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                    { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                    { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                    { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                    { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                    { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                    { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                    { id: 24555, parentId: null, name: 'vxe-table test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n                    { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                    { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n                  ]\n                  demo1.loading = false\n                  resolve(null)\n                }, 300)\n              })\n            }\n\n            const searchMethod = () => {\n              const $table = xTable.value\n              // 清除所有状态\n              $table.clearAll()\n              return findList()\n            }\n\n            const insertRow = async (currRow: any, locat: string) => {\n              const $table = xTable.value\n              const date = new Date()\n              // 如果 null 则插入到目标节点顶部\n              // 如果 -1 则插入到目标节点底部\n              // 如果 row 则有插入到效的目标节点该行的位置\n              if (locat === 'current') {\n                const record = {\n                  name: '新数据',\n                  id: Date.now(),\n                  parentId: currRow.parentId, // 父节点必须与当前行一致\n                  date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`\n                }\n                const { row: newRow } = await $table.insertAt(record, currRow)\n                await $table.setActiveRow(newRow) // 插入子节点\n              } else if (locat === 'top') {\n                const record = {\n                  name: '新数据',\n                  id: Date.now(),\n                  parentId: currRow.id, // 需要指定父节点，自动插入该节点中\n                  date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`\n                }\n                const { row: newRow } = await $table.insert(record)\n                await $table.setTreeExpand(currRow, true) // 将父节点展开\n                await $table.setActiveRow(newRow) // 插入子节点\n              } else if (locat === 'bottom') {\n                const record = {\n                  name: '新数据',\n                  id: Date.now(),\n                  parentId: currRow.id, // 需要指定父节点，自动插入该节点中\n                  date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`\n                }\n                const { row: newRow } = await $table.insertAt(record, -1)\n                await $table.setTreeExpand(currRow, true) // 将父节点展开\n                await $table.setActiveRow(newRow) // 插入子节点\n              }\n            }\n\n            const removeRow = async (row: any) => {\n              const $table = xTable.value\n              await $table.remove(row)\n            }\n\n            const insertEvent = async () => {\n              const $table = xTable.value\n              const date = new Date()\n              const record = {\n                name: '新数据',\n                id: Date.now(),\n                parentId: null,\n                date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`\n              }\n              const { row: newRow } = await $table.insert(record)\n              await $table.setActiveRow(newRow)\n            }\n\n            const getInsertEvent = () => {\n              const $table = xTable.value\n              const insertRecords = $table.getInsertRecords()\n              VXETable.modal.alert(`新增：${insertRecords.length}`)\n            }\n\n            const getRemoveEvent = () => {\n              const $table = xTable.value\n              const removeRecords = $table.getRemoveRecords()\n              VXETable.modal.alert(removeRecords.length)\n            }\n\n            const getUpdateEvent = () => {\n              const $table = xTable.value\n              const updateRecords = $table.getUpdateRecords()\n              VXETable.modal.alert(`更新：${updateRecords.length}`)\n            }\n\n            nextTick(() => {\n              // 将表格和工具栏进行关联\n              const $table = xTable.value\n              const $toolbar = xToolbar.value\n              $table.connect($toolbar)\n              findList()\n            })\n\n            return {\n              xTable,\n              xToolbar,\n              demo1,\n              insertEvent,\n              searchMethod,\n              removeRow,\n              insertRow,\n              getInsertEvent,\n              getRemoveEvent,\n              getUpdateEvent\n            }\n          }\n        })\n        "]}}}),g=n("6b0d"),j=n.n(g);const O=j()(x,[["render",h]]);t["default"]=O}}]);