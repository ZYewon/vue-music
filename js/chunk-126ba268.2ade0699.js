(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-126ba268"],{"0e84":function(t,e,i){"use strict";i("1d88")},"1d88":function(t,e,i){},"2dbe":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap3 main"},[i("div",{staticClass:"main-left"},[t._t("left")],2),i("div",{staticClass:"main-right"},[t._t("right")],2)])},r=[],n={name:"LayOut"},s=n,c=(i("6c43"),i("2877")),u=Object(c["a"])(s,a,r,!1,null,"4317cbb7",null);e["a"]=u.exports},3008:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"tag-box"}},[i("h3",[t._v(" "+t._s(t.text)+" "),t.showGengduo?i("a",{attrs:{href:"javascript:;"},on:{click:t.handleToSinger}},[t._v(t._s(t.title)+" >")]):t._e()])])},r=[],n={name:"TagsBox",props:{text:{type:String},showGengduo:{type:Boolean,defalult:!1},title:{type:String},path:{type:String},id:{}},methods:{handleToSinger:function(){console.log(this.id),0!==this.id?this.$router.push({path:this.path,query:{id:this.id}}):this.$router.push({path:this.path})}}},s=n,c=(i("89a1"),i("2877")),u=Object(c["a"])(s,a,r,!1,null,"39734295",null);e["a"]=u.exports},"5aff":function(t,e,i){"use strict";i("b40e")},"6c43":function(t,e,i){"use strict";i("f11e")},"7f4f":function(t,e,i){"use strict";i("bf2a")},"89a1":function(t,e,i){"use strict";i("9dc4")},"9dc4":function(t,e,i){},a817:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"singer"}},[i("tab-bar"),i("lay-out",{scopedSlots:t._u([{key:"left",fn:function(){return[t.singerData?i("div",{staticClass:"box"},[i("h3",[t._v(" "+t._s(t.singerData.name)+" "),i("span",[t._v(t._s(t.singerData.transNames[0]))])]),i("div",{staticClass:"sing-img"},[i("img",{attrs:{src:t.singerData.cover,alt:"",title:t.singerData.name}}),t.singerUser?i("a",{staticClass:"user-home",attrs:{href:"javascript:;"},on:{click:function(e){return t.handleToUserHome(t.singerUser.userId)}}},[i("i",{staticClass:"iconfont icon-gerenzhuye"}),t._v(" 个人主页")]):t._e()])]):t._e(),i("singer-tab",{attrs:{tabs:t.tabs}}),i("keep-alive",[i("router-view")],1)]},proxy:!0},{key:"right",fn:function(){return[i("tags-box",{attrs:{text:"相似歌手"}}),i("similar-box",{attrs:{simiArtist:t.simiArtist}})]},proxy:!0}])})],1)},r=[],n=i("1da1"),s=(i("96cf"),i("fb6a"),i("dcc6")),c=i("2dbe"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"singer-tab"}},t._l(t.tabs,(function(e,a){return i("a",{key:a,class:{active:e.path===t.activeClass},attrs:{href:"javascript:;"},on:{click:function(i){return t.tabsClick(e.path)}}},[t._v(t._s(e.name))])})),0)},o=[],l={name:"SingerTab",props:{tabs:{type:Array,default:function(){return null}}},data:function(){return{curIndex:0}},methods:{tabsClick:function(t){this.$router.push({path:t,query:{id:this.$route.query.id}})}},computed:{activeClass:function(){return this.$route.path}}},d=l,f=(i("c11f8"),i("2877")),h=Object(f["a"])(d,u,o,!1,null,"1d93b3d0",null),p=h.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return null!==t.simiArtist?i("div",{attrs:{id:"similar-box"}},t._l(t.simiArtist,(function(e){return i("div",{key:e.id,staticClass:"similar"},[i("div",{staticClass:"similar-img",on:{click:function(i){return t.handleToSinger(e.id)}}},[i("img",{attrs:{src:e.picUrl,alt:"",title:e.name}})]),i("p",{on:{click:function(i){return t.handleToSinger(e.id)}}},[i("a",{attrs:{href:"javascript:;",title:e.name}},[t._v(t._s(e.name))])])])})),0):t._e()},g=[],v={name:"SimilarBox",props:{simiArtist:{type:Array,default:function(){return null}}},methods:{handleToSinger:function(t){this.$router.push({path:"/singer",query:{id:t}})}}},b=v,_=(i("0e84"),Object(f["a"])(b,m,g,!1,null,"34c9c479",null)),y=_.exports,x=i("3008"),S=i("4ec3"),k={name:"SingerDetail",components:{TabBar:s["a"],LayOut:c["a"],SingerTab:p,TagsBox:x["a"],SimilarBox:y},data:function(){return{tabs:[{name:"热门作品",path:"/singer/artist"},{name:"所有专辑",path:"/singer/album"},{name:"相关MV",path:"/singer/mv"},{name:"艺人介绍",path:"/singer/desc"}],singerData:null,singerUser:null,simiArtist:null}},created:function(){this.getSingData(this.$route.query.id)},methods:{getSingData:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var a,r,n,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,Object(S["D"])(t);case 2:return a=i.sent,r=a.data,e.singerData=r.data.artist,e.singerUser=r.data.user,i.next=8,Object(S["w"])(t);case 8:n=i.sent,s=n.data,e.simiArtist=s.artists.slice(0,6);case 11:case"end":return i.stop()}}),i)})))()},handleToUserHome:function(t){this.$router.push({path:"/user/home",query:{id:t}}),console.log(t)}}},w=k,C=(i("7f4f"),Object(f["a"])(w,a,r,!1,null,"7daa7d5b",null));e["default"]=C.exports},b40e:function(t,e,i){},bf2a:function(t,e,i){},c11f8:function(t,e,i){"use strict";i("dd93")},dcc6:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"tab-bar"}},[i("div",{staticClass:"wrap"},[i("ul",{staticClass:"list"},t._l(t.isShow?t.list:[],(function(e,a){return i("li",{key:a,staticClass:"items"},[i("router-link",{attrs:{to:e.path,"active-class":"active"}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])},r=[],n=(i("a9e3"),{name:"TabBar",props:{activeIndex:{type:[Number,String],default:0},isShow:{type:Boolean,default:!0}},data:function(){return{list:[{title:"推荐",path:"/home"},{title:"排行榜",path:"/toplist"},{title:"歌单",path:"/playlist"},{title:"主播电台",path:"/djradio"},{title:"歌手",path:"/artist"},{title:"新碟上架",path:"/album"}]}},methods:{tabItems:function(t){this.$router.push(t)}}}),s=n,c=(i("5aff"),i("2877")),u=Object(c["a"])(s,a,r,!1,null,"b7631f40",null);e["a"]=u.exports},dd93:function(t,e,i){},f11e:function(t,e,i){},fb6a:function(t,e,i){"use strict";var a=i("23e7"),r=i("e8b5"),n=i("68ee"),s=i("861d"),c=i("23cb"),u=i("07fa"),o=i("fc6a"),l=i("8418"),d=i("b622"),f=i("1dde"),h=f("slice"),p=d("species"),m=[].slice,g=Math.max;a({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var i,a,d,f=o(this),h=u(f),v=c(t,h),b=c(void 0===e?h:e,h);if(r(f)&&(i=f.constructor,n(i)&&(i===Array||r(i.prototype))?i=void 0:s(i)&&(i=i[p],null===i&&(i=void 0)),i===Array||void 0===i))return m.call(f,v,b);for(a=new(void 0===i?Array:i)(g(b-v,0)),d=0;v<b;v++,d++)v in f&&l(a,d,f[v]);return a.length=d,a}})}}]);
//# sourceMappingURL=chunk-126ba268.2ade0699.js.map