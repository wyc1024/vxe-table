(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cca602c"],{"228f":function(e,l,a){"use strict";a("f4a7")},"2dd9":function(e,l,a){"use strict";a.r(l);var n=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[a("h2",[e._v(e._s(e.$t("app.aside.nav.switch")))]),a("p",{staticClass:"tip"},[e._v("开关按钮")]),a("p",[a("vxe-switch",{model:{value:e.value1,callback:function(l){e.value1=l},expression:"value1"}}),a("vxe-switch",{attrs:{size:"medium"},model:{value:e.value2,callback:function(l){e.value2=l},expression:"value2"}}),a("vxe-switch",{attrs:{size:"small"},model:{value:e.value3,callback:function(l){e.value3=l},expression:"value3"}}),a("vxe-switch",{attrs:{size:"mini"},model:{value:e.value4,callback:function(l){e.value4=l},expression:"value4"}})],1),a("p",[a("vxe-switch",{attrs:{"on-label":"是","off-label":"否"},model:{value:e.value5,callback:function(l){e.value5=l},expression:"value5"}}),a("vxe-switch",{attrs:{size:"medium","on-label":"是","off-label":"否"},model:{value:e.value6,callback:function(l){e.value6=l},expression:"value6"}}),a("vxe-switch",{attrs:{size:"small","on-label":"开","off-label":"关"},model:{value:e.value7,callback:function(l){e.value7=l},expression:"value7"}}),a("vxe-switch",{attrs:{size:"mini","on-label":"开","off-label":"关"},model:{value:e.value8,callback:function(l){e.value8=l},expression:"value8"}})],1),a("p",[a("vxe-switch",{attrs:{"on-label":"开","on-value":"Y","off-label":"关","off-value":"N"},model:{value:e.value9,callback:function(l){e.value9=l},expression:"value9"}}),a("vxe-switch",{attrs:{"on-label":"打开","on-value":1,"off-label":"关闭","off-value":0},model:{value:e.value10,callback:function(l){e.value10=l},expression:"value10"}}),a("vxe-switch",{attrs:{disabled:""},model:{value:e.value11,callback:function(l){e.value11=l},expression:"value11"}}),a("vxe-switch",{attrs:{"on-label":"是","off-label":"否",disabled:""},model:{value:e.value12,callback:function(l){e.value12=l},expression:"value12"}})],1),a("p",[a("vxe-switch",{attrs:{"on-icon":"fa fa-check","off-icon":"fa fa-close"},model:{value:e.value13,callback:function(l){e.value13=l},expression:"value13"}}),a("vxe-switch",{attrs:{"on-label":"app.body.label.on","off-label":"app.body.label.off","on-icon":"fa fa-bell","off-icon":"fa fa-bell-slash"},model:{value:e.value14,callback:function(l){e.value14=l},expression:"value14"}}),a("vxe-switch",{staticClass:"my-switch1",attrs:{"on-label":"app.body.label.on","off-label":"app.body.label.off"},model:{value:e.value15,callback:function(l){e.value15=l},expression:"value15"}}),a("vxe-switch",{staticClass:"my-switch2",attrs:{"on-label":"app.body.label.on","off-label":"app.body.label.off"},model:{value:e.value16,callback:function(l){e.value16=l},expression:"value16"}}),a("vxe-switch",{staticClass:"my-switch3",attrs:{"on-label":"ON","off-label":"OFF"},model:{value:e.value17,callback:function(l){e.value17=l},expression:"value17"}})],1),e._m(0),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])])},o=[function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("pre",[e._v("    "),a("code",[e._v("\n      | Tab | 切换到上一个 |\n      | Shift Tab | 切换到下一个 |\n      | Spacebar | 按下点击 |\n      | Enter | 点击 |\n    ")]),e._v("\n  ")])}],v=(a("d3b7"),a("159b"),a("a630"),a("3ca3"),a("fb6a"),a("f4e8")),t=a.n(v),s={data:function(){return{value1:null,value2:null,value3:null,value4:null,value5:!0,value6:null,value7:null,value8:null,value9:"Y",value10:1,value11:!1,value12:!0,value13:!1,value14:!1,value15:!0,value16:!1,value17:!1,demoCodes:['\n        <p>\n          <vxe-switch v-model="value1"></vxe-switch>\n          <vxe-switch v-model="value2" size="medium"></vxe-switch>\n          <vxe-switch v-model="value3" size="small"></vxe-switch>\n          <vxe-switch v-model="value4" size="mini"></vxe-switch>\n        </p>\n\n        <p>\n          <vxe-switch v-model="value5" on-label="是" off-label="否"></vxe-switch>\n          <vxe-switch v-model="value6" size="medium" on-label="是" off-label="否"></vxe-switch>\n          <vxe-switch v-model="value7" size="small" on-label="开" off-label="关"></vxe-switch>\n          <vxe-switch v-model="value8" size="mini" on-label="开" off-label="关"></vxe-switch>\n        </p>\n\n        <p>\n          <vxe-switch v-model="value9" on-label="开" on-value="Y" off-label="关" off-value="N"></vxe-switch>\n          <vxe-switch v-model="value10" on-label="打开" :on-value="1" off-label="关闭" :off-value="0"></vxe-switch>\n          <vxe-switch v-model="value11" disabled></vxe-switch>\n          <vxe-switch v-model="value12" on-label="是" off-label="否" disabled></vxe-switch>\n        </p>\n\n        <p>\n          <vxe-switch v-model="value13" on-icon="fa fa-check" off-icon="fa fa-close"></vxe-switch>\n          <vxe-switch v-model="value14" on-label="app.body.label.on" off-label="app.body.label.off" on-icon="fa fa-bell" off-icon="fa fa-bell-slash"></vxe-switch>\n          <vxe-switch v-model="value15" on-label="app.body.label.on" off-label="app.body.label.off" class="my-switch1"></vxe-switch>\n          <vxe-switch v-model="value16" on-label="app.body.label.on" off-label="app.body.label.off" class="my-switch2"></vxe-switch>\n          <vxe-switch v-model="value17" on-label="ON" off-label="OFF" class="my-switch3"></vxe-switch>\n        </p>\n        ',"\n        export default {\n          data () {\n            return {\n              value1: null,\n              value2: null,\n              value3: null,\n              value4: null,\n              value5: true,\n              value6: null,\n              value7: null,\n              value8: null,\n              value9: 'Y',\n              value10: 1,\n              value11: false,\n              value12: true,\n              value13: false,\n              value14: false,\n              value15: true,\n              value16: false,\n              value17: false\n            }\n          }\n        }\n        ","\n        .my-switch1.vxe-switch .vxe-switch--button {\n          background-color: #13ce66;\n        }\n        .my-switch2.vxe-switch.is--on .vxe-switch--button {\n          background-color: #13ce66;\n        }\n        .my-switch2.vxe-switch.is--off .vxe-switch--button {\n          background-color: #ff4949;\n        }\n        .my-switch3.vxe-switch .vxe-switch--button {\n          background-color: #7b7b48;\n        }\n        .my-switch3.vxe-switch .vxe-switch--icon {\n          background-color: rgba(0,0,0,.5);\n        }\n        .my-switch3.vxe-switch .vxe-switch--label {\n          color: #c0c4cc;\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){t.a.highlightBlock(e)}))},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,8)}},c=s,u=(a("228f"),a("2877")),i=Object(u["a"])(c,n,o,!1,null,null,null);l["default"]=i.exports},"4df4":function(e,l,a){"use strict";var n=a("da84"),o=a("0366"),v=a("c65b"),t=a("7b0b"),s=a("9bdd"),c=a("e95a"),u=a("68ee"),i=a("07fa"),f=a("8418"),b=a("9a1f"),r=a("35a1"),d=n.Array;e.exports=function(e){var l=t(e),a=u(this),n=arguments.length,h=n>1?arguments[1]:void 0,w=void 0!==h;w&&(h=o(h,n>2?arguments[2]:void 0));var x,m,p,y,k,_,z=r(l),C=0;if(!z||this==d&&c(z))for(x=i(l),m=a?new this(x):d(x);x>C;C++)_=w?h(l[C],C):l[C],f(m,C,_);else for(y=b(l,z),k=y.next,m=a?new this:[];!(p=v(k,y)).done;C++)_=w?s(y,h,[p.value,C],!0):p.value,f(m,C,_);return m.length=C,m}},"9bdd":function(e,l,a){var n=a("825a"),o=a("2a62");e.exports=function(e,l,a,v){try{return v?l(n(a)[0],a[1]):l(a)}catch(t){o(e,"throw",t)}}},a630:function(e,l,a){var n=a("23e7"),o=a("4df4"),v=a("1c7e"),t=!v((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:t},{from:o})},f4a7:function(e,l,a){}}]);