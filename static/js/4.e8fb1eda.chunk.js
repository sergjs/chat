(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[4],{292:function(e,a,s){e.exports={left_coloumn:"Dialogs_left_coloumn__3P28h",dialog:"Dialogs_dialog__1N4rY",active:"Dialogs_active__YAswg",item:"Dialogs_item__1Ucoc",link:"Dialogs_link__2GnBq",message:"Dialogs_message__28RSF",friend:"Dialogs_friend__sO7UC",picter:"Dialogs_picter__MJb8p",new_massage:"Dialogs_new_massage__2eVzU",input_massage:"Dialogs_input_massage__281mW"}},298:function(e,a,s){"use strict";s.r(a);s(0);var i=s(292),t=s.n(i),n=s(14),c=s(1),l=function(e){return Object(c.jsxs)("div",{className:t.a.item,children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{className:t.a.picter,src:e.ava,alt:"none"})}),Object(c.jsx)("div",{children:Object(c.jsx)(n.b,{className:t.a.link,to:"/dialogs/"+e.id,children:e.name})})]})},o=function(e){e.vr;return Object(c.jsx)("div",{className:t.a.vr,children:Object(c.jsx)("div",{className:t.a.message,children:e.message})})},r=s(124),g=s(125),m=s(64),d=s(65),j=Object(d.a)(10),_=Object(g.a)({form:"newMessageForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{className:t.a.new_massage,children:Object(c.jsx)(r.a,{component:m.b,validate:[d.b,j],name:"newDialogsText",placeholder:"Enter your message"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"New message"})})]})})),b=function(e){var a=e.messageData.map((function(e){return Object(c.jsx)(o,{message:e.message,vr:e.vr})})),s=e.messageDialogs.map((function(e){return Object(c.jsx)(l,{name:e.name,id:e.id,ava:e.ava})}));return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:t.a.dialog,children:[Object(c.jsx)("div",{className:t.a.left_coloumn,children:s}),Object(c.jsxs)("div",{className:t.a.mes,children:[a,Object(c.jsx)(_,{onSubmit:function(a){e.AddMessage(a.newDialogsText)}})]})]})})},u=s(123),O=s(13),x=s(133),v=s(9);a.default=Object(v.d)(Object(O.b)((function(e){return{messageData:e.dialogsPage.messageDialogs,messageDialogs:e.dialogsPage.dialogsData,newDialogsText:e.dialogsPage.newDialogsText}}),(function(e){return{AddMessage:function(a){e(Object(u.a)(a))}}})),x.a)(b)}}]);
//# sourceMappingURL=4.e8fb1eda.chunk.js.map