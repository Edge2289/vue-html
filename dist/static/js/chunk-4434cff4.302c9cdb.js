(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4434cff4"],{"0e1d":function(e,t,n){},"3b6a":function(e,t,n){"use strict";n("a481"),n("6762"),n("2fdb");var o=n("2b0e");o["default"].directive("dialogDrag",{bind:function(e,t,n,o){var l=e.querySelector(".el-dialog__header"),i=e.querySelector(".el-dialog");l.style.cssText+=";cursor:move;",i.style.cssText+=";top:0px;";var r=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]}}();l.onmousedown=function(e){var t=e.clientX-l.offsetLeft,n=e.clientY-l.offsetTop,o=document.body.clientWidth,s=document.documentElement.clientHeight,a=i.offsetWidth,c=i.offsetHeight,u=i.offsetLeft,m=o-i.offsetLeft-a,f=i.offsetTop,p=s-i.offsetTop-c,d=r(i,"left"),v=r(i,"top");d.includes("%")?(d=+document.body.clientWidth*(+d.replace(/\%/g,"")/100),v=+document.body.clientHeight*(+v.replace(/\%/g,"")/100)):(d=+d.replace(/\px/g,""),v=+v.replace(/\px/g,"")),document.onmousemove=function(e){var o=e.clientX-t,l=e.clientY-n;-o>u?o=-u:o>m&&(o=m),-l>f?l=-f:l>p&&(l=p),i.style.cssText+=";left:".concat(o+d,"px;top:").concat(l+v,"px;")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}})},"4c4f":function(e,t,n){},aa5a:function(e,t,n){"use strict";var o=n("4c4f"),l=n.n(o);l.a},f226:function(e,t,n){"use strict";var o=n("0e1d"),l=n.n(o);l.a},f833:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"菜单名称"}},[n("el-input",{attrs:{placeholder:"请输入菜单名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.title,callback:function(t){e.$set(e.queryParams,"title",t)},expression:"queryParams.title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("el-select",{attrs:{placeholder:"菜单状态",clearable:"",size:"small"},model:{value:e.queryParams.visible,callback:function(t){e.$set(e.queryParams,"visible",t)},expression:"queryParams.visible"}},e._l(e.visibleOptions,(function(e){return n("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.menuList,"row-key":"menuId","tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{prop:"title",label:"菜单名称","show-overflow-tooltip":!0,width:"180px"}}),e._v(" "),n("el-table-column",{attrs:{prop:"icon",label:"图标",align:"center",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("svg-icon",{attrs:{"icon-class":e.row.icon}})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"sort",label:"排序",width:"60px"}}),e._v(" "),n("el-table-column",{attrs:{prop:"permission",label:"权限标识","show-overflow-tooltip":!0}}),e._v(" "),n("el-table-column",{attrs:{prop:"path",label:"路径","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return["A"==t.row.menuType?n("span",[e._v(e._s(t.row.path))]):n("span",[e._v(e._s(t.row.component))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"visible",label:"可见",formatter:e.visibleFormat,width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:"1"===t.row.visible?"danger":"success","disable-transitions":""}},[e._v(e._s(e.visibleFormat(t.row)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("修改")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-plus"},on:{click:function(n){return e.handleAdd(t.row)}}},[e._v("新增")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:e.title,visible:e.open,width:"600px"},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"上级菜单"}},[n("treeselect",{attrs:{options:e.menuOptions,normalizer:e.normalizer,"show-count":!0,placeholder:"选择上级菜单"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"菜单标题",prop:"title"}},[n("el-input",{attrs:{placeholder:"请输入菜单标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"显示排序",prop:"sort"}},[n("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"菜单类型",prop:"menuType"}},[n("el-radio-group",{model:{value:e.form.menuType,callback:function(t){e.$set(e.form,"menuType",t)},expression:"form.menuType"}},[n("el-radio",{attrs:{label:"M"}},[e._v("目录")]),e._v(" "),n("el-radio",{attrs:{label:"C"}},[e._v("菜单")]),e._v(" "),n("el-radio",{attrs:{label:"F"}},[e._v("按钮")]),e._v(" "),n("el-radio",{attrs:{label:"A"}},[e._v("接口")])],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:24}},["A"==e.form.menuType?n("el-form-item",{attrs:{label:"请求方式"}},[n("el-radio-group",{model:{value:e.form.action,callback:function(t){e.$set(e.form,"action",t)},expression:"form.action"}},[n("el-radio",{attrs:{label:"GET"}},[e._v("GET")]),e._v(" "),n("el-radio",{attrs:{label:"POST"}},[e._v("POST")]),e._v(" "),n("el-radio",{attrs:{label:"PUT"}},[e._v("PUT")]),e._v(" "),n("el-radio",{attrs:{label:"DELETE"}},[e._v("DELETE")])],1)],1):e._e()],1),e._v(" "),n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"菜单图标"}},[n("el-popover",{attrs:{placement:"bottom-start",width:"460",trigger:"click"},on:{show:function(t){return e.$refs["iconSelect"].reset()}}},[n("IconSelect",{ref:"iconSelect",on:{selected:e.selected}}),e._v(" "),n("el-input",{attrs:{slot:"reference",placeholder:"点击选择图标",readonly:""},slot:"reference",model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}},[e.form.icon?n("svg-icon",{staticClass:"el-input__icon",staticStyle:{height:"32px",width:"16px"},attrs:{slot:"prefix","icon-class":e.form.icon},slot:"prefix"}):n("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"prefix"},slot:"prefix"})],1)],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},["M"==e.form.menuType||"C"==e.form.menuType?n("el-form-item",{attrs:{label:"路由名称",prop:"menuName"}},[n("el-input",{attrs:{placeholder:"请输入路由名称"},model:{value:e.form.menuName,callback:function(t){e.$set(e.form,"menuName",t)},expression:"form.menuName"}})],1):e._e()],1),e._v(" "),n("el-col",{attrs:{span:12}},["F"!=e.form.menuType?n("el-form-item",{attrs:{label:"路由地址",prop:"path"}},[n("el-input",{attrs:{placeholder:"请输入路由地址"},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1):e._e()],1),e._v(" "),"M"==e.form.menuType||"C"==e.form.menuType?n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"组件路径",prop:"component"}},[n("el-input",{attrs:{placeholder:"请输入组件路径"},model:{value:e.form.component,callback:function(t){e.$set(e.form,"component",t)},expression:"form.component"}})],1)],1):e._e(),e._v(" "),n("el-col",{attrs:{span:12}},["F"==e.form.menuType||"C"==e.form.menuType?n("el-form-item",{attrs:{label:"权限标识"}},[n("el-input",{attrs:{placeholder:"请权限标识",maxlength:"50"},model:{value:e.form.permission,callback:function(t){e.$set(e.form,"permission",t)},expression:"form.permission"}})],1):e._e()],1),e._v(" "),n("el-col",{attrs:{span:24}},["F"!=e.form.menuType?n("el-form-item",{attrs:{label:"菜单状态"}},[n("el-radio-group",{model:{value:e.form.visible,callback:function(t){e.$set(e.form,"visible",t)},expression:"form.visible"}},e._l(e.visibleOptions,(function(t){return n("el-radio",{key:t.dictValue,attrs:{label:t.dictValue}},[e._v(e._s(t.dictLabel))])})),1)],1):e._e()],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},l=[];n("b775");function i(){}function r(){}function s(){}var a=n("ca17"),c=n.n(a),u=(n("542c"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon-body"},[n("el-input",{staticStyle:{position:"relative"},attrs:{clearable:"",placeholder:"请输入图标名称"},on:{clear:e.filterIcons},nativeOn:{input:function(t){return e.filterIcons(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[n("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})]),e._v(" "),n("div",{staticClass:"icon-list"},e._l(e.iconList,(function(t,o){return n("div",{key:o,on:{click:function(n){return e.selectedIcon(t)}}},[n("svg-icon",{staticStyle:{height:"30px",width:"16px"},attrs:{"icon-class":t}}),e._v(" "),n("span",[e._v(e._s(t))])],1)})),0)],1)}),m=[],f=(n("6762"),n("2fdb"),n("7f7f"),n("4917"),n("ac6a"),n("51ff")),p=function(e){return e.keys()},d=/\.\/(.*)\.svg/,v=p(f).map((function(e){return e.match(d)[1]})),b=v,h={name:"IconSelect",data:function(){return{name:"",iconList:b}},methods:{filterIcons:function(){var e=this;this.name?this.iconList=this.iconList.filter((function(t){return t.includes(e.name)})):this.iconList=b},selectedIcon:function(e){this.$emit("selected",e),document.body.click()},reset:function(){this.name="",this.iconList=b}}},_=h,g=(n("aa5a"),n("2877")),y=Object(g["a"])(_,u,m,!1,null,"29eae0d6",null),x=y.exports,w=(n("3b6a"),{name:"Menu",components:{Treeselect:c.a,IconSelect:x},data:function(){return{tabPosition:"left",urls:["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg","https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"],loading:!1,menuList:[],menuOptions:[],title:"",open:!1,visibleOptions:[],queryParams:{title:void 0,visible:void 0},dialogVisible:!1,form:{},rules:{title:[{required:!0,message:"菜单标题不能为空",trigger:"blur"}],sort:[{required:!0,message:"菜单顺序不能为空",trigger:"blur"}]}}},created:function(){this.getList(),this.visibleOptions=[{dictLabel:"开启",dictValue:1},{dictLabel:"关闭",dictValue:0}]},methods:{handleClose:function(e){e()},selected:function(e){this.form.icon=e},getList:function(){},normalizer:function(e){return e.children&&!e.children.length&&delete e.children,{id:e.menuId,label:e.title,children:e.children}},getTreeselect:function(){},visibleFormat:function(e){return"F"===e.menuType?"-- --":this.selectDictLabel(this.visibleOptions,e.visible)},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={menuId:void 0,parentId:0,menuName:void 0,icon:void 0,menuType:"M",sort:0,action:"A"===this.form.menuType?this.form.action:"",isFrame:"1",visible:"0"}},handleQuery:function(){this.getList()},handleAdd:function(e){this.reset(),this.getTreeselect(),null!=e&&(this.form.parentId=e.menuId),this.open=!0,this.title="添加菜单"},handleUpdate:function(e){var t=this;this.reset(),this.getTreeselect(),getMenu(e.menuId).then((function(e){t.form=e.data,t.open=!0,t.title="修改菜单"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!==e.form.menuId?r(e.form).then((function(t){200===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getList()):e.msgError(t.msg)})):i(e.form).then((function(t){200===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getList()):e.msgError(t.msg)})))}))},handleDelete:function(e){var t=this;this.$confirm('是否确认删除名称为"'+e.title+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return s(e.menuId)})).then((function(){t.getList(),t.msgSuccess("删除成功")})).catch((function(){}))}}}),k=w,T=(n("f226"),Object(g["a"])(k,o,l,!1,null,null,null));t["default"]=T.exports}}]);