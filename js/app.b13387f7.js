(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/hackathon-democracia/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0274":function(t,e,a){"use strict";var s=a("225e"),n=a.n(s);n.a},"0859":function(t,e,a){"use strict";var s=a("dda7"),n=a.n(s);n.a},"0922":function(t,e,a){"use strict";var s=a("2c3f"),n=a.n(s);n.a},"0a7b":function(t,e,a){"use strict";var s=a("9100"),n=a.n(s);n.a},"0ec7":function(t,e,a){"use strict";var s=a("f30a"),n=a.n(s);n.a},"12d3":function(t,e,a){"use strict";var s=a("6783"),n=a.n(s);n.a},"1f46":function(t,e,a){},"225e":function(t,e,a){},"2c3f":function(t,e,a){},"4ea6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],o=(a("5c0b"),a("2877")),r={},c=Object(o["a"])(r,n,i,!1,null,null,null),l=c.exports,u=a("f309");s["a"].use(u["a"]);var d=new u["a"],m=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"home"}},[a("Navigation"),a("v-main",[a("CouncilHeader",{staticClass:"header"}),a("v-container",{staticClass:"fill-height",staticStyle:{padding:"0"},attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"col-12"},[a("CouncilBody",{staticClass:"body"})],1)],1)],1)],1)],1)},v=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"nav",attrs:{app:"",permanent:"",left:"",fixed:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/women/81.jpg"}})]),a("div",[a("span",{staticClass:"name"},[t._v(t._s(t.name))])])],1),a("v-divider"),a("v-spacer"),t._l(t.councils,(function(e,s){return a("v-list-item",{key:s,attrs:{link:""}},[a("v-list-item-title",{staticClass:"council-title"},[t._v(t._s(e))])],1)}))],2)],1)},h=[],b={name:"Navigation",data:function(){return{name:"Julia",photo:"https://randomuser.me/api/portraits/women/81.jpg",drawer:!0,councils:["Assembleia 20/10"]}}},w=b,x=(a("12d3"),a("6544")),g=a.n(x),y=a("ce7e"),_=a("8860"),C=a("da13"),k=a("8270"),V=a("5d23"),O=a("f774"),D=a("2fa4"),j=Object(o["a"])(w,f,h,!1,null,"3fab53dc",null),I=j.exports;g()(j,{VDivider:y["a"],VList:_["a"],VListItem:C["a"],VListItemAvatar:k["a"],VListItemTitle:V["a"],VNavigationDrawer:O["a"],VSpacer:D["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"council-header"},[a("v-row",[a("span",{staticClass:"council-name"},[t._v(" "+t._s(t.name)+" ")])]),a("v-row",[a("span",{staticClass:"council-description"},[t._v(" "+t._s(t.description)+" ")])])],1)},A=[],S={name:"CouncilHeader",data:function(){return{name:"Assembleia Geral 20/10",description:"Nesta reunião será discutida a nova proposta de mudança do fornecimento de bosas SAE, a proposta de lei PL529 e afins. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}}},$=S,E=(a("9b5a"),a("0fd9")),T=Object(o["a"])($,L,A,!1,null,"b6d6f2d2",null),B=T.exports;g()(T,{VRow:E["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"council-body"},[a("ViewQueue",{attrs:{queue:t.queue},on:{next:t.nextOnQueue}}),a("div",{staticClass:"active"},[a("ActiveDiscussionCard",{attrs:{discussion:t.current}})],1),a("div",{staticClass:"inactive"},t._l(t.past,(function(t,e){return a("v-row",{key:e},[a("v-col",{staticClass:"col-12 d-flex flex-column align-center"},[a("InactiveDiscussionItem",{attrs:{discussion:t}})],1)],1)})),1),a("QueueAddition",{on:{send:t.addToQueue}})],1)},N=[],q=(a("a4d3"),a("e01a"),a("a15b"),a("d81d"),a("a434"),a("b0c0"),a("d3b7"),a("25f0"),a("fb2c"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("2909")),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("button",t._g({staticClass:"button"},s),[a("InactiveDiscussionCard",{attrs:{discussion:t.discussion}})],1)]}}]),model:{value:t.isDialogOpen,callback:function(e){t.isDialogOpen=e},expression:"isDialogOpen"}},[a("DiscussionChat",{attrs:{discussion:t.discussion,"is-active":!1},on:{exit:t.close}})],1)},Q=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-text",[a("v-row",[a("v-col",{staticClass:"col-12"},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:t.discussion.photo}})]),a("span",{staticClass:"name"},[t._v(t._s(t.discussion.name))])],1),a("v-list-item",[a("v-col",[a("p",{staticClass:"description"},[t._v(t._s(t.discussion.description))])]),t.isActive?t._e():a("v-col",[a("v-chip",{staticClass:"ma-1",attrs:{color:"#2988B1","text-color":"white"}},[a("v-avatar",{attrs:{left:""}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-thumb-up")])],1),t._v(" "+t._s(t.discussion.likes)+" ")],1),a("v-chip",{staticClass:"ma-1",attrs:{color:"#2988B1","text-color":"white"}},[a("v-avatar",{attrs:{left:""}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-thumb-down")])],1),t._v(" "+t._s(t.discussion.dislikes)+" ")],1)],1)],1)],1)],1)],1),a("v-divider"),a("v-container",{staticClass:"chat-container"},t._l(t.discussion.comments,(function(e,s){return a("v-row",{key:s,class:e.owner?"message flex-row-reverse":"message"},[a("div",{class:e.owner?"my-comment":"others-comment"},[a("span",{staticClass:"author"},[t._v(t._s(e.author))]),a("span",[t._v(t._s(e.text))])])])})),1),t.isActive?a("v-text-field",{attrs:{label:"Message",outlined:""},model:{value:t.comment.text,callback:function(e){t.$set(t.comment,"text",e)},expression:"comment.text"}}):t._e()],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"confirmation-button",attrs:{text:""},on:{click:t.exit}},[t._v("Sair")]),t.isActive?a("v-btn",{staticClass:"confirmation-button",attrs:{text:""},on:{click:t.send}},[t._v("Enviar")]):t._e()],1)],1)},M=[],F={name:"DiscussionChat",props:{discussion:Object,isActive:Boolean},data:function(){return{comment:{text:"",owner:!0,author:"Julia"}}},methods:{exit:function(){this.$emit("exit")},send:function(){this.discussion.comments.push(JSON.parse(JSON.stringify(this.comment))),this.comment.text=""}}},z=F,H=(a("7a4c"),a("8212")),G=a("8336"),K=a("b0af"),U=a("99d9"),W=a("cc20"),X=a("62ad"),Y=a("a523"),Z=a("132d"),tt=a("8654"),et=Object(o["a"])(z,R,M,!1,null,"b474aa76",null),at=et.exports;g()(et,{VAvatar:H["a"],VBtn:G["a"],VCard:K["a"],VCardActions:U["a"],VCardText:U["b"],VChip:W["a"],VCol:X["a"],VContainer:Y["a"],VDivider:y["a"],VIcon:Z["a"],VList:_["a"],VListItem:C["a"],VListItemAvatar:k["a"],VRow:E["a"],VSpacer:D["a"],VTextField:tt["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"card"},[a("v-row",[a("v-col",{staticClass:"col-10"},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:t.discussion.photo}})]),a("span",{staticClass:"name"},[t._v(t._s(t.discussion.name))])],1),a("v-list-item",[a("p",{staticClass:"description"},[t._v(t._s(t.discussion.description))])])],1)],1),a("v-col",{staticClass:"col-2 d-flex flex-column justify-center align-end "},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",[a("v-chip",{staticClass:"ma-1",attrs:{color:"#2988B1","text-color":"white"}},[a("v-avatar",{attrs:{left:""}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-thumb-up")])],1),t._v(" "+t._s(t.discussion.likes)+" ")],1)],1),a("v-list-item",[a("v-chip",{staticClass:"ma-1",attrs:{color:"#2988B1","text-color":"white"}},[a("v-avatar",{attrs:{left:""}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-thumb-down")])],1),t._v(" "+t._s(t.discussion.dislikes)+" ")],1)],1)],1)],1)],1)],1)},nt=[],it={name:"InactiveDiscussionCard",props:{discussion:{type:Object,required:!0}}},ot=it,rt=(a("0a7b"),Object(o["a"])(ot,st,nt,!1,null,"cc817c40",null)),ct=rt.exports;g()(rt,{VAvatar:H["a"],VCard:K["a"],VChip:W["a"],VCol:X["a"],VIcon:Z["a"],VList:_["a"],VListItem:C["a"],VListItemAvatar:k["a"],VRow:E["a"]});var lt={name:"ActiveDiscussionChatDialog",props:{discussion:Object},components:{DiscussionChat:at,InactiveDiscussionCard:ct},data:function(){return{isDialogOpen:!1}},methods:{close:function(){this.isDialogOpen=!1}}},ut=lt,dt=(a("0274"),a("169a")),mt=Object(o["a"])(ut,P,Q,!1,null,"3c4e736d",null),pt=mt.exports;g()(mt,{VDialog:dt["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"card"},[a("v-row",[a("v-col",{staticClass:"col-10"},[a("v-list",{staticClass:"py-0"},[a("v-list-item",[a("span",{staticClass:"discussion"},[t._v(" Em discussão ")])]),a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:t.discussion.photo}})]),a("span",{staticClass:"name"},[t._v(t._s(t.discussion.name))])],1),a("v-list-item",[a("v-list-item-icon",[a("ActiveDiscussionChatDialog",{attrs:{discussion:t.discussion}})],1),a("span",{staticClass:"description"},[t._v(t._s(t.discussion.description))])],1)],1)],1),a("v-col",{staticClass:"col-2 d-flex justify-center align-center"},[a("v-row",[a("v-col",{staticClass:"col-4"},[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{size:"36px"}},[t._v("mdi-thumb-up")])],1)],1),a("v-col",{staticClass:"col-2"},[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{size:"36px"}},[t._v("mdi-thumb-down")])],1)],1)],1)],1)],1)],1)},ft=[],ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{icon:""}},s),[a("v-icon",{attrs:{size:"30px"}},[t._v("mdi-comment")])],1)]}}]),model:{value:t.isDialogOpen,callback:function(e){t.isDialogOpen=e},expression:"isDialogOpen"}},[a("DiscussionChat",{attrs:{discussion:t.discussion,"is-active":!0},on:{exit:t.close}})],1)},bt=[],wt={name:"ActiveDiscussionChatDialog",props:{discussion:Object},components:{DiscussionChat:at},data:function(){return{isDialogOpen:!1}},methods:{close:function(){this.isDialogOpen=!1}}},xt=wt,gt=(a("0922"),Object(o["a"])(xt,ht,bt,!1,null,"8ab9ebb4",null)),yt=gt.exports;g()(gt,{VBtn:G["a"],VDialog:dt["a"],VIcon:Z["a"]});var _t={name:"ActiveDiscussionCard",props:{discussion:Object},components:{ActiveDiscussionChatDialog:yt},data:function(){return{}}},Ct=_t,kt=(a("0ec7"),a("34c3")),Vt=Object(o["a"])(Ct,vt,ft,!1,null,"e3f78494",null),Ot=Vt.exports;g()(Vt,{VBtn:G["a"],VCard:K["a"],VCol:X["a"],VIcon:Z["a"],VList:_["a"],VListItem:C["a"],VListItemAvatar:k["a"],VListItemIcon:kt["a"],VRow:E["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"justify-center"},[a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{small:"",color:"warning",dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[t._v(" "+t._s(t.queue.length)+" pessoas na fila... ")])],1),a("v-navigation-drawer",{staticStyle:{"z-index":"20",width:"400px"},attrs:{app:"",right:"",fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",[a("span",{staticClass:"council-name"},[t._v("Discussões na fila")])]),a("v-divider",{staticStyle:{"margin-bottom":"8px"}}),t._l(t.queue,(function(e,s){var n=e.own,i=e.checksum,o=e.message;return a("v-list-item",{key:s},[a("v-card",{class:n?"own":"",staticStyle:{margin:"8px 0",width:"100%"}},[a("v-card-text",[a("v-row",[a("v-col",{staticClass:"col-9"},[a("kbd",[t._v(t._s(i))])]),a("v-col",{staticClass:"col-3"},[a("span",{staticStyle:{color:"#2988B1"}},[t._v("#"+t._s(s+1))])])],1),n?[a("v-divider"),a("v-row",[a("v-col",{staticClass:"col-12"},[a("p",[t._v(t._s(o))])])],1)]:t._e()],2)],1)],1)}))],2),a("v-btn",{attrs:{color:"warning"},on:{click:t.next}},[t._v("Próximo da fila")])],1)],1)},jt=[],It={name:"ViewQueue",props:{queue:{type:Array,required:!0}},data:function(){return{drawer:!1}},methods:{next:function(){this.$emit("next")}}},Lt=It,At=(a("0859"),Object(o["a"])(Lt,Dt,jt,!1,null,"1f4eb365",null)),St=At.exports;g()(At,{VBtn:G["a"],VCard:K["a"],VCardText:U["b"],VCol:X["a"],VDivider:y["a"],VList:_["a"],VListItem:C["a"],VNavigationDrawer:O["a"],VRow:E["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"#FD953A"}},s),[a("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.isDialogOpen,callback:function(e){t.isDialogOpen=e},expression:"isDialogOpen"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Entrar na fila para falar")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Nome",outlined:""},model:{value:t.bundle.name,callback:function(e){t.$set(t.bundle,"name",e)},expression:"bundle.name"}}),a("v-textarea",{attrs:{label:"Descrição",outlined:"",rows:"20"},model:{value:t.bundle.description,callback:function(e){t.$set(t.bundle,"description",e)},expression:"bundle.description"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"confirmation-button",attrs:{text:""},on:{click:t.cancel}},[t._v("Cancelar")]),a("v-btn",{staticClass:"confirmation-button",attrs:{text:""},on:{click:t.send}},[t._v("Enviar")])],1)],1)],1)},Et=[],Tt={name:"QueueAddition",data:function(){return{bundle:{name:"",description:"",photo:"https://randomuser.me/api/portraits/women/81.jpg",likes:0,dislikes:0},isDialogOpen:!1}},methods:{send:function(){this.isDialogOpen=!1,this.$emit("send",this.bundle),this.reset()},cancel:function(){this.isDialogOpen=!1,this.$emit("cancel"),this.reset()},reset:function(){this.bundle.name="",this.bundle.description=""}}},Bt=Tt,Jt=(a("5966"),a("a844")),Nt=Object(o["a"])(Bt,$t,Et,!1,null,"6b255a7e",null),qt=Nt.exports;g()(Nt,{VBtn:G["a"],VCard:K["a"],VCardActions:U["a"],VCardText:U["b"],VCardTitle:U["c"],VDialog:dt["a"],VIcon:Z["a"],VSpacer:D["a"],VTextField:tt["a"],VTextarea:Jt["a"]});var Pt=a("aedf"),Qt={name:"CouncilBody",components:{InactiveDiscussionItem:pt,ActiveDiscussionCard:Ot,ViewQueue:St,QueueAddition:qt},data:function(){return{active:{},past:Pt,current:{name:"Julia",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",photo:"https://randomuser.me/api/portraits/women/81.jpg",likes:204,dislikes:102,comments:[{text:"ta falando nada com nada minha filha",owner:!1,author:"fulano"}],own:!0},queue:[{name:"José",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",photo:"https://randomuser.me/api/portraits/women/81.jpg",likes:204,dislikes:102,comments:[{text:"ta falando nada com nada minha filha",owner:!1,author:"fulano"}],checksum:"fc3ff98e8c6a0d3087d515c0473f8677",own:!1},{name:"Kleber",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",photo:"https://randomuser.me/api/portraits/women/81.jpg",likes:204,dislikes:102,comments:[{text:"ta falando nada com nada minha filha",owner:!1,author:"fulano"}],checksum:"c2e285cb33cecdbeb83d2189e983a8c0",own:!1}]}},methods:{onScroll:function(t){this.offsetTop=t.target.scrollTop},addToQueue:function(t){var e=new Uint32Array(4);crypto.getRandomValues(e),this.queue.push({own:!0,name:t.name,photo:t.photo,likes:t.likes,dislikes:t.dislikes,description:t.description,comments:t.comments,message:t.description,checksum:Object(q["a"])(e).map((function(t){return t.toString(16)})).join("")})},nextOnQueue:function(){this.past.splice(0,0,JSON.parse(JSON.stringify(this.current))),this.current=JSON.parse(JSON.stringify(this.queue[0])),this.queue.splice(0,1)}}},Rt=Qt,Mt=(a("944e"),Object(o["a"])(Rt,J,N,!1,null,"aa2247c4",null)),Ft=Mt.exports;g()(Mt,{VCol:X["a"],VRow:E["a"]});var zt={components:{Navigation:I,CouncilHeader:B,CouncilBody:Ft}},Ht=zt,Gt=(a("bb01"),a("7496")),Kt=a("f6c4"),Ut=Object(o["a"])(Ht,p,v,!1,null,"119f67d8",null),Wt=Ut.exports;g()(Ut,{VApp:Gt["a"],VCol:X["a"],VContainer:Y["a"],VMain:Kt["a"],VRow:E["a"]}),s["a"].use(m["a"]);var Xt=[{path:"/",name:"Home",component:Wt}],Yt=new m["a"]({routes:Xt}),Zt=Yt;s["a"].config.productionTip=!1,new s["a"]({vuetify:d,router:Zt,render:function(t){return t(l)}}).$mount("#app")},"57e3":function(t,e,a){},5966:function(t,e,a){"use strict";var s=a("4ea6"),n=a.n(s);n.a},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},6783:function(t,e,a){},"72ca":function(t,e,a){},"7a4c":function(t,e,a){"use strict";var s=a("57e3"),n=a.n(s);n.a},9100:function(t,e,a){},"944e":function(t,e,a){"use strict";var s=a("72ca"),n=a.n(s);n.a},"9b5a":function(t,e,a){"use strict";var s=a("f6dc"),n=a.n(s);n.a},"9c0c":function(t,e,a){},aedf:function(t){t.exports=JSON.parse('[{"name":"Gustavo","photo":"https://randomuser.me/api/portraits/men/81.jpg","description":"Lorem ipsum dolor sit amet","likes":204,"dislikes":102,"comments":[{"text":"discordo disso ae","owner":false,"author":"fulano"},{"text":"discorda nada","owner":false,"author":"beltrano"},{"text":"bom ponto","owner":false,"author":"ciclano"}]},{"name":"Júlia","photo":"https://randomuser.me/api/portraits/women/81.jpg","description":"Lorem ipsum dolor sit amet","likes":204,"dislikes":102,"comments":[{"text":"discordo disso ae","owner":false,"author":"fulano"},{"text":"discorda nada","owner":false,"author":"beltrano"},{"text":"bom ponto","owner":false,"author":"ciclano"}]},{"name":"Guilherme","photo":"https://randomuser.me/api/portraits/men/78.jpg","description":"Lorem ipsum dolor sit amet","likes":204,"dislikes":102,"comments":[{"text":"discordo disso ae","owner":false,"author":"fulano"},{"text":"discorda nada","owner":false,"author":"beltrano"},{"text":"bom ponto","owner":false,"author":"ciclano"}]},{"name":"Fernando","photo":"https://randomuser.me/api/portraits/men/82.jpg","description":"Lorem ipsum dolor sit amet","likes":204,"dislikes":102,"comments":[{"text":"discordo disso ae","owner":false,"author":"fulano"},{"text":"discorda nada","owner":false,"author":"beltrano"},{"text":"bom ponto","owner":false,"author":"ciclano"}]},{"name":"Fulano","photo":"https://randomuser.me/api/portraits/men/83.jpg","description":"Lorem ipsum dolor sit amet","likes":204,"dislikes":102,"comments":[{"text":"discordo disso ae","owner":false,"author":"fulano"},{"text":"discorda nada","owner":false,"author":"beltrano"},{"text":"bom ponto","owner":false,"author":"ciclano"}]},{"name":"Ciclano","photo":"https://randomuser.me/api/portraits/men/84.jpg","description":"Lorem ipsum dolor sit amet","likes":204,"dislikes":102,"comments":[{"text":"discordo disso ae","owner":false,"author":"fulano"},{"text":"discorda nada","owner":false,"author":"beltrano"},{"text":"bom ponto","owner":false,"author":"ciclano"}]}]')},bb01:function(t,e,a){"use strict";var s=a("1f46"),n=a.n(s);n.a},dda7:function(t,e,a){},f30a:function(t,e,a){},f6dc:function(t,e,a){}});
//# sourceMappingURL=app.b13387f7.js.map