(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,n){},20:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),s=n(21),r=n.n(s),a=n(6),i=n(0);var l=n(3),j=(n(20),n(11),n(12));var u=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)([]),u=Object(l.a)(r,2),b=u[0],d=u[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("token");s(e),fetch("https://quiet-retreat-88465.herokuapp.com/blog",{method:"GET"}).then((function(e){return e.json()})).then((function(e){d(e.reverse())}))}),[]),Object(c.useEffect)((function(){}),[o]),Object(i.jsx)("div",{className:"content",children:b.map((function(e,t){return Object(i.jsx)(a.b,{to:"/blog/"+e._id,children:Object(i.jsxs)("div",{className:"post",children:[Object(i.jsx)("p",{className:"title",children:e.title}),Object(i.jsxs)("p",{children:["Posted ",j.DateTime.fromISO(e.postdate).toFormat("LLL dd, yyyy")]}),Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:"message",dangerouslySetInnerHTML:{__html:e.post}})]})},e._id)}))})},b=n(4);var d=function(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)([]),u=Object(l.a)(r,2),d=u[0],h=u[1],O=Object(c.useState)(""),m=Object(l.a)(O,2),p=m[0],f=m[1],x=Object(b.g)().id,g=Object(c.useState)(""),v=Object(l.a)(g,2),S=v[0],y=v[1],E=Object(c.useState)(!1),T=Object(l.a)(E,2),k=T[0],N=T[1];Object(c.useEffect)((function(){var e=localStorage.getItem("token");null!==e&&y(e),fetch("https://quiet-retreat-88465.herokuapp.com/blog/"+x,{method:"GET"}).then((function(e){return e.json()})).then((function(e){s(e)})),fetch("https://quiet-retreat-88465.herokuapp.com/blog/"+x+"/comments",{method:"GET"}).then((function(e){return e.json()})).then((function(e){h(e)}))}),[]),Object(c.useEffect)((function(){}),[o]);var w=function(e){e.preventDefault(),console.log(p),fetch("https://quiet-retreat-88465.herokuapp.com/blog/"+x,{method:"DELETE",headers:{Authorization:"Bearer "+S},mode:"cors"}).then((function(e){200===e.status&&N(!0)}))};return Object(i.jsxs)("div",{className:"content",children:[function(){if(k)return Object(i.jsx)(b.a,{push:!0,to:"/blog"})}(),"undefined"===typeof o?"Loading":o.map((function(e){return Object(i.jsxs)("div",{className:"post",children:[Object(i.jsx)("h1",{style:{marginBottom:"2vh"},children:e.title}),Object(i.jsxs)("h2",{children:["Posted ",j.DateTime.fromISO(e.postdate).toFormat("LLL dd, yyyy")]}),Object(i.jsx)("hr",{}),Object(i.jsx)("p",{className:"message",dangerouslySetInnerHTML:{__html:e.post}}),Object(i.jsxs)("div",{className:"flex-row",style:{marginTop:"4vh"},children:[""===S?null:Object(i.jsx)("p",{onClick:w,style:{cursor:"pointer",marginRight:"2vw"},children:"Delete Post"}),""===S?null:Object(i.jsx)(a.b,{to:"/blog/".concat(x,"/edit"),children:"Edit Post"})]})]},x)})),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(p),fetch("https://quiet-retreat-88465.herokuapp.com/blog/"+x,{method:"POST",body:JSON.stringify({comment:p}),headers:{"Content-Type":"application/json"},mode:"cors"}).then((function(e){200===e.status&&window.location.reload()}))},children:[Object(i.jsx)("textarea",{name:"comment",id:"comment-box",required:!0,onChange:function(e){return f(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"submit",value:"Post Comment"})]}),Object(i.jsxs)("div",{className:"commentArea",children:[Object(i.jsx)("p",{style:{textAlign:"center",marginTop:"3vh"},children:"Comments"}),Object(i.jsx)("hr",{}),"undefined"===typeof d?"Loading":d.map((function(e){return Object(i.jsxs)("div",{className:"comment",children:[Object(i.jsx)("p",{children:e.message}),""===S?null:Object(i.jsx)("button",{style:{cursor:"pointer"},value:e._id,onClick:function(){var t;t=e._id,console.log(p),fetch("https://quiet-retreat-88465.herokuapp.com/blog/"+x+"/comment/"+t,{method:"DELETE",headers:{Authorization:"Bearer "+S},mode:"cors"}).then((function(e){200===e.status&&window.location.reload()}))},children:"Delete"})]},e._id)}))]})]})},h=n(16);var O=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(""),a=Object(l.a)(r,2),j=a[0],u=a[1],d=Object(c.useState)(""),O=Object(l.a)(d,2),m=O[0],p=O[1],f=Object(c.useState)(!0),x=Object(l.a)(f,2),g=x[0],v=x[1],S=Object(c.useState)(!1),y=Object(l.a)(S,2),E=y[0],T=y[1],k=Object(b.g)().id,N=Object(c.useState)(),w=Object(l.a)(N,2),C=w[0],_=w[1];return Object(c.useEffect)((function(){k&&fetch("https://quiet-retreat-88465.herokuapp.com/blog/"+k,{method:"GET",mode:"cors"}).then((function(e){if(200===e.status)return e.json()})).then((function(e){return _(e)}));var e=localStorage.getItem("token");null===e?v(!1):s(e)}),[]),Object(c.useEffect)((function(){C&&console.log(C)}),[C]),Object(c.useEffect)((function(){}),[o]),Object(i.jsxs)("div",{className:"content",children:[function(){if(!g)return Object(i.jsx)(b.a,{push:!0,to:"/login"})}(),function(){if(E)return Object(i.jsx)(b.a,{push:!0,to:"/blog"})}(),Object(i.jsx)("h1",{children:"Create A Post"}),Object(i.jsxs)("form",{className:"flex-column",onSubmit:C?function(e){e.preventDefault(),fetch("https://quiet-retreat-88465.herokuapp.com/blog/"+k,{method:"PUT",body:JSON.stringify({post:j,title:m}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},mode:"cors"}).then((function(e){401===e.status&&localStorage.removeItem("token"),200===e.status&&(C?window.location.reload():T(!0))}))}:function(e){e.preventDefault(),fetch("https://quiet-retreat-88465.herokuapp.com/blog",{method:"POST",body:JSON.stringify({post:j,title:m}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},mode:"cors"}).then((function(e){401===e.status&&localStorage.removeItem("token"),200===e.status&&T(!0)}))},children:[C?Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"prev-title",children:"Previous Title:"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",style:{minWidth:"30vw",marginBottom:"3vh"},value:C[0].title,required:!0})]}):null,Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",style:{minWidth:"30vw",marginBottom:"3vh"},required:!0,onChange:function(e){return p(e.target.value)}})]}),Object(i.jsx)(h.a,{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).TINY_KEY,onEditorChange:function(e,t){return u(e)},initialValue:C?C[0].post:"loading",init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |                         alignleft aligncenter alignright alignjustify |                         bullist numlist outdent indent | removeformat | help | image"}}),Object(i.jsx)("input",{type:"submit",value:"submit"})]})]})};var m=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(""),a=Object(l.a)(r,2),j=a[0],u=a[1],b=Object(c.useState)(""),d=Object(l.a)(b,2),h=d[0],O=d[1],m=Object(c.useState)(!1),p=Object(l.a)(m,2),f=p[0],x=p[1],g=Object(c.useState)(!1),v=Object(l.a)(g,2),S=v[0],y=v[1];return Object(c.useEffect)((function(){""!==h&&(localStorage.setItem("token",h),x(!0))}),[h]),Object(i.jsxs)("div",{className:"content",children:[void(f&&window.location.reload()),Object(i.jsx)("h1",{children:"Login Form"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://quiet-retreat-88465.herokuapp.com/login",{method:"POST",body:JSON.stringify({username:o,password:j}),headers:{"Content-Type":"application/json"},mode:"cors"}).then((function(e){if(400!==e.status)return e.json();localStorage.removeItem("token"),y(!0)})).then((function(e){e&&O(e.token)}))},className:"login-form",children:[Object(i.jsx)("input",{type:"text",name:"username",required:!0,placeholder:"username",onChange:function(e){return s(e.target.value)}}),Object(i.jsx)("input",{type:"password",name:"password",placeholder:"password",required:!0,onChange:function(e){return u(e.target.value)}}),Object(i.jsx)("input",{type:"submit",value:"login"})]}),S?Object(i.jsx)("p",{children:"Failed to log in. Please try again."}):null]})},p=function(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),o=n[0],s=n[1];Object(c.useEffect)((function(){s(localStorage.getItem("token"))}),[]);return Object(i.jsxs)("nav",{children:[Object(i.jsx)("div",{className:"nav-left",children:Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:Object(i.jsx)(a.c,{to:"/blog",children:"Blog"})})})}),Object(i.jsx)("div",{className:"nav-right",children:Object(i.jsxs)("ul",{className:"flex-row",children:[null===o?Object(i.jsx)("li",{children:Object(i.jsx)(a.c,{to:"/login",children:"Login"})}):Object(i.jsx)("li",{onClick:function(){localStorage.removeItem("token"),window.location.reload()},style:{cursor:"pointer"},children:"Log Out"}),null!==o?Object(i.jsx)("li",{children:Object(i.jsx)(a.c,{to:"/blog/create",children:"Create"})}):null]})})]})};var f=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(a.a,{children:[Object(i.jsx)(p,{}),Object(i.jsxs)(b.d,{children:[Object(i.jsx)(b.b,{path:"/",exact:!0,children:Object(i.jsx)(b.a,{to:"/blog"})}),Object(i.jsx)(b.b,{path:"/blog",exact:!0,children:Object(i.jsx)(u,{})}),Object(i.jsx)(b.b,{path:"/blog/create",exact:!0,children:Object(i.jsx)(O,{})}),Object(i.jsx)(b.b,{path:"/blog/:id/edit",exact:!0,children:Object(i.jsx)(O,{})}),Object(i.jsx)(b.b,{path:"/blog/:id",exact:!0,children:Object(i.jsx)(d,{})}),Object(i.jsx)(b.b,{path:"/login",exact:!0,children:Object(i.jsx)(m,{})})]})]})})};r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.85df0b42.chunk.js.map