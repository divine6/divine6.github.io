(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pro-pagination"],{"210c":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.checkDataValidity?n("el-pagination",e._g(e._b({attrs:{"page-sizes":[10,20,30],layout:"total, sizes, prev, pager, next, jumper","current-page":e.currentValue.current,"page-size":e.currentValue.size},on:{"update:currentPage":function(t){return e.$set(e.currentValue,"current",t)},"update:current-page":function(t){return e.$set(e.currentValue,"current",t)},"update:pageSize":function(t){return e.$set(e.currentValue,"size",t)},"update:page-size":function(t){return e.$set(e.currentValue,"size",t)}}},"el-pagination",e.$attrs,!1),e.$listeners)):e._e()},u=[],a=n("9ab4"),c=n("1b40"),i=n("307f"),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a["c"])(t,e),Object.defineProperty(t.prototype,"checkDataValidity",{get:function(){var e=this.currentValue,t=this.$attrs.total;if("number"!==typeof t)return!1;if(!e)return!1;var n=e.current,r=e.size;return"number"===typeof n&&"number"===typeof r},enumerable:!1,configurable:!0}),t=Object(a["b"])([c["a"]],t),t}(Object(c["b"])(i["a"])),l=o,p=l,s=n("0c7c"),b=Object(s["a"])(p,r,u,!1,null,null,null);t["a"]=b.exports},"307f":function(e,t,n){"use strict";var r=n("9ab4"),u=n("1b40"),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r["c"])(t,e),Object.defineProperty(t.prototype,"currentValue",{get:function(){return this.bindValue},set:function(e){this.$emit("valueUpdate",e)},enumerable:!1,configurable:!0}),Object(r["b"])([Object(u["d"])(),Object(u["c"])("valueUpdate")],t.prototype,"bindValue",void 0),t=Object(r["b"])([u["a"]],t),t}(u["e"]);t["a"]=a},"570d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("frame-view",[n("pro-pagination",{attrs:{total:100},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)},u=[],a=n("9ab4"),c=n("1b40"),i=n("210c"),o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.page={current:1,size:10},t}return Object(a["c"])(t,e),t=Object(a["b"])([Object(c["a"])({components:{ProPagination:i["a"]}})],t),t}(c["e"]),l=o,p=l,s=n("0c7c"),b=Object(s["a"])(p,r,u,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=pro-pagination.99b92553.js.map