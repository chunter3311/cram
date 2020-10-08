(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,a){e.exports={sidebar_nav:"navbar_sidebar_nav__3crPa",usernameDropDown:"navbar_usernameDropDown__bWK-n",newNoteBtn:"navbar_newNoteBtn__3Xzkx",extra_navlinks:"navbar_extra_navlinks__Z2FyT",usernameLabel:"navbar_usernameLabel__3Qmzs",usernameLabelIcon:"navbar_usernameLabelIcon__2Xb9H",logoutButton:"navbar_logoutButton__3AuVm",usernameWrapper:"navbar_usernameWrapper__mtrZZ"}},26:function(e,t,a){},30:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return I}));var n=a(0),r=a.n(n),c=a(17),s=a.n(c),u=(a(35),a(1)),o=a.n(u),l=a(4),i=a(10),m=a(3),p=a(11);var f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Username:")," ",e.user.username,r.a.createElement("br",null),r.a.createElement("strong",null,"Email:")," ",e.user.email,r.a.createElement("br",null),r.a.createElement("hr",null))};var d=function(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),c=a[0],s=a[1];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a.users);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var u=c.map((function(e){return r.a.createElement(f,{key:e.id,user:e})}));return console.log("____Rendering User List____"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"User List: "),u)},v=a(5),E=a(19),b=a(16),h=a.n(b),_=function(e,t,a){var n=h.a.get("XSRF-TOKEN");return function(){var r=Object(l.a)(o.a.mark((function r(c){var s,u;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("/api/users/",{method:"post",headers:{"Content-Type":"application/json","X-CSRFTOKEN":n},body:JSON.stringify({username:e,password:a,email:t,csrf_token:n})});case 2:return s=r.sent,r.next=5,s.json();case 5:if(u=r.sent,s.data=u,!s.ok){r.next=12;break}return c({type:"signup/CREATE_USER",user:u}),r.abrupt("return",s);case 12:return console.error("Bad response"),r.abrupt("return",s);case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(l.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/users/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return n.data=t.sent,n.ok&&a({type:"users/SET_USER",user:n.data}),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var O=function(e,t){var a=h.a.get("XSRF-TOKEN");return function(){var n=Object(l.a)(o.a.mark((function n(r){var c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/session/login",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFTOKEN":a},body:JSON.stringify({email_or_username:e,password:t,csrf_token:a})});case 2:return c=n.sent,n.next=5,c.json();case 5:return c.data=n.sent,c.ok&&r({type:"session/SET_USER",user:c.data.user}),n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},j=function(){var e=h.a.get("XSRF-TOKEN");return function(){var t=Object(l.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/session/logout",{method:"DELETE",headers:{"X-CSRFTOKEN":e}});case 2:return n=t.sent,t.next=5,n.json();case 5:return n.data=t.sent,n.ok&&a({type:"session/LOGOUT_USER"}),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N={user_id:null};a(26);var x=Object(m.g)((function(e){var t=e.history,a=Object(n.useState)(""),c=Object(p.a)(a,2),s=c[0],u=c[1],m=Object(n.useState)(""),f=Object(p.a)(m,2),d=f[0],E=f[1],b=Object(n.useState)(""),h=Object(p.a)(b,2),g=h[0],j=h[1],N=Object(n.useState)([]),x=Object(p.a)(N,2),w=x[0],y=x[1],k=Object(v.c)();Object(n.useEffect)((function(){y([])}),[s,d,g]);var S=function(){var e=Object(l.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,k(_(d,s,g));case 3:if(!(n=e.sent).ok){e.next=9;break}return e.next=7,k(O(d,g));case 7:return t.replace("/"),e.abrupt("return");case 9:y(n.data.errors);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,k(O("demo@demo.com","password"));case 3:if(!(n=e.sent).ok){e.next=7;break}return t.replace("/"),e.abrupt("return");case 7:y(n.data.errors);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"form-wrapper centered"},r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-header"},r.a.createElement("img",{alt:"logo",src:"https://i.imgur.com/Ah6PlKp.jpg",style:{width:"50%"}}),r.a.createElement("h1",{className:"header-title"},"Cram"),r.a.createElement("div",{className:"header-tagline"},"Optimize your study.")),r.a.createElement("button",{onClick:C,className:"demo_button"},"Continue as Demo User"),r.a.createElement("div",{className:"divider-container"},r.a.createElement("div",{className:"divider-text"},"or"),r.a.createElement("div",{className:"divider-line"})),r.a.createElement("div",{className:"login_form_container"},r.a.createElement("form",{onSubmit:S},r.a.createElement("input",{name:"username",type:"text",value:d,onChange:function(e){return E(e.target.value)},className:"auth_input",placeholder:"Username"}),r.a.createElement("input",{name:"email",type:"email",value:s,onChange:function(e){return u(e.target.value)},className:"auth_input",placeholder:"Email"}),r.a.createElement("input",{name:"password",type:"password",value:g,onChange:function(e){return j(e.target.value)},className:"auth_input",placeholder:"Password"}),r.a.createElement("div",{className:"login_form_error_container"},w.length?r.a.createElement("ul",{className:"auth_error_list"},w.map((function(e,t){return r.a.createElement("li",{className:"error_message",key:"error-".concat(t+1)},e)}))):r.a.createElement(r.a.Fragment,null)),r.a.createElement("button",{type:"submit",className:"auth_button"},"Continue"))),r.a.createElement("div",{className:"form-footer"},r.a.createElement("div",{className:"footer-tagline"},"Already have an account?"),r.a.createElement("div",{className:"footer-cta-wrapper"},r.a.createElement(i.b,{className:"footer-cta",to:"/login"},"Sign in")))))})),w=Object(m.g)((function(e){var t=e.history,a=Object(n.useState)(""),c=Object(p.a)(a,2),s=c[0],u=c[1],m=Object(n.useState)(""),f=Object(p.a)(m,2),d=f[0],E=f[1],b=Object(n.useState)([]),h=Object(p.a)(b,2),_=h[0],g=h[1],j=Object(v.c)();Object(n.useEffect)((function(){g([])}),[s,d]);var N=function(){var e=Object(l.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,j(O(s,d));case 3:if(!(n=e.sent).ok){e.next=7;break}return t.replace("/"),e.abrupt("return");case 7:g(n.data.errors);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,j(O("demo","password"));case 3:if(!(n=e.sent).ok){e.next=7;break}return t.replace("/"),e.abrupt("return");case 7:g(n.data.errors);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"form-wrapper centered"},r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-header"},r.a.createElement("img",{alt:"logo",src:"https://i.imgur.com/Ah6PlKp.jpg",style:{width:"50%"}}),r.a.createElement("h1",{className:"header-title"},"Cram"),r.a.createElement("div",{className:"header-tagline"},"Optimize Your Study")),r.a.createElement("button",{onClick:x,className:"demo_button"},"Continue as Demo User"),r.a.createElement("div",{className:"divider-container"},r.a.createElement("div",{className:"divider-text"},"or"),r.a.createElement("div",{className:"divider-line"})),r.a.createElement("div",{className:"login_form_container"},r.a.createElement("form",{method:"",action:"",onSubmit:N},r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Email or Username",type:"text",name:"email_or_username",value:s,className:"auth_input",onChange:function(e){u(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Password",type:"password",name:"password",value:d,className:"auth_input",onChange:function(e){E(e.target.value)}})),r.a.createElement("div",{className:"login_form_error_container"},_.length?r.a.createElement("ul",{className:"auth_error_list"},_.map((function(e,t){return r.a.createElement("li",{className:"error_message",key:"error-".concat(t+1)},e)}))):r.a.createElement(r.a.Fragment,null)),r.a.createElement("button",{type:"submit",className:"auth_button"},"Continue"))),r.a.createElement("div",{className:"form-footer"},r.a.createElement("div",{className:"footer-tagline"},"Don't have an account?"),r.a.createElement("div",{className:"footer-cta-wrapper"},r.a.createElement(i.b,{className:"footer-cta",to:"/signup"},"Create account")))))})),y=a(28),k=Object(v.b)((function(e,t){var a=e.session.user_id;return Object(y.a)({user_id:a},t)}))((function(e){var t=e.user_id,a=e.path,n=e.component;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,{path:a,component:n}),"/"===a?r.a.createElement(m.a,{to:"/decks"}):r.a.createElement(r.a.Fragment,null)):r.a.createElement(m.a,{to:"/login"})}));var S=Object(m.g)((function(e){return e.match,r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("h1",null,"Main Content"))})),C=a(12),T=a.n(C);var U=Object(m.g)((function(e){var t=e.history,a=Object(v.c)(),n=function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,a(j());case 3:return e.sent.ok&&t.replace("/login"),e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=Object(v.d)((function(e){return e.entities.users})),s=Object.values(c).map((function(e){return e.username}));return r.a.createElement("nav",{className:T.a.sidebar_nav},r.a.createElement("div",{className:T.a.usernameWrapper},r.a.createElement("div",{className:T.a.usernameLabel},r.a.createElement("span",{className:T.a.usernameLabelIcon},"\u263b")," ",s),r.a.createElement("div",{className:T.a.logoutLabel},r.a.createElement("button",{className:T.a.logoutButton,onClick:n},"Logout"))),r.a.createElement("hr",null),r.a.createElement("ul",{className:T.a.extra_navlinks},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/users",activeclass:"active"},"Users"))))}));var R=Object(v.b)((function(e){return{userId:e.session.user_id}}))((function(e){var t=e.userId,a=Object(v.c)();return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(g(t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",height:"100vh"}},r.a.createElement(U,null),r.a.createElement(S,null)))}));var F,L=function(){return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session/csrf");case 2:if(!e.sent.ok){e.next=5;break}return e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(i.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/users"},r.a.createElement(d,null)),r.a.createElement(m.b,{exact:!0,path:"/login"},r.a.createElement(w,null)),r.a.createElement(m.b,{exact:!0,path:"/signup"},r.a.createElement(x,null)),r.a.createElement(k,{path:"/",component:R})))},D=a(13),K=a(29),X=Object(D.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"signup/CREATE_USER":return t.user;case"session/LOGOUT_USER":return{};case"users/SET_USER":return Object(E.a)({},t.user.id,t.user);default:return e}}}),B=Object(D.c)({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"session/SET_USER":return a.user_id=t.user.user_id,a;case"session/LOGOUT_USER":return{};default:return e}},entities:X});F=Object(D.a)(K.a);var A,I=Object(D.d)(B,A,F);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,{store:I},r.a.createElement(L,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.6085392b.chunk.js.map