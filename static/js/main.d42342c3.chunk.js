(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(38),a=n(3),s={dialogsData:[{id:1,name:"Andrey",ava:"https://cspromogame.ru//storage/upload_images/avatars/3975.jpg"},{id:2,name:"Natasha",ava:"https://cspromogame.ru//storage/upload_images/avatars/921.jpg"},{id:3,name:"Misha",ava:"https://cspromogame.ru//storage/upload_images/avatars/3836.jpg"},{id:4,name:"Vovay"},{id:5,name:"Kostyan"}],messageDialogs:[{id:1,message:"Hi",vr:"im"},{id:2,message:"Hello, how are you",vr:"friend"},{id:3,message:"Ou, I am fine, when we meet",vr:"im"},{id:4,message:"Ou meet",vr:"im"},{id:5,message:"Ok, i agree",vr:"friend"}]},c=function(e){return{type:"ADD-MESSAGE",newDialogsText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;if("ADD-MESSAGE"===t.type){var n={id:6,message:t.newDialogsText},c=Object(a.a)({},e);return c.messageDialogs=Object(r.a)(e.messageDialogs),c.messageDialogs.push(n),c.newDialogsText="",c}return e}},130:function(e,t,n){e.exports={error:"Login_error__n3G2Z"}},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(3),a=n(29),s=n(30),c=n(32),i=n(31),o=n(0),u=n.n(o),l=n(13),d=n(11),j=n(1),f=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(i.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(j.jsx)(e,Object(r.a)({},this.props)):Object(j.jsx)(d.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(f)(t)}},15:function(e,t,n){e.exports={foto:"Users_foto__fUISg",container:"Users_container__QczYh",block_rigth:"Users_block_rigth__dpzj-",fullname:"Users_fullname__3utIB",status:"Users_status__1bfVX",location:"Users_location__C3ZmN",location_country:"Users_location_country__1ERmQ",on_position:"Users_on_position__JMG_e",passiv:"Users_passiv__264j-",image:"Users_image__1Ecd6",leftRigthButton:"Users_leftRigthButton__3Tai-",Paginator:"Users_Paginator__2UFwW",button:"Users_button__37FRa"}},163:function(e,t,n){},164:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"h",(function(){return j}));var r=n(128),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"cdc1828d-6892-4ee0-a467-6625b4bde897"}}),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.get("/users?page=".concat(e,"&count=$(pageSize)")).then((function(e){return e.data}))},c=function(e){return console.warn("Obsolete method. Please profileAPI object"),j.getProfile(e)},i=function(e){return a.post("/follow/".concat(e))},o=function(e){return a.delete("/follow/".concat(e),{})},u=function(){return a.get("/auth/me")},l=function(e,t,n){return a.post("/auth/login",{email:e,password:t,rememberMe:n})},d=function(){return a.delete("/auth/login")},j={getProfile:function(e){return a.get("/profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return a.get("/profile/status/"+e)},updateStatus:function(e){return a.put("/profile/status/",{status:e})}}},18:function(e,t,n){e.exports={nav:"Navbar_nav__38jwP",item:"Navbar_item__36i4H",active:"Navbar_active__Kr_JH"}},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(62),c=n.n(s),i=(n(163),n(29)),o=n(30),u=n(32),l=n(31),d=(n(164),n(3)),j=n(87),f=n.n(j),b=n.p+"static/media/homer.28c1d379.jpg",p=n(14),h=n(1),O=function(e){return Object(h.jsxs)("header",{className:f.a.header,children:[Object(h.jsx)("img",{src:b,alt:""}),Object(h.jsx)("div",{className:f.a.login,children:e.isAuth?Object(h.jsxs)("div",{children:["  ",e.login," ",Object(h.jsx)("br",{})," ",Object(h.jsx)("button",{onClick:e.logOut,children:"logout"})," "]}):Object(h.jsx)(p.b,{to:"/login",children:"LOGIN"})})]})},g=n(10),m=n.n(g),v=n(21),x=n(53),_=n(17),w={id:null,email:null,login:null,isAuth:!1},P=function(e,t,n,r){return{type:"SET_ACTION_DATE",date:{id:e,email:t,login:n,isAuth:r}}},S=function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,a,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.c)();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,c=r.login,t(P(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTION_DATE":case"SET_AUTH":return Object(d.a)(Object(d.a)({},e),t.date);default:return e}},N=n(13),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)(O,Object(d.a)({},this.props))}}]),n}(a.a.Component),C=Object(N.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logOut:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)();case 2:0===e.sent.data.resultCode&&t(P(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(E),U=n(18),T=n.n(U),k=function(){return Object(h.jsxs)("nav",{className:T.a.nav,children:[Object(h.jsx)("div",{children:Object(h.jsx)(p.b,{to:"/Profile",className:T.a.item,activeClassName:T.a.active,children:" Profile "})}),Object(h.jsx)("div",{children:Object(h.jsx)(p.b,{to:"/users",className:T.a.item,activeClassName:T.a.active,children:"Users"})}),Object(h.jsxs)("div",{children:[" ",Object(h.jsx)(p.b,{to:"/Dialogs",className:T.a.item,activeClassName:T.a.active,children:" Message "})]}),Object(h.jsxs)("div",{children:[" ",Object(h.jsx)(p.b,{to:"/News",className:T.a.item,activeClassName:T.a.active,children:" News "})]}),Object(h.jsxs)("div",{children:[" ",Object(h.jsx)(p.b,{to:"/Music",className:T.a.item,activeClassName:T.a.active,children:" Music "})]}),Object(h.jsxs)("div",{children:[" ",Object(h.jsx)(p.b,{to:"/Settings",className:T.a.item,activeClassName:T.a.active,children:" Settings "})]})]})},A=n(11),D=(n(189),function(e){return Object(h.jsx)("div",{children:" News "})}),I=(n(190),function(e){return Object(h.jsx)("div",{children:" Music "})}),L=(n(191),function(e){return Object(h.jsx)("div",{children:" Settings  "})}),z=n(38),F=function(e,t,n,r){return e.map((function(e){return e[t]===n?Object(d.a)(Object(d.a)({},e),r):e}))},R={users:[],pageSize:3,tottalUser:0,currentPage:1,isFetching:!0,followProgress:[]},M=function(e){return{type:"FOLLOW",userid:e}},G=function(e){return{type:"UNFOLLOW",userid:e}},H=function(e){return{type:"CHANGE_IS_FETCHING",isFetching:e}},W=function(e,t){return{type:"FOLLOW_PROPGRESS",isFetching:e,userid:t}},K=function(){var e=Object(v.a)(m.a.mark((function e(t,n,r,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(W(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(W(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(d.a)(Object(d.a)({},e),{},{users:F(e.users,"id",t.userid,{followed:!0})});case"UNFOLLOW":return Object(d.a)(Object(d.a)({},e),{},{users:F(e.users,"id",t.userid,{followed:!1})});case"SETUSERS":return Object(d.a)(Object(d.a)({},e),{},{users:Object(z.a)(t.users)});case"CURRENT_PAGE_CLICK":return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case"TOTAL_USER":return Object(d.a)(Object(d.a)({},e),{},{tottalUser:t.tottalUser});case"CHANGE_IS_FETCHING":return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case"FOLLOW_PROPGRESS":return Object(d.a)(Object(d.a)({},e),{},{followProgress:t.isFetching?[].concat(Object(z.a)(e.followProgress),[t.userid]):e.followProgress.filter((function(e){return e!==t.userid}))});default:return e}},J=n(15),X=n.n(J),Z=n.p+"static/media/images.46fa149d.jpg",V=n(126),q=function(e,t){for(var n=t.portionSize,a=void 0===n?10:n,s=Math.ceil(e.tottalUser/e.pageSize),c=[],i=1;i<=s;i++)c.push(i);var o=Math.ceil(s/a),u=Object(r.useState)(1),l=Object(V.a)(u,2),d=l[0],j=l[1],f=(d-1)*a+1,b=d*a;return Object(h.jsxs)("div",{className:X.a.Paginator,children:[Object(h.jsx)("div",{children:d>1&&Object(h.jsx)("button",{onClick:function(){j(d-1)},children:" left"})}),Object(h.jsx)("div",{children:c.filter((function(e){return e>=f&&e<=b})).map((function(t){return Object(h.jsx)("span",{className:e.currentPage===t?X.a.on_position:X.a.passiv,onClick:function(n){e.newPageChanged(t)},children:t})}))}),Object(h.jsx)("div",{children:d<o&&Object(h.jsx)("button",{onClick:function(){j(d+1)},children:" rigth"})})]})},Q=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(q,{tottalUser:e.tottalUser,pageSize:e.pageSize,currentPage:e.currentPage,newPageChanged:e.newPageChanged}),Object(h.jsx)("div",{children:e.users.map((function(t){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:X.a.container,children:[Object(h.jsxs)("div",{className:X.a.block_left,children:[Object(h.jsx)("div",{children:Object(h.jsx)(p.b,{to:"Profile/"+t.id,children:Object(h.jsx)("img",{src:null!=t.photos.small?t.photos.small:Z,alt:"",className:X.a.foto})})}),Object(h.jsx)("div",{children:t.followed?Object(h.jsx)("button",{disabled:e.followProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:" Unfollow "}):Object(h.jsx)("button",{disabled:e.followProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:" follow"})})]}),Object(h.jsxs)("div",{className:X.a.block_rigth,children:[Object(h.jsxs)("div",{className:X.a.fullname,children:[t.followed," "]}),Object(h.jsxs)("div",{className:X.a.status,children:[t.status," "]}),Object(h.jsxs)("div",{className:X.a.location,children:[t.name," "]}),Object(h.jsxs)("div",{className:X.a.location_country,children:["u.location.country"," "]})]})]})},t.id)}))})]})},Y=n(63),$=n(9),ee=(n(133),n(129)),te=Object(ee.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ne=function(e){return e.usersPage.pageSize},re=function(e){return e.usersPage.tottalUser},ae=function(e){return e.usersPage.currentPage},se=function(e){return e.usersPage.isFetching},ce=function(e){return e.usersPage.followProgress},ie=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).newPageChanged=function(t){e.props.currentPageClick(t),e.props.getUsersThunkCreator(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.props.isFetching?Object(h.jsx)("img",{src:Y.a,className:X.a.image}):null,Object(h.jsx)(Q,{newPageChanged:this.newPageChanged,currentPage:this.props.currentPage,tottalUser:this.props.tottalUser,pageSize:this.props.pageSize,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followProgress:this.props.followProgress})]})}}]),n}(a.a.Component),oe=Object($.d)(Object(N.b)((function(e){return{users:te(e),pageSize:ne(e),tottalUser:re(e),currentPage:ae(e),isFetching:se(e),followProgress:ce(e)}}),{follow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:K(n,e,_.b.bind(_.f),M);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:K(n,e,_.f.bind(_.b),G);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},currentPageClick:function(e){return{type:"CURRENT_PAGE_CLICK",currentPage:e}},getUsersThunkCreator:function(e,t){return function(){var n=Object(v.a)(m.a.mark((function n(r){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(H(!0)),n.next=3,Object(_.g)(e,t);case 3:a=n.sent,r({type:"SETUSERS",users:a.items}),r({type:"TOTAL_USER",tottalUser:a.totalCount}),r(H(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ie),ue=n(124),le=n(125),de=n(64),je=n(65),fe=n(130),be=n.n(fe),pe=(Object(je.a)(110),Object(le.a)({form:"login"})((function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(ue.a,{component:de.a,validate:[je.b],name:"email",placeholder:"email"})}),Object(h.jsx)("div",{children:Object(h.jsx)(ue.a,{component:de.a,validate:[je.b],name:"password",placeholder:"password",type:"password"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)(ue.a,{component:de.a,name:"rememberMe ",type:"checkbox"})," remember me"]}),e.error&&Object(h.jsx)("div",{className:be.a.error,children:e.error}),Object(h.jsx)("button",{children:"Login"})]})}))),he=Object(N.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(v.a)(m.a.mark((function r(a){var s,c;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(_.a)(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(S()):(c=s.data.messages.length>0?s.data.messages[0]:"some error",a(Object(x.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(h.jsx)(A.a,{to:"/Profile"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)(pe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Oe={initialized:!1},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITISLIZED":return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},me=n(123),ve=n(93),xe=n(132),_e=n(127),we=Object($.c)({profilePage:ve.b,dialogsPage:me.b,usersPage:B,auth:y,app:ge,form:_e.a}),Pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,Se=Object($.e)(we,Pe(Object($.a)(xe.a))),ye=function(e){return function(t){return Object(h.jsx)(a.a.Suspense,{fallback:Object(h.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(h.jsx)(e,Object(d.a)({},t))})}},Ne=a.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Ee=a.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),Ce=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(h.jsxs)("div",{className:"app-wrapper",children:[Object(h.jsx)(C,{}),Object(h.jsx)(k,{}),Object(h.jsxs)("div",{className:"app-wrapper-content",children:[Object(h.jsx)(A.b,{path:"/Dialogs",render:ye(Ne)}),Object(h.jsx)(A.b,{path:"/Users",render:function(){return Object(h.jsx)(oe,{})}}),Object(h.jsx)(A.b,{path:"/Profile/:userId?",render:ye(Ee)}),Object(h.jsx)(A.b,{path:"/News",render:function(){return Object(h.jsx)(D,{})}}),Object(h.jsx)(A.b,{path:"/Music",render:function(){return Object(h.jsx)(I,{})}}),Object(h.jsx)(A.b,{path:"/Settings",render:function(){return Object(h.jsx)(L,{})}}),Object(h.jsx)(A.b,{path:"/login",render:function(){return Object(h.jsx)(he,{})}})]})]}):Object(h.jsx)("img",{src:Y.a})}}]),n}(a.a.Component),Ue=Object(N.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(S());Promise.all([t]).then((function(){e({type:"SET_INITISLIZED"})}))}}})(Ce),Te=function(e){return Object(h.jsx)(p.a,{children:Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(N.a,{store:Se,children:Object(h.jsx)(Ue,{})})})})};c.a.render(Object(h.jsx)(Te,{}),document.getElementById("root"))},63:function(e,t,n){"use strict";t.a=n.p+"static/media/loading.c7d9f081.gif"},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(70),s=n(90),c=n.n(s),i=(n(0),n(1)),o=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:r?c.a.form_control:"",children:n.children}),Object(i.jsx)("div",{children:r&&Object(i.jsx)("span",{className:c.a.some_error,children:t.error})})]})},u=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsxs)(o,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))," "]}))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsxs)(o,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))," "]}))}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols ")}}},87:function(e,t,n){e.exports={header:"Header_header__1FdPP",login:"Header_login__2LdEK"}},90:function(e,t,n){e.exports={form_control:"formcontrols_form_control__3f36_",some_error:"formcontrols_some_error__1q6Xz"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return b}));var r=n(10),a=n.n(r),s=n(21),c=n(38),i=n(3),o=n(17),u={messageData:[{id:1,message:"Hi, how are you?",numder:23},{id:2,message:"I am ok, It is my firest posts",numder:3},{id:3,message:"karamba",numder:23},{id:4,message:"blabla",numder:4}],userProfile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},d=function(e){return{type:"SET_STATUS",status:e}},j=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.e)(e);case 2:r=t.sent,n({type:"SET-USERS-PROFILE",userProfile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.h.getStatus(e);case 2:r=t.sent,n(d(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.h.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,number:0};return Object(i.a)(Object(i.a)({},e),{},{messageData:[].concat(Object(c.a)(e.messageData),[n]),newPostText:""});case"SET-USERS-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{userProfile:t.userProfile});case"SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{messageData:e.messageDatafilter((function(e){return e.id!=t.postId}))});default:return e}}}},[[291,1,2]]]);
//# sourceMappingURL=main.d42342c3.chunk.js.map