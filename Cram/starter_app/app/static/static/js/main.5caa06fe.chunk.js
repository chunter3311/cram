(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){e.exports={sidebar_nav:"navbar_sidebar_nav__3crPa",logoutLabel:"navbar_logoutLabel__hZhGT",logoutButton:"navbar_logoutButton__3AuVm",logoutButtonIcon:"navbar_logoutButtonIcon__12dhW",upper_wrapper:"navbar_upper_wrapper__2LrUP",usernameWrapper:"navbar_usernameWrapper__mtrZZ",usernameIcon:"navbar_usernameIcon__1ktjT",usernameLabel:"navbar_usernameLabel__3Qmzs",userInfo:"navbar_userInfo__3onNT",deckLength:"navbar_deckLength__1i_Wm",dash:"navbar_dash__1wT-0",flashcardLength:"navbar_flashcardLength__Eu-JW",lower:"navbar_lower__3gHNI",extra_navlinks:"navbar_extra_navlinks__Z2FyT",newDeck:"navbar_newDeck__2wyuy"}},11:function(e,t,a){e.exports={study_container:"study_study_container__3EBzs",hide:"study_hide__3MNdB",study_deck_modal_container:"study_study_deck_modal_container__3drJa",study_deck_modal_wrapper:"study_study_deck_modal_wrapper__Rv5aM",study_deck_modal_buttons:"study_study_deck_modal_buttons__1DlZk",study_deck_modal_question:"study_study_deck_modal_question__1gvOG",study_deck_modal_answer:"study_study_deck_modal_answer__3JAEB",study_deck_modal_answer_wrapper:"study_study_deck_modal_answer_wrapper__1s5R_",study_deck_modal_reveal_button:"study_study_deck_modal_reveal_button__3NnBT",study_deck_modal_text:"study_study_deck_modal_text__2A0Gd",confidence_wrapper:"study_confidence_wrapper__uSIwu",confidence_form:"study_confidence_form__HMkwT"}},25:function(e,t,a){},35:function(e,t,a){},39:function(e,t,a){e.exports=a(53)},4:function(e,t,a){e.exports={decks_container:"deck_decks_container__3_G9c",hide:"deck_hide__3vOT2",modal_wrapper:"deck_modal_wrapper__hCyxH",decks_title_bar:"deck_decks_title_bar__3LzzU",deck_title:"deck_deck_title__1EoUY",deck_title_two:"deck_deck_title_two__6pS-X",deck_title_two_td:"deck_deck_title_two_td__1UAu8",deck_progress:"deck_deck_progress__1xVTE",deck_study_button:"deck_deck_study_button__2Vv2a",edit_deck_icon:"deck_edit_deck_icon__2Gj4d"}},53:function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return me}));var n=a(0),r=a.n(n),c=a(26),s=a.n(c),u=(a(25),a(1)),o=a.n(u),i=a(3),l=a(9),d=a(8),p=a(6),m=a(2),f=a(20),h=a(12),_=a.n(h),E=function(e,t,a){var n=_.a.get("XSRF-TOKEN");return function(){var r=Object(i.a)(o.a.mark((function r(c){var s,u;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("/api/users/",{method:"post",headers:{"Content-Type":"application/json","X-CSRFTOKEN":n},body:JSON.stringify({username:e,password:a,email:t,csrf_token:n})});case 2:return s=r.sent,r.next=5,s.json();case 5:if(u=r.sent,s.data=u,!s.ok){r.next=12;break}return c({type:"signup/CREATE_USER",user:u}),r.abrupt("return",s);case 12:return console.error("Bad response"),r.abrupt("return",s);case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/users/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return n.data=t.sent,n.ok&&a({type:"users/SET_USER",user:n.data}),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var v=function(e){return{type:"session/SET_SELECTED_DECK",deckId:e}},k=function(e,t){var a=_.a.get("XSRF-TOKEN");return function(){var n=Object(i.a)(o.a.mark((function n(r){var c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/session/login",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFTOKEN":a},body:JSON.stringify({email_or_username:e,password:t,csrf_token:a})});case 2:return c=n.sent,n.next=5,c.json();case 5:return c.data=n.sent,c.ok&&r({type:"session/SET_USER",user:c.data.user}),n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(){var e=_.a.get("XSRF-TOKEN");return function(){var t=Object(i.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/session/logout",{method:"DELETE",headers:{"X-CSRFTOKEN":e}});case 2:return n=t.sent,t.next=5,n.json();case 5:return n.data=t.sent,n.ok&&a({type:"session/LOGOUT_USER"}),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x={user_id:null,selectedDeckId:null,flashcardList:null};a(35);var g=Object(d.h)((function(e){var t=e.history,a=Object(n.useState)(""),c=Object(p.a)(a,2),s=c[0],u=c[1],d=Object(n.useState)(""),f=Object(p.a)(d,2),h=f[0],_=f[1],b=Object(n.useState)(""),v=Object(p.a)(b,2),y=v[0],x=v[1],g=Object(n.useState)([]),O=Object(p.a)(g,2),j=O[0],w=O[1],S=Object(m.c)();Object(n.useEffect)((function(){w([])}),[s,h,y]);var C=function(){var e=Object(i.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,S(E(h,s,y));case 3:if(!(n=e.sent).ok){e.next=9;break}return e.next=7,S(k(h,y));case 7:return t.replace("/"),e.abrupt("return");case 9:w(n.data.errors);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,S(k("demo@demo.com","password"));case 3:if(!(n=e.sent).ok){e.next=7;break}return t.replace("/"),e.abrupt("return");case 7:w(n.data.errors);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"form-wrapper centered"},r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-header"},r.a.createElement("img",{alt:"logo",src:"https://i.imgur.com/Ah6PlKp.jpg",style:{width:"50%"}}),r.a.createElement("h1",{className:"header-title"},"Cram")),r.a.createElement("button",{onClick:D,className:"demo_button"},"Demo"),r.a.createElement("hr",null),r.a.createElement("div",{className:"login_form_container"},r.a.createElement("form",{onSubmit:C},r.a.createElement("input",{name:"username",type:"text",value:h,onChange:function(e){return _(e.target.value)},className:"auth_input",placeholder:"Username"}),r.a.createElement("input",{name:"email",type:"email",value:s,onChange:function(e){return u(e.target.value)},className:"auth_input",placeholder:"Email"}),r.a.createElement("input",{name:"password",type:"password",value:y,onChange:function(e){return x(e.target.value)},className:"auth_input",placeholder:"Password"}),r.a.createElement("div",{className:"login_form_error_container"},j.length?r.a.createElement("ul",{className:"auth_error_list"},j.map((function(e,t){return r.a.createElement("li",{className:"error_message",key:"error-".concat(t+1)},e)}))):r.a.createElement(r.a.Fragment,null)),r.a.createElement("button",{type:"submit",className:"auth_button"},"Continue"))),r.a.createElement("div",{className:"form-footer"},r.a.createElement("div",{className:"footer-cta-wrapper"},r.a.createElement(l.b,{className:"footer-cta",to:"/login"},"Sign in")))))})),O=Object(d.h)((function(e){var t=e.history,a=Object(n.useState)(""),c=Object(p.a)(a,2),s=c[0],u=c[1],d=Object(n.useState)(""),f=Object(p.a)(d,2),h=f[0],_=f[1],E=Object(n.useState)([]),b=Object(p.a)(E,2),v=b[0],y=b[1],x=Object(m.c)();Object(n.useEffect)((function(){y([])}),[s,h]);var g=function(){var e=Object(i.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,x(k(s,h));case 3:if(!(n=e.sent).ok){e.next=7;break}return t.replace("/"),e.abrupt("return");case 7:y(n.data.errors);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,x(k("demo","password"));case 3:if(!(n=e.sent).ok){e.next=7;break}return t.replace("/"),e.abrupt("return");case 7:y(n.data.errors);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"form-wrapper centered"},r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-header"},r.a.createElement("img",{alt:"logo",src:"https://i.imgur.com/Ah6PlKp.jpg",style:{width:"50%"}}),r.a.createElement("h1",{className:"header-title"},"Cram")),r.a.createElement("button",{onClick:O,className:"demo_button"},"Demo"),r.a.createElement("hr",null),r.a.createElement("div",{className:"login_form_container"},r.a.createElement("form",{method:"",action:"",onSubmit:g},r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Email or Username",type:"text",name:"email_or_username",value:s,className:"auth_input",onChange:function(e){u(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Password",type:"password",name:"password",value:h,className:"auth_input",onChange:function(e){_(e.target.value)}})),r.a.createElement("div",{className:"login_form_error_container"},v.length?r.a.createElement("ul",{className:"auth_error_list"},v.map((function(e,t){return r.a.createElement("li",{className:"error_message",key:"error-".concat(t+1)},e)}))):r.a.createElement(r.a.Fragment,null)),r.a.createElement("button",{type:"submit",className:"auth_button"},"Continue"))),r.a.createElement("div",{className:"form-footer"},r.a.createElement("div",{className:"footer-cta-wrapper"},r.a.createElement(l.b,{className:"footer-cta",to:"/signup"},"Create account")))))})),j=a(19),w=Object(m.b)((function(e,t){var a=e.session.user_id;return Object(j.a)({user_id:a},t)}))((function(e){var t=e.user_id,a=e.path,n=e.component;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{path:a,component:n}),"/"===a?r.a.createElement(d.a,{to:"/decks"}):r.a.createElement(r.a.Fragment,null)):r.a.createElement(d.a,{to:"/login"})})),S=a(4),C=a.n(S),D={userModal:!1,createDeck:!1,createFlashcard:!1,editDeck:!1,editFlashcard:!1};var N=function(e){return{type:"decks/UPDATE_DECK",deck:e}},T=function(e,t,a){var n=_.a.get("XSRF-TOKEN");return function(){var r=Object(i.a)(o.a.mark((function r(c){var s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("/api/decks/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFTOKEN":n},body:JSON.stringify({title:e,isMastered:t,userId:a,csrf_token:n})});case 2:return s=r.sent,r.next=5,s.json();case 5:return s.data=r.sent,s.ok&&c({type:"decks/ADD_DECK",deck:s.data}),r.abrupt("return",s);case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},R=function(e){var t="/api/users/".concat(e,"/decks");return function(){var e=Object(i.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return n.data=e.sent,n.ok&&(a({type:"decks/SET_DECKS",decks:n.data}),n.data[1]&&a(v(n.data[1].id))),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(e){var t=_.a.get("XSRF-TOKEN"),a="/api/decks/".concat(e,"/update");return function(){var n=Object(i.a)(o.a.mark((function n(r){var c,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(a,{method:"put",headers:{"Content-Type":"application/json","X-CSRFTOKEN":t},body:JSON.stringify({id:e})});case 2:return c=n.sent,n.next=5,c.json();case 5:return s=n.sent,c.data=s,c.ok&&r(N(c.data)),n.abrupt("return",c);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},I=function(e,t,a,n){var r=_.a.get("XSRF-TOKEN"),c="/api/decks/".concat(n);return function(){var n=Object(i.a)(o.a.mark((function n(s){var u;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(c,{method:"put",headers:{"Content-Type":"application/json","X-CSRFTOKEN":r},body:JSON.stringify({title:e,isMastered:t,userId:a,csrf_token:r})});case 2:return u=n.sent,n.next=5,u.json();case 5:return u.data=n.sent,u.ok&&s(N(u.data)),n.abrupt("return",u);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};var A=function(e,t,a,n,r){var c=_.a.get("XSRF-TOKEN");return function(){var s=Object(i.a)(o.a.mark((function s(u){var i;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("/api/flashcards/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFTOKEN":c},body:JSON.stringify({question:e,answer:t,confidence:a,userId:n,deckId:r})});case 2:return i=s.sent,s.next=5,i.json();case 5:if(i.data=s.sent,!i.ok){s.next=10;break}return u({type:"/flashcards/ADD_FLASHCARD",flashcard:i.data}),s.next=10,u(L(r));case 10:return s.abrupt("return",i);case 11:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},F=function(e){var t="/api/users/".concat(e,"/flashcards");return function(){var e=Object(i.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return n.data=e.sent,n.ok&&Object.keys(n.data).length&&a({type:"/flashcards/SET_FLASHCARDS",flashcards:n.data}),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},G=function(e,t,a,n){var r=_.a.get("XSRF-TOKEN");return function(){var c=Object(i.a)(o.a.mark((function c(s){var u;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("/api/flashcards/".concat(n),{method:"PUT",headers:{"Content-Type":"application/json","X-CSRFTOKEN":r},body:JSON.stringify({question:e,answer:t,confidence:a,flashcardId:n})});case 2:return u=c.sent,c.next=5,u.json();case 5:if(u.data=c.sent,!u.ok){c.next=10;break}return s({type:"/flashcards/UPDATE_FLASHCARD",flashcard:u.data}),c.next=10,s(L(u.data.deckId));case 10:return c.abrupt("return",u);case 11:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()};var M=function(e){var t=e.deckId,a=e.CreateFlashcardModal,c=Object(m.c)(),s=Object(n.useState)(""),u=Object(p.a)(s,2),l=u[0],d=u[1],f=Object(n.useState)(""),h=Object(p.a)(f,2),_=h[0],E=h[1],b=Object(m.d)((function(e){return e.session.user_id})),v=function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),e.next=3,c(A(l,_,0,b,t));case 3:if(!e.sent.ok){e.next=7;break}return a(n),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:C.a.modal_wrapper},r.a.createElement("div",{style:{padding:"20px",backgroundColor:"white",opacity:"100%",zIndex:"10",width:"478px",height:"263px",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.16)",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:"20px 25px 18px"}},r.a.createElement("span",{style:{fontSize:"18px",fontWeight:"500",fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"}},"Set up your flashcard!")),r.a.createElement("form",{action:"",method:"",style:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 25px 0"}},r.a.createElement("input",{style:{outline:"none",borderRadius:"5px",border:"1px solid #E6E6E6",padding:"0 10px 0",width:"406px",height:"38px",marginLeft:"auto",marginRight:"auto"},name:"title",type:"text",placeholder:"Question",onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{style:{outline:"none",borderRadius:"5px",border:"1px solid #E6E6E6",padding:"0 10px 0",width:"406px",height:"38px",marginLeft:"auto",marginRight:"auto"},name:"title",type:"text",placeholder:"Answer",onChange:function(e){return E(e.target.value)}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"65px"}},r.a.createElement("button",{style:{marginRight:"15px",boxBorder:"1px solid black",borderRadius:"5px",padding:"10px 15x 10px",outline:"none"},type:"button",onClick:a},"Cancel"),r.a.createElement("button",{style:{outline:"none"},type:"button",onClick:v},"Submit")))))},U=a(17),K=a(18),H=function(e){var t=e.flashcard,a=e.setEditFlashcardId,n=Object(m.c)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{className:"flashcard-".concat(t.id)},r.a.createElement("td",null,t.question),r.a.createElement("td",null,t.answer),r.a.createElement("td",null,t.confidence),r.a.createElement("td",{className:C.a.edit_deck_icon,onClick:function(e){e.preventDefault(),a(t.id),n({type:"ui/TOGGLE_EDIT_FLASHCARD_MODAL"})}},r.a.createElement(U.a,{icon:K.b}))))},B=function(e){var t=e.editFlashcardId,a=Object(m.c)(),c=Object(m.d)((function(e){return Object.values(e.entities.flashcards).filter((function(e){return e.id===t}))})),s=c[0].question,u=c[0].answer,l=Object(n.useState)(s),d=Object(p.a)(l,2),f=d[0],h=d[1],_=Object(n.useState)(u),E=Object(p.a)(_,2),b=E[0],v=E[1],k=c[0].confidence,y=t,x=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.next=3,a(G(f,b,k,y));case 3:if(!e.sent.ok){e.next=7;break}return g(t),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){e.preventDefault(),a({type:"ui/TOGGLE_EDIT_FLASHCARD_MODAL"})};return r.a.createElement("div",{className:C.a.modal_wrapper},r.a.createElement("div",{style:{padding:"20px",backgroundColor:"white",opacity:"100%",zIndex:"10",width:"478px",height:"263px",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.16)",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:"20px 25px 18px"}},r.a.createElement("span",{style:{fontSize:"18px",fontWeight:"500",fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"}},"Make changes to this flashcard")),r.a.createElement("form",{action:"",method:"",style:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 25px 0"}},r.a.createElement("input",{style:{outline:"none",borderRadius:"5px",border:"1px solid #E6E6E6",padding:"0 10px 0",width:"406px",height:"38px",marginLeft:"auto",marginRight:"auto"},name:"question",type:"text",defaultValue:s,onChange:function(e){return h(e.target.value)}}),r.a.createElement("input",{style:{outline:"none",borderRadius:"5px",border:"1px solid #E6E6E6",padding:"0 10px 0",width:"406px",height:"38px",marginLeft:"auto",marginRight:"auto"},name:"question",type:"text",defaultValue:u,onChange:function(e){return v(e.target.value)}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"65px"}},r.a.createElement("button",{style:{marginRight:"15px",boxBorder:"1px solid black",borderRadius:"5px",padding:"10px 15x 10px",outline:"none"},type:"button",onClick:g},"Cancel"),r.a.createElement("button",{style:{outline:"none"},type:"button",onClick:x},"Submit")))))},P=function(e){var t=e.editDeckId,a=Object(m.c)(),c=Object(n.useState)(""),s=Object(p.a)(c,2),u=s[0],l=s[1],d=Object(m.d)((function(e){return e.session.user_id})),f=Object(m.d)((function(e){return Object.values(e.entities.decks).filter((function(e){return e.id===t}))})),h=function(){var e=Object(i.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),r=t,e.next=4,a(I(u,!1,d,r));case 4:if(!e.sent.ok){e.next=8;break}return _(n),e.abrupt("return");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){e.preventDefault(),a({type:"ui/TOGGLE_EDIT_DECK_MODAL"})};return r.a.createElement("div",{className:C.a.modal_wrapper},r.a.createElement("div",{style:{padding:"20px",backgroundColor:"white",opacity:"100%",zIndex:"10",width:"478px",height:"263px",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.16)",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:"20px 25px 18px"}},r.a.createElement("span",{style:{fontSize:"18px",fontWeight:"500",fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"}},"Rename this deck")),r.a.createElement("form",{action:"",method:"",style:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 25px 0"}},r.a.createElement("input",{style:{outline:"none",borderRadius:"5px",border:"1px solid #E6E6E6",padding:"0 10px 0",width:"406px",height:"38px",marginLeft:"auto",marginRight:"auto"},name:"title",type:"text",defaultValue:f[0].title,onChange:function(e){return l(e.target.value)}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"65px"}},r.a.createElement("button",{style:{marginRight:"15px",boxBorder:"1px solid black",borderRadius:"5px",padding:"10px 15x 10px",outline:"none"},type:"button",onClick:_},"Cancel"),r.a.createElement("button",{style:{outline:"none"},type:"button",onClick:h},"Submit")))))};var X=function(e){var t=Object(m.c)(),a=parseInt(e.match.params.deckId.split("").slice(5).join("")),c=Object(m.d)((function(e){return Object.values(e.entities.decks).filter((function(e){return e.id===a}))})),s=Object(m.d)((function(e){return Object.values(e.entities.flashcards).filter((function(e){return e.deckId===a}))})),u=Object(m.d)((function(e){return e.ui.createFlashcard})),o=Object(m.d)((function(e){return e.ui.editFlashcard})),i=Object(n.useState)(null),l=Object(p.a)(i,2),d=l[0],f=l[1],h=Object(m.d)((function(e){return e.ui.editDeck})),_=Object(n.useState)(null),E=Object(p.a)(_,2),b=(E[0],E[1]);return document.getElementById("create-flashcard-modal").classList.remove(C.a.hide),document.getElementById("create-deck-modal").classList.add(C.a.hide),r.a.createElement("main",{className:C.a.decks_container},u?r.a.createElement(M,{deckId:a,CreateFlashcardModal:function(e){e.preventDefault(),t({type:"ui/TOGGLE_CREATE_FLASHCARD_MODAL"})}}):"",o?r.a.createElement(B,{editFlashcardId:d}):"",h?r.a.createElement(P,{editDeckId:a}):"",r.a.createElement("h1",{onClick:function(e){e.preventDefault(),b(a),t({type:"ui/TOGGLE_EDIT_DECK_MODAL"})},className:C.a.deck_title},c[0].title," ",r.a.createElement(U.a,{icon:K.b})),r.a.createElement("table",{className:C.a.decks_table},r.a.createElement("tbody",null,r.a.createElement("tr",{className:C.a.decks_table_headers},r.a.createElement("th",null,"QUESTION"),r.a.createElement("th",null,"ANSWER"),r.a.createElement("th",null,"CONFIDENCE"),r.a.createElement("th",null)),s.map((function(e,t){return r.a.createElement(H,{flashcard:e,setEditFlashcardId:f,key:"flashcard-".concat(t+1)})})))))},z=function(e){var t=e.CreateDeckModal,a=Object(n.useState)(""),c=Object(p.a)(a,2),s=c[0],u=c[1],l=Object(m.c)(),d=Object(m.d)((function(e){return e.session.user_id})),f=function(){var e=Object(i.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.stopPropagation(),e.next=3,l(T(s,!1,d));case 3:if(!e.sent.ok){e.next=7;break}return t(a),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:C.a.modal_wrapper},r.a.createElement("div",{style:{padding:"20px",backgroundColor:"white",opacity:"100%",zIndex:"10",width:"478px",height:"263px",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0,0,0,0.16)",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:"20px 25px 18px"}},r.a.createElement("span",{style:{fontSize:"18px",fontWeight:"500",fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"}},"Give your new deck a name!")),r.a.createElement("form",{action:"",method:"",style:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 25px 0"}},r.a.createElement("input",{style:{outline:"none",borderRadius:"5px",border:"1px solid #E6E6E6",padding:"0 10px 0",width:"406px",height:"38px",marginLeft:"auto",marginRight:"auto"},name:"title",type:"text",placeholder:"Deck name",onChange:function(e){return u(e.target.value)}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"65px"}},r.a.createElement("button",{style:{marginRight:"15px",boxBorder:"1px solid black",borderRadius:"5px",padding:"10px 15x 10px",outline:"none"},type:"button",onClick:t},"Cancel"),r.a.createElement("button",{style:{outline:"none"},type:"button",onClick:f},"Submit")))))},J=function(e){var t=e.deck,a=(e.setEditDeckId,Object(m.c)(),Object(m.d)((function(e){return Object.values(e.entities.flashcards).filter((function(e){return e.deckId===t.id}))})));return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{className:"deck-".concat(t.id)},r.a.createElement("td",{className:C.a.deck_title_two_td},r.a.createElement(l.c,{className:C.a.deck_title_two,to:"/decks/deck-".concat(t.id)},t.title," ",r.a.createElement(U.a,{icon:K.b}))),r.a.createElement("td",{className:C.a.deck_progress},function(){var e=function(){for(var e=0,t=0;t<a.length;t++)3===a[t].confidence&&e++;return e}();return 0===e?"0%":e===a.length?(t.isMastered=!0,"Mastered"):"".concat(Math.round(100/a.length*e),"%")}()),r.a.createElement("td",{className:C.a.deck_study_button},r.a.createElement(l.c,{to:"/decks/deck-".concat(t.id,"/study")},r.a.createElement(U.a,{icon:K.c})))))};var W=function(e){var t=Object(m.c)(),a=Object(m.d)((function(e){return Object.values(e.entities.decks)})),c=Object(m.d)((function(e){return e.ui.createDeck})),s=Object(m.d)((function(e){return e.ui.editDeck})),u=Object(n.useState)(null),o=Object(p.a)(u,2),i=o[0],l=o[1];return document.getElementById("create-flashcard-modal").classList.add(C.a.hide),document.getElementById("create-deck-modal").classList.remove(C.a.hide),r.a.createElement("main",{className:C.a.decks_container},c?r.a.createElement(z,{CreateDeckModal:function(e){e.preventDefault(),t({type:"ui/TOGGLE_CREATE_DECK_MODAL"})}}):"",s?r.a.createElement(P,{editDeckId:i}):"",r.a.createElement("h1",null,"My Decks"),r.a.createElement("table",{className:C.a.decks_table},r.a.createElement("tbody",null,r.a.createElement("tr",{className:C.a.decks_table_headers},r.a.createElement("th",null,"DECK"),r.a.createElement("th",null,"PROGRESS"),r.a.createElement("th",null)),a.map((function(e,t){return r.a.createElement(J,{deck:e,setEditDeckId:l,key:"deck-".concat(t+1)})})))))};var q=function(){var e=Object(m.c)(),t=Object(m.d)((function(e){return Object.values(e.entities.flashcards)})),a=Object(m.d)((function(e){return e.ui.createFlashcard})),n=function(t){t.preventDefault(),e({type:"ui/TOGGLE_CREATE_FLASHCARD_MODAL"})};return r.a.createElement("main",{className:C.a.decks_container},a?r.a.createElement(M,{CreateFlashcardModal:n}):"",r.a.createElement("h1",null,"Flashcards"),r.a.createElement("div",{className:C.a.decks_title_bar},r.a.createElement("div",{className:C.a.decks_title},r.a.createElement("h2",null,"My flashcard list")),r.a.createElement("div",{className:C.a.buttons},r.a.createElement("button",{className:C.a.newDeck,onClick:n},r.a.createElement("svg",{style:{width:"24px",height:"24px"},fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"_3rHKgsdA1qX-_9ks50GGiT"},r.a.createElement("path",{d:"M5.955 4.5H8.03v15H5.955v-15z",fill:"currentColor"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.281 19.5v-15h7.09c.921 0 1.667.746 1.667 1.666v7.294h-.025a4.583 4.583 0 00-4.346 6.04H9.28zm5.88-9.167a.75.75 0 000-1.5h-3a.75.75 0 000 1.5h3z",fill:"currentColor"}),r.a.createElement("path",{d:"M18.638 15.549a.625.625 0 10-1.25 0v1.904h-1.846a.625.625 0 100 1.25h1.846v1.846a.625.625 0 001.25 0v-1.846h1.904a.625.625 0 100-1.25h-1.904v-1.904z",fill:"currentColor"})),"New Flashcard"))),r.a.createElement("table",{className:C.a.decks_table},r.a.createElement("tbody",null,r.a.createElement("tr",{className:C.a.decks_table_headers},r.a.createElement("th",null,"QUESTION"),r.a.createElement("th",null,"ANSWER"),r.a.createElement("th",null,"CONFIDENCE"),r.a.createElement("th",null,"DECK ID"),r.a.createElement("th",null,"ACTIONS")),t.map((function(e,t){return r.a.createElement(H,{flashcard:e,key:"flashcard-".concat(t+1)})})))))},V=a(11),Z=a.n(V),Q=function(e){var t=e.flashcard,a=e.index,c=e.lastIndex,s=Object(d.g)(),u=Object(m.c)(),l=t.question,f=t.answer,h=Object(n.useState)(""),_=Object(p.a)(h,2),E=_[0],b=_[1],v=t.id,k=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u(G(l,f,E,v));case 3:if(!e.sent.ok){e.next=9;break}return document.getElementById("flashcard-".concat(a)).classList.add(Z.a.hide),a<c?document.getElementById("flashcard-".concat(a+1)).classList.remove(Z.a.hide):s.push("/decks"),e.abrupt("return");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{onClick:function(){document.getElementById("answer-".concat(t.id)).classList.remove(Z.a.hide)},id:"flashcard-".concat(a),className:"".concat(Z.a.study_deck_modal_container," ").concat(Z.a.hide)},r.a.createElement("div",{className:Z.a.study_deck_modal_wrapper},r.a.createElement("h3",{className:Z.a.study_deck_modal_question},l),r.a.createElement("div",{id:"answer-".concat(t.id),className:"".concat(Z.a.study_deck_modal_answer_wrapper," ").concat(Z.a.hide)},r.a.createElement("h3",{className:Z.a.study_deck_modal_answer},f),r.a.createElement("div",{className:Z.a.confidence_wrapper},r.a.createElement("h4",{className:Z.a.study_deck_modal_text},"How well do you know this?"),r.a.createElement("form",{className:Z.a.confidence_form,onSubmit:k,action:"",method:"",style:{display:"flex",flexDirection:"row",justifyContent:"center",padding:"0 25px 0"}},r.a.createElement("input",{onClick:function(){return b(1)},type:"submit",value:"Not at all"}),r.a.createElement("input",{onClick:function(){return b(2)},type:"submit",value:"Somewhat"}),r.a.createElement("input",{onClick:function(){return b(3)},type:"submit",value:"Perfectly"}))))))};var Y=function(e){var t=parseInt(e.match.params.deckId.split("").slice(5).join("")),a=Object(m.d)((function(e){return Object.values(e.entities.decks).filter((function(e){return e.id===t}))})),c=Object(m.d)((function(e){return Object.values(e.entities.flashcards).filter((function(e){return e.deckId===t}))})),s=c.length-1,u=Object(n.useState)(!1),o=Object(p.a)(u,2),i=o[0],l=o[1];return i||setTimeout((function(){document.getElementById("flashcard-0").classList.remove(Z.a.hide),l(!0)}),0),r.a.createElement("main",null,r.a.createElement("h1",null,"Now Studying: ",a[0].title),c.map((function(e,t){return r.a.createElement(Q,{flashcard:e,index:t,lastIndex:s,key:"flashcard-".concat(t+1)})})))};var $=Object(d.h)((function(e){var t=e.match;return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(d.b,{path:t.url+"decks",exact:!0,component:W}),r.a.createElement(d.b,{path:t.url+"decks/:deckId",exact:!0,component:X}),r.a.createElement(d.b,{path:t.url+"decks/:deckId/study",component:Y}),r.a.createElement(d.b,{path:t.url+"flashcards",component:q}))})),ee=a(10),te=a.n(ee);var ae=Object(d.h)((function(e){var t=e.history,a=Object(m.c)(),n=Object(m.d)((function(e){return Object.values(e.entities.decks)})),c=Object(m.d)((function(e){return Object.values(e.entities.flashcards)})),s=Object(m.d)((function(e){return e.entities.users})),u=Object.values(s).map((function(e){return e.username})),d=function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,a(y());case 3:return e.sent.ok&&t.replace("/login"),e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("nav",{className:te.a.sidebar_nav},r.a.createElement("div",{className:te.a.upper_wrapper},r.a.createElement("div",{className:te.a.logoutLabel},r.a.createElement("button",{className:te.a.logoutButton,onClick:d},r.a.createElement("span",{className:te.a.logoutButtonIcon},r.a.createElement(U.a,{icon:K.a})),"Log Out")),r.a.createElement("div",{className:te.a.usernameWrapper},r.a.createElement("div",{className:te.a.usernameIcon},r.a.createElement(U.a,{icon:K.d})),r.a.createElement("div",{className:te.a.usernameLabel},u),r.a.createElement("div",{className:te.a.userInfo},r.a.createElement(l.c,{to:"/decks"},r.a.createElement("span",{className:te.a.deckLength},"".concat(n.length," Decks"))),r.a.createElement("span",{className:te.a.dash},"\u2014"),r.a.createElement(l.c,{to:"/flashcards",activeclass:"active"},r.a.createElement("span",{className:te.a.flashcardLength},"".concat(c.length," Cards")))))),r.a.createElement("div",{id:"create-deck-modal",className:te.a.newDeck},r.a.createElement("button",{onClick:function(e){e.preventDefault(),a({type:"ui/TOGGLE_CREATE_DECK_MODAL"})}},"New Deck")),r.a.createElement("div",{id:"create-flashcard-modal",className:te.a.newDeck},r.a.createElement("button",{onClick:function(e){e.preventDefault(),a({type:"ui/TOGGLE_CREATE_FLASHCARD_MODAL"})}},"New Card")),r.a.createElement("div",{className:te.a.lower},r.a.createElement("div",{className:te.a.extra_navlinks},r.a.createElement(l.c,{to:"/users",activeclass:"active"},"About the Developer"))))})),ne=a(38),re=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/users/".concat(e,"/trash"));case 2:return n=t.sent,t.next=5,n.json();case 5:return n.data=t.sent,n.ok&&a({type:"trash/SET_TRASH",trash:n.data.trash}),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var ce=Object(m.b)((function(e,t){return{userId:e.session.user_id,selectedDeckId:e.session.selectedDeckId,decks:e.entities.decks,flashcards:e.entities.flashcards}}))((function(e){var t=e.userId,a=e.selectedDeckId,c=(e.defaultDeckId,Object(m.c)());return Object(n.useEffect)((function(){var e=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(F(t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(re(t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),n(),function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(R(t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),c(v(a||1)),function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(b(t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,t,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",height:"100vh"}},r.a.createElement(ae,null),r.a.createElement($,null)))}));var se,ue=function(){return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session/csrf");case 2:if(!e.sent.ok){e.next=5;break}return e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(l.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/login"},r.a.createElement(O,null)),r.a.createElement(d.b,{exact:!0,path:"/signup"},r.a.createElement(g,null)),r.a.createElement(w,{path:"/",component:ce})))},oe=a(21),ie=a(37),le=Object(oe.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"signup/CREATE_USER":return t.user;case"session/LOGOUT_USER":return{};case"users/SET_USER":return Object(f.a)({},t.user.id,t.user);default:return e}},flashcards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"/flashcards/ADD_FLASHCARD":var n=t.flashcard.id;return Object(j.a)(Object(f.a)({},n,t.flashcard),e);case"/flashcards/SET_FLASHCARDS":return Object(j.a)(Object(j.a)({},t.flashcards),e);case"/flashcards/UPDATE_FLASHCARD":return a[t.flashcard.id]=t.flashcard,a;case"session/LOGOUT_USER":return{};default:return e}},decks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"decks/SET_DECKS":return t.decks;case"decks/ADD_DECK":return Object(j.a)(Object(j.a)({},e),{},Object(f.a)({},t.deck.id,t.deck));case"decks/UPDATE_DECK":return a[t.deck.id]=t.deck,a;case"session/LOGOUT_USER":return{};default:return e}},trash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{trash:[]},t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"trash/SET_TRASH":return a.trash=t.trash,a;case"trash/ADD_TO_TRASH":return a.trash=[].concat(Object(ne.a)(a.trash),[t.flashcardId]),a;case"trash/EMPTY_TRASH":return a.trash=[],a;case"session/LOGOUT_USER":return{};default:return e}}}),de=Object(oe.c)({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"session/SET_USER":return a.user_id=t.user.user_id,a;case"session/LOGOUT_USER":return{};case"session/SET_SELECTED_DECK":return a.selectedDeckId=t.deckId,a;case"session/SET_FLASHCARD_LIST":return a.flashcardList=t.flashcardList,a;default:return e}},entities:le,ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"ui/TOGGLE_USER_MODAL":return a.userModal=!a.userModal,a;case"ui/TOGGLE_CREATE_DECK_MODAL":return a.createDeck=!a.createDeck,a;case"ui/TOGGLE_CREATE_FLASHCARD_MODAL":return a.createFlashcard=!a.createFlashcard,a;case"ui/TOGGLE_EDIT_DECK_MODAL":return a.editDeck=!a.editDeck,a;case"ui/TOGGLE_EDIT_FLASHCARD_MODAL":return a.editFlashcard=!a.editFlashcard,a;default:return e}}});se=Object(oe.a)(ie.a);var pe,me=Object(oe.d)(de,pe,se);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:me},r.a.createElement(ue,null))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.5caa06fe.chunk.js.map