(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/hackathon-democracia/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0274":function(t,e,a){"use strict";var s=a("225e"),n=a.n(s);n.a},"0922":function(t,e,a){"use strict";var s=a("2c3f"),n=a.n(s);n.a},"0a7b":function(t,e,a){"use strict";var s=a("9100"),n=a.n(s);n.a},"0ec7":function(t,e,a){"use strict";var s=a("f30a"),n=a.n(s);n.a},1542:function(t,e,a){"use strict";var s=a("553b"),n=a.n(s);n.a},"1f46":function(t,e,a){},"225e":function(t,e,a){},"29ea":function(t,e,a){"use strict";var s=a("e46f"),n=a.n(s);n.a},"2c3f":function(t,e,a){},"32da":function(t,e,a){"use strict";var s=a("f7e9"),n=a.n(s);n.a},"4ba2":function(t,e,a){},"553b":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],o=(a("5c0b"),a("2877")),r={},c=Object(o["a"])(r,n,i,!1,null,null,null),l=c.exports,u=a("f309");s["a"].use(u["a"]);var d=new u["a"],m=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"home"}},[a("Navigation"),a("v-main",[a("CouncilHeader",{staticClass:"header"}),a("v-container",{staticClass:"fill-height",staticStyle:{padding:"0"},attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"col-12"},[a("CouncilBody",{staticClass:"body"})],1)],1)],1)],1)],1)},v=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"nav",attrs:{app:"",permanent:"",left:"",fixed:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/women/81.jpg"}})]),a("div",[a("span",{staticClass:"name"},[t._v(t._s(t.name))])])],1),a("v-divider"),a("v-spacer"),t._l(t.councils,(function(e,s){return a("v-list-item",{key:s,attrs:{link:""}},[a("v-list-item-title",{staticClass:"council-title"},[t._v(t._s(e))])],1)}))],2)],1)},h=[],b={name:"Navigation",data:function(){return{name:"Julia",photo:"https://randomuser.me/api/portraits/women/81.jpg",drawer:!0,councils:["Assembleia 20/09"]}}},w=b,x=(a("e605"),a("6544")),C=a.n(x),_=a("ce7e"),g=a("8860"),y=a("da13"),V=a("8270"),k=a("5d23"),D=a("f774"),O=a("2fa4"),j=Object(o["a"])(w,f,h,!1,null,"11212d9c",null),I=j.exports;C()(j,{VDivider:_["a"],VList:g["a"],VListItem:y["a"],VListItemAvatar:V["a"],VListItemTitle:k["a"],VNavigationDrawer:D["a"],VSpacer:O["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"council-header"},[a("v-row",[a("span",{staticClass:"council-name"},[t._v(" "+t._s(t.name)+" ")])]),a("v-row",[a("span",{staticClass:"council-description"},[t._v(" "+t._s(t.description)+" ")])])],1)},A=[],S={name:"CouncilHeader",data:function(){return{name:"Assembleia Geral 20/10",description:"Nesta reunião será discutida a nova proposta de mudança do fornecimento de bosas SAE, a proposta de lei PL529 e afins. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}}},$=S,E=(a("9b5a"),a("0fd9")),T=Object(o["a"])($,L,A,!1,null,"b6d6f2d2",null),B=T.exports;C()(T,{VRow:E["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"council-body"},[a("ViewQueue",{attrs:{queue:t.queue}}),a("div",{staticClass:"active"},[a("ActiveDiscussionCard",{attrs:{discussion:t.current}})],1),a("div",{staticClass:"inactive"},t._l(t.past,(function(t,e){return a("v-row",{key:e},[a("v-col",{staticClass:"col-12 d-flex flex-column align-center"},[a("InactiveDiscussionItem",{attrs:{discussion:t}})],1)],1)})),1),a("QueueAddition",{on:{send:t.addToQueue}})],1)},q=[],J=(a("a4d3"),a("e01a"),a("a15b"),a("d81d"),a("d3b7"),a("25f0"),a("fb2c"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("2909")),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("button",t._g({staticClass:"button"},s),[a("InactiveDiscussionCard",{attrs:{discussion:t.discussion}})],1)]}}]),model:{value:t.isDialogOpen,callback:function(e){t.isDialogOpen=e},expression:"isDialogOpen"}},[a("DiscussionChat",{attrs:{discussion:t.discussion,"is-active":!1},on:{exit:t.close}})],1)},Q=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-text",[a("v-row",[a("v-col",{staticClass:"col-12"},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:t.discussion.photo}})]),a("span",{staticClass:"name"},[t._v(t._s(t.discussion.name))])],1),a("v-list-item",[a("p",{staticClass:"description"},[t._v(t._s(t.discussion.description))])])],1)],1)],1),a("v-divider"),a("v-container",{staticClass:"chat-container"},t._l(t.discussion.comments,(function(e,s){return a("v-row",{key:s,class:(e.owner,"message")},[a("div",{class:e.owner?"my-comment":"others-comment"},[a("span",{staticClass:"author"},[t._v(t._s(e.author))]),a("span",[t._v(t._s(e.text))])])])})),1),a("v-text-field",{attrs:{label:"Message",outlined:""},model:{value:t.comment.text,callback:function(e){t.$set(t.comment,"text",e)},expression:"comment.text"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"confirmation-button",attrs:{text:""},on:{click:t.exit}},[t._v("Sair")]),a("v-btn",{staticClass:"confirmation-button",attrs:{text:""},on:{click:t.cancel}},[t._v("Cancelar")]),a("v-btn",{staticClass:"confirmation-button",attrs:{text:""},on:{click:t.send}},[t._v("Enviar")])],1)],1)},M=[],F={name:"DiscussionChat",props:{discussion:Object,isActive:Boolean},data:function(){return{comment:{text:"",owner:!0,author:"Julia"}}},methods:{exit:function(){this.$emit("exit")},send:function(){this.discussion.comments.push(JSON.parse(JSON.stringify(this.comment))),this.comment.text=""},cancel:function(){this.comment.text=""}}},z=F,H=(a("d9f77"),a("8336")),G=a("b0af"),U=a("99d9"),K=a("62ad"),W=a("a523"),X=a("8654"),Y=Object(o["a"])(z,R,M,!1,null,"7962b75e",null),Z=Y.exports;C()(Y,{VBtn:H["a"],VCard:G["a"],VCardActions:U["a"],VCardText:U["b"],VCol:K["a"],VContainer:W["a"],VDivider:_["a"],VList:g["a"],VListItem:y["a"],VListItemAvatar:V["a"],VRow:E["a"],VSpacer:O["a"],VTextField:X["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"card"},[a("v-row",[a("v-col",{staticClass:"col-10"},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:t.discussion.photo}})]),a("span",{staticClass:"name"},[t._v(t._s(t.discussion.name))])],1),a("v-list-item",[a("p",{staticClass:"description"},[t._v(t._s(t.discussion.description))])])],1)],1),a("v-col",{staticClass:"col-2 d-flex flex-column justify-center align-end "},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",[a("v-chip",{staticClass:"ma-1",attrs:{color:"#2988B1","text-color":"white"}},[a("v-avatar",{attrs:{left:""}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-thumb-up")])],1),t._v(" "+t._s(t.discussion.likes)+" ")],1)],1),a("v-list-item",[a("v-chip",{staticClass:"ma-1",attrs:{color:"#2988B1","text-color":"white"}},[a("v-avatar",{attrs:{left:""}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-thumb-down")])],1),t._v(" "+t._s(t.discussion.dislikes)+" ")],1)],1)],1)],1)],1)],1)},et=[],at={name:"InactiveDiscussionCard",props:{discussion:{type:Object,required:!0}}},st=at,nt=(a("0a7b"),a("8212")),it=a("cc20"),ot=a("132d"),rt=Object(o["a"])(st,tt,et,!1,null,"cc817c40",null),ct=rt.exports;C()(rt,{VAvatar:nt["a"],VCard:G["a"],VChip:it["a"],VCol:K["a"],VIcon:ot["a"],VList:g["a"],VListItem:y["a"],VListItemAvatar:V["a"],VRow:E["a"]});var lt={name:"ActiveDiscussionChatDialog",props:{discussion:Object},components:{DiscussionChat:Z,InactiveDiscussionCard:ct},data:function(){return{isDialogOpen:!1}},methods:{close:function(){this.isDialogOpen=!1}}},ut=lt,dt=(a("0274"),a("169a")),mt=Object(o["a"])(ut,P,Q,!1,null,"3c4e736d",null),pt=mt.exports;C()(mt,{VDialog:dt["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"card"},[a("v-row",[a("v-col",{staticClass:"col-10"},[a("v-list",{staticClass:"py-0"},[a("v-list-item",[a("span",{staticClass:"discussion"},[t._v(" Em discussão ")])]),a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:t.discussion.photo}})]),a("span",{staticClass:"name"},[t._v(t._s(t.discussion.name))])],1),a("v-list-item",[a("v-list-item-icon",[a("ActiveDiscussionChatDialog",{attrs:{discussion:t.discussion}})],1),a("span",{staticClass:"description"},[t._v(t._s(t.discussion.description))])],1)],1)],1),a("v-col",{staticClass:"col-2 d-flex justify-center align-center"},[a("v-row",[a("v-col",{staticClass:"col-4"},[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{size:"36px"}},[t._v("mdi-thumb-up")])],1)],1),a("v-col",{staticClass:"col-2"},[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{size:"36px"}},[t._v("mdi-thumb-down")])],1)],1)],1)],1)],1)],1)},ft=[],ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{icon:""}},s),[a("v-icon",{attrs:{size:"30px"}},[t._v("mdi-comment")])],1)]}}]),model:{value:t.isDialogOpen,callback:function(e){t.isDialogOpen=e},expression:"isDialogOpen"}},[a("DiscussionChat",{attrs:{discussion:t.discussion,"is-active":!0},on:{exit:t.close}})],1)},bt=[],wt={name:"ActiveDiscussionChatDialog",props:{discussion:Object},components:{DiscussionChat:Z},data:function(){return{isDialogOpen:!1}},methods:{close:function(){this.isDialogOpen=!1}}},xt=wt,Ct=(a("0922"),Object(o["a"])(xt,ht,bt,!1,null,"8ab9ebb4",null)),_t=Ct.exports;C()(Ct,{VBtn:H["a"],VDialog:dt["a"],VIcon:ot["a"]});var gt={name:"ActiveDiscussionCard",props:{discussion:Object},components:{ActiveDiscussionChatDialog:_t},data:function(){return{}}},yt=gt,Vt=(a("0ec7"),a("34c3")),kt=Object(o["a"])(yt,vt,ft,!1,null,"e3f78494",null),Dt=kt.exports;C()(kt,{VBtn:H["a"],VCard:G["a"],VCol:K["a"],VIcon:ot["a"],VList:g["a"],VListItem:y["a"],VListItemAvatar:V["a"],VListItemIcon:Vt["a"],VRow:E["a"]});var Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"justify-center"},[a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{small:"",color:"warning",dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[t._v(" "+t._s(t.queue.length)+" pessoas na fila... ")])],1),a("v-navigation-drawer",{staticStyle:{"z-index":"20",width:"380px"},attrs:{app:"",right:"",fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",[a("span",{staticClass:"council-name"},[t._v("Discussões na fila")])]),a("v-divider",{staticStyle:{"margin-bottom":"8px"}}),t._l(t.queue,(function(e,s){var n=e.own,i=e.checksum,o=e.message;return a("v-list-item",{key:s},[a("v-card",{class:n?"own":"",staticStyle:{margin:"8px 0",width:"100%"}},[a("v-card-text",[a("v-row",[a("v-col",{staticClass:"col-9"},[a("kbd",[t._v(t._s(i))])]),a("v-col",{staticClass:"col-3"},[a("span",{staticStyle:{color:"#2988B1"}},[t._v("#"+t._s(s+1))])])],1),n?[a("v-divider"),a("v-row",[a("v-col",{staticClass:"col-12"},[a("p",[t._v(t._s(o))])])],1)]:t._e()],2)],1)],1)}))],2)],1)],1)},jt=[],It={name:"ViewQueue",props:{queue:{type:Array,required:!0}},data:function(){return{drawer:!1}}},Lt=It,At=(a("29ea"),Object(o["a"])(Lt,Ot,jt,!1,null,"1038132a",null)),St=At.exports;C()(At,{VBtn:H["a"],VCard:G["a"],VCardText:U["b"],VCol:K["a"],VDivider:_["a"],VList:g["a"],VListItem:y["a"],VNavigationDrawer:D["a"],VRow:E["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"#FD953A"}},s),[a("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.isDialogOpen,callback:function(e){t.isDialogOpen=e},expression:"isDialogOpen"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Entrar na fila para falar")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Nome",outlined:""},model:{value:t.bundle.name,callback:function(e){t.$set(t.bundle,"name",e)},expression:"bundle.name"}}),a("v-textarea",{attrs:{label:"Descrição",outlined:"",rows:"20"},model:{value:t.bundle.description,callback:function(e){t.$set(t.bundle,"description",e)},expression:"bundle.description"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"confirmation-button",attrs:{text:""},on:{click:t.cancel}},[t._v("Cancelar")]),a("v-btn",{staticClass:"confirmation-button",attrs:{text:""},on:{click:t.send}},[t._v("Enviar")])],1)],1)],1)},Et=[],Tt=(a("b0c0"),{name:"QueueAddition",data:function(){return{bundle:{name:"",description:""},isDialogOpen:!1}},methods:{send:function(){this.isDialogOpen=!1,this.$emit("send",this.bundle),this.reset()},cancel:function(){this.isDialogOpen=!1,this.$emit("cancel",this.bundle),this.reset()},reset:function(){this.bundle.name="",this.bundle.description=""}}}),Bt=Tt,Nt=(a("32da"),a("a844")),qt=Object(o["a"])(Bt,$t,Et,!1,null,"66ea166b",null),Jt=qt.exports;C()(qt,{VBtn:H["a"],VCard:G["a"],VCardActions:U["a"],VCardText:U["b"],VCardTitle:U["c"],VDialog:dt["a"],VIcon:ot["a"],VSpacer:O["a"],VTextField:X["a"],VTextarea:Nt["a"]});var Pt=a("aedf"),Qt={name:"CouncilBody",components:{InactiveDiscussionItem:pt,ActiveDiscussionCard:Dt,ViewQueue:St,QueueAddition:Jt},data:function(){return{active:{},past:Pt,current:{name:"Julia",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",photo:"https://randomuser.me/api/portraits/women/81.jpg",likes:204,dislikes:102,comments:[{text:"ta falando nada com nada minha filha",owner:!1,author:"fulano"}]},queue:[{checksum:"fc3ff98e8c6a0d3087d515c0473f8677"},{checksum:"c2e285cb33cecdbeb83d2189e983a8c0"},{checksum:"459b9511a7f650ebd327889c45cc4e9b"}]}},methods:{onScroll:function(t){this.offsetTop=t.target.scrollTop},addToQueue:function(t){var e=new Uint32Array(4);crypto.getRandomValues(e),this.queue.push({own:!0,message:t.description,checksum:Object(J["a"])(e).map((function(t){return t.toString(16)})).join("")})}}},Rt=Qt,Mt=(a("1542"),Object(o["a"])(Rt,N,q,!1,null,"7dcb2c36",null)),Ft=Mt.exports;C()(Mt,{VCol:K["a"],VRow:E["a"]});var zt={components:{Navigation:I,CouncilHeader:B,CouncilBody:Ft}},Ht=zt,Gt=(a("bb01"),a("7496")),Ut=a("f6c4"),Kt=Object(o["a"])(Ht,p,v,!1,null,"119f67d8",null),Wt=Kt.exports;C()(Kt,{VApp:Gt["a"],VCol:K["a"],VContainer:W["a"],VMain:Ut["a"],VRow:E["a"]}),s["a"].use(m["a"]);var Xt=[{path:"/",name:"Home",component:Wt}],Yt=new m["a"]({routes:Xt}),Zt=Yt;s["a"].config.productionTip=!1,new s["a"]({vuetify:d,router:Zt,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},9100:function(t,e,a){},"965b":function(t,e,a){},"9b5a":function(t,e,a){"use strict";var s=a("f6dc"),n=a.n(s);n.a},"9c0c":function(t,e,a){},aedf:function(t){t.exports=JSON.parse('[{"name":"Gustavo","photo":"https://randomuser.me/api/portraits/men/81.jpg","description":"Lorem ipsum dolor sit amet","likes":204,"dislikes":102,"comments":[{"text":"discordo disso ae","owner":false,"author":"fulano"},{"text":"discorda nada","owner":false,"author":"beltrano"},{"text":"bom ponto","owner":false,"author":"ciclano"}]},{"name":"Júlia","photo":"https://randomuser.me/api/portraits/women/81.jpg","description":"Lorem ipsum dolor sit amet","likes":204,"dislikes":102,"comments":[{"text":"discordo disso ae","owner":false,"author":"fulano"},{"text":"discorda nada","owner":false,"author":"beltrano"},{"text":"bom ponto","owner":false,"author":"ciclano"}]},{"name":"Guilherme","photo":"https://randomuser.me/api/portraits/men/78.jpg","description":"Lorem ipsum dolor sit amet","likes":204,"dislikes":102,"comments":[{"text":"discordo disso ae","owner":false,"author":"fulano"},{"text":"discorda nada","owner":false,"author":"beltrano"},{"text":"bom ponto","owner":false,"author":"ciclano"}]},{"name":"Fernando","photo":"https://randomuser.me/api/portraits/men/82.jpg","description":"Lorem ipsum dolor sit amet","likes":204,"dislikes":102,"comments":[{"text":"discordo disso ae","owner":false,"author":"fulano"},{"text":"discorda nada","owner":false,"author":"beltrano"},{"text":"bom ponto","owner":false,"author":"ciclano"}]},{"name":"Fulano","photo":"https://randomuser.me/api/portraits/men/83.jpg","description":"Lorem ipsum dolor sit amet","likes":204,"dislikes":102,"comments":[{"text":"discordo disso ae","owner":false,"author":"fulano"},{"text":"discorda nada","owner":false,"author":"beltrano"},{"text":"bom ponto","owner":false,"author":"ciclano"}]},{"name":"Ciclano","photo":"https://randomuser.me/api/portraits/men/84.jpg","description":"Lorem ipsum dolor sit amet","likes":204,"dislikes":102,"comments":[{"text":"discordo disso ae","owner":false,"author":"fulano"},{"text":"discorda nada","owner":false,"author":"beltrano"},{"text":"bom ponto","owner":false,"author":"ciclano"}]}]')},bb01:function(t,e,a){"use strict";var s=a("1f46"),n=a.n(s);n.a},d9f77:function(t,e,a){"use strict";var s=a("4ba2"),n=a.n(s);n.a},e46f:function(t,e,a){},e605:function(t,e,a){"use strict";var s=a("965b"),n=a.n(s);n.a},f30a:function(t,e,a){},f6dc:function(t,e,a){},f7e9:function(t,e,a){}});
//# sourceMappingURL=app.67dfb9aa.js.map