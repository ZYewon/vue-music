(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fadc5194"],{"1da5":function(t,e,a){},"62d7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.hotAlbums?a("div",{attrs:{id:"album"}},[t._l(t.hotAlbums,(function(e){return a("div",{key:e.id,staticClass:"sing-album-box"},[a("div",{staticClass:"sing-album-cover",attrs:{title:e.name},on:{click:function(a){return t.handleToAlbumDetail(e.id)}}},[a("img",{attrs:{src:e.blurPicUrl,alt:""}}),a("span")]),a("div",{staticClass:"album-name-date"},[a("p",{staticClass:"name",attrs:{title:e.name},on:{click:function(a){return t.handleToAlbumDetail(e.id)}}},[a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.name))])]),a("p",{staticClass:"date"},[t._v(t._s(t._f("forMatDate")(e.publishTime)))])])])})),a("div",{staticClass:"fenye"},[a("el-pagination",{attrs:{total:t.albumsSize,background:"",layout:"prev, pager, next","page-size":12},on:{"current-change":t.handleCurrentChange}})],1)],2):t._e()},i=[],s=a("1da1"),u=(a("96cf"),a("4ec3")),r={name:"CAlbum",data:function(){return{hotAlbums:null,albumsSize:0}},created:function(){this.getAlbum(this.$route.query.id)},methods:{getAlbum:function(t,e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i,s,r,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e){n.next=9;break}return n.next=3,Object(u["B"])(t,e);case 3:i=n.sent,s=i.data,a.albumsSize=s.artist.albumSize,a.hotAlbums=s.hotAlbums,n.next=15;break;case 9:return n.next=11,Object(u["B"])(t);case 11:r=n.sent,l=r.data,a.albumsSize=l.artist.albumSize,a.hotAlbums=l.hotAlbums;case 15:case"end":return n.stop()}}),n)})))()},handleCurrentChange:function(t){1===t?this.getAlbum(this.$route.query.id):this.getAlbum(this.$route.query.id,12*(t-1))},handleToAlbumDetail:function(t){this.$router.push({path:"/albumsDetail",query:{id:t}})}}},l=r,c=(a("cae2"),a("2877")),o=Object(c["a"])(l,n,i,!1,null,"67372e18",null);e["default"]=o.exports},cae2:function(t,e,a){"use strict";a("1da5")}}]);
//# sourceMappingURL=chunk-fadc5194.ce1bc322.js.map