(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);a(13);var n=a(2),c=a.n(n),s=a(21),i=a.n(s),l=a(4),o=a.p+"static/media/profile.0706f93e.jpg",r=a(5),j=a(1);var d=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(-1),d=Object(l.a)(i,2),b=d[0],u=d[1];return Object(n.useEffect)((function(){""!==e.apiURL&&fetch(e.apiURL+"/blog",{method:"GET"}).then((function(e){if(200===e.status)return e.json()})).then((function(e){s(e.reverse())}))}),[e.apiURL]),Object(n.useEffect)((function(){if(c.length>0){var e=Math.floor(Math.random()*c.length);u(e)}}),[c]),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-12 col-lg-4 text-center",children:[Object(j.jsx)("img",{src:o,className:"rounded-circle",style:{width:"auto",maxWidth:"100%",maxHeight:"400px"},alt:"my avatar"}),Object(j.jsx)("h1",{children:"Anthony Argel"}),Object(j.jsx)("h5",{children:"Interests: Programming, Japanese, Education, Mathematics"})]}),Object(j.jsx)("div",{className:"col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center",children:Object(j.jsxs)("div",{className:"mt-5",children:[Object(j.jsxs)("div",{className:"lh-lg",children:[Object(j.jsx)("h3",{children:"Random Post"}),-1!==b?Object(j.jsx)("div",{children:Object(j.jsx)(r.b,{to:"/blog/"+c[b]._id,className:"fs-4",children:c[b].title})}):null]}),Object(j.jsx)("h3",{className:"mt-5",children:"Recent Posts"}),Object(j.jsx)("div",{className:"",children:-1!==b?Object(j.jsxs)("ul",{className:"lh-lg p-0 fs-4",style:{listStyleType:"none"},children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/blog/"+c[0]._id,children:c[0].title})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/blog/"+c[1]._id,children:c[1].title})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/blog/"+c[2]._id,children:c[2].title})})]}):Object(j.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})]})})]})})},b=a(12);var u=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)([]),o=Object(l.a)(i,2),d=o[0],u=o[1],h=Object(n.useState)([]),m=Object(l.a)(h,2),O=m[0],p=m[1];return Object(n.useEffect)((function(){var t=localStorage.getItem("token");s(t),""!==e.apiURL&&(fetch(e.apiURL+"/blog",{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){u(e.reverse())})),fetch(e.apiURL+"/tags",{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){return p(e.tags)})))}),[e.apiURL]),Object(n.useEffect)((function(){}),[c]),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row d-flex justify-content-around",children:[Object(j.jsx)("div",{className:"col-12 col-lg-3 my-3",children:O.length>0?Object(j.jsxs)("div",{className:"card shadow-lg p-3",children:[Object(j.jsx)("p",{className:"fs-2 text-center",children:"Tags"}),Object(j.jsx)("hr",{}),O.map((function(e){return Object(j.jsx)(r.b,{to:"/tag/"+e._id,className:"lh-lg fs-5",children:e.name},e._id)}))]}):null}),Object(j.jsx)("div",{className:"col-12 col-lg-8",children:d.length>0?d.map((function(e,t){return Object(j.jsx)("div",{className:"card my-3 p-3 shadow-lg",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title fs-1",children:e.title}),Object(j.jsxs)("p",{children:["Posted ",b.DateTime.fromISO(e.postdate).toFormat("LLL dd, yyyy")]}),e.tags.length>0?Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsxs)("p",{children:["Tags:",e.tags.map((function(t,a){return Object(j.jsxs)("span",{children:[t.tagname,a+1!==e.tags.length?", ":null]},t._id)}))]})]}):null,Object(j.jsx)("hr",{}),Object(j.jsx)("p",{className:"card-text lh-base fs-5",dangerouslySetInnerHTML:e.post.length>200?{__html:e.post.substr(0,200)+"..."}:{__html:e.post}}),Object(j.jsx)(r.b,{to:"/blog/"+e._id,className:"stretched-link"},e._id)]})},e._id)})):Object(j.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})]})})},h=a(6),m=a(23);var O=function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)([]),o=Object(l.a)(i,2),d=o[0],u=o[1],O=Object(n.useState)(""),p=Object(l.a)(O,2),f=p[0],g=p[1],x=Object(h.h)().id,v=Object(n.useState)(""),y=Object(l.a)(v,2),N=y[0],S=y[1],L=Object(n.useState)(!1),T=Object(l.a)(L,2),R=T[0],U=T[1],E=Object(n.useState)([]),k=Object(l.a)(E,2),_=k[0],C=k[1],I=Object(n.useState)(!1),w=Object(l.a)(I,2),D=w[0],P=w[1];Object(n.useEffect)((function(){if(""!==e.apiURL){var t=localStorage.getItem("token");null!==t&&S(t),fetch(e.apiURL+"/blog/"+x,{method:"GET"}).then((function(e){return e.json()})).then((function(e){s(e)})),fetch(e.apiURL+"/blog/"+x+"/comments",{method:"GET"}).then((function(e){return e.json()})).then((function(e){u(e.reverse())})),fetch(e.apiURL+"/tags",{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){return C(e.tags)}))}}),[e.apiURL,x,D]);var A=function(){""!==e.apiURL&&fetch(e.apiURL+"/blog/"+x+"/comments",{method:"GET"}).then((function(e){return e.json()})).then((function(e){u(e.reverse())}))};Object(n.useEffect)((function(){}),[c]);var B=function(t){t.preventDefault(),""!==e.apiURL&&fetch(e.apiURL+"/blog/"+x,{method:"DELETE",headers:{Authorization:"Bearer "+N},mode:"cors"}).then((function(e){200===e.status&&U(!0)}))};return Object(j.jsxs)("div",{className:"container",children:[function(){if(R)return Object(j.jsx)(h.a,{push:!0,to:"/blog"})}(),Object(j.jsx)("div",{className:"row d-flex justify-content-center ",children:Object(j.jsxs)("div",{className:"col-11 col-lg-8",children:["undefined"===typeof c?Object(j.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):c.map((function(t){return Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("h1",{className:"h1",style:{marginBottom:"2vh"},children:t.title}),Object(j.jsxs)("h3",{children:["Posted ",b.DateTime.fromISO(t.postdate).toFormat("LLL dd, yyyy")]}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{className:"message fs-5 lh-base",dangerouslySetInnerHTML:{__html:t.post}}),t.tags.length>0?Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsxs)("p",{children:["Tags:",t.tags.map((function(a,n){return Object(j.jsxs)("span",{children:[a.tagname,""!==N?Object(j.jsx)(m.a,{onClick:function(t){return function(t,a){t.preventDefault(),""!==e.apiURL&&""!==N&&fetch(e.apiURL+"/blog/"+x+"/tag",{method:"DELETE",headers:{Authorization:"Bearer "+N,"Content-Type":"application/json"},body:JSON.stringify({tagid:a}),mode:"cors"}).then((function(e){return P(!D)}))}(t,a._id)},cursor:"pointer",color:"red"}):null,n+1!==t.tags.length?", ":null]},a._id)}))]})]}):null,Object(j.jsxs)("div",{style:{marginTop:"4vh",display:"flex"},children:[""===N?null:Object(j.jsx)("p",{onClick:B,style:{cursor:"pointer",marginRight:"2vw"},children:"Delete Post"}),""===N?null:Object(j.jsx)(r.b,{to:"/blog/".concat(x,"/edit"),style:{textDecoration:"none",marginRight:"2vw",color:"black"},children:"Edit Post"}),""===N?null:Object(j.jsx)("p",{"data-bs-toggle":"modal","data-bs-target":"#tagModal",style:{cursor:"pointer"},children:"Add Tag"})]})]},x)})),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==e.apiURL&&fetch(e.apiURL+"/blog/"+x,{method:"POST",body:JSON.stringify({comment:f}),headers:{"Content-Type":"application/json"},mode:"cors"}).then((function(e){200===e.status&&A()}))},children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"comment-box",className:"form-label"}),Object(j.jsx)("textarea",{className:"form-control",name:"comment",required:!0,onChange:function(e){return g(e.target.value)},id:"comment-box",rows:"3"})]}),Object(j.jsx)("input",{type:"submit",value:"Post Comment"})]}),Object(j.jsxs)("div",{className:"commentArea",children:[Object(j.jsx)("p",{style:{textAlign:"center",marginTop:"3vh"},children:"Comments"}),Object(j.jsx)("hr",{}),"undefined"===typeof d?"Loading":d.map((function(t){return Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("p",{className:"fs-5",children:t.message}),""===N?null:Object(j.jsx)("button",{style:{cursor:"pointer"},value:t._id,onClick:function(){var a;a=t._id,""!==e.apiURL&&""!==N&&fetch(e.apiURL+"/blog/"+x+"/comment/"+a,{method:"DELETE",headers:{Authorization:"Bearer "+N},mode:"cors"}).then((function(e){200===e.status&&A()}))},children:"Delete"})]},t._id)}))]})]})}),Object(j.jsx)("div",{className:"modal fade",id:"tagModal",tabIndex:"-1","aria-labelledby":"tagModalLabel","aria-hidden":"true",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"tagModalLabel",children:"Tag Form"}),Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsxs)("form",{onSubmit:function(t){return function(t){if(t.preventDefault(),""!==e.apiURL&&""!==N){for(var a="",n=document.getElementById("tag").value,c=0;c<_.length;c++)if(n===_[c].name){a=_[c]._id;break}if(""!==a){var s={tagid:a,kappa:"kill me"};console.log(a),fetch(e.apiURL+"/blog/"+x+"/tag",{method:"POST",headers:{Authorization:"Bearer "+N,"Content-Type":"application/json"},body:JSON.stringify(s),mode:"cors"}).then((function(e){return P(!D)}))}}}(t)},children:[Object(j.jsx)("input",{list:"tags",className:"mx-3",name:"tag",id:"tag"}),Object(j.jsx)("datalist",{id:"tags",children:_.map((function(e,t){return Object(j.jsx)("option",{"data-tag-id":e._id,value:e.name},e._id)}))}),Object(j.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add Tag"})]})}),Object(j.jsx)("div",{className:"modal-footer",children:Object(j.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})]})},p=a(17);var f=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(""),o=Object(l.a)(i,2),r=o[0],d=o[1],b=Object(n.useState)(""),u=Object(l.a)(b,2),m=u[0],O=u[1],f=Object(n.useState)(!0),g=Object(l.a)(f,2),x=g[0],v=g[1],y=Object(n.useState)(!1),N=Object(l.a)(y,2),S=N[0],L=N[1],T=Object(h.h)().id,R=Object(n.useState)(!1),U=Object(l.a)(R,2),E=U[0],k=U[1],_=Object(n.useState)(),C=Object(l.a)(_,2),I=C[0],w=C[1];return Object(n.useEffect)((function(){if(""!==e.apiURL){T&&fetch(e.apiURL+"/blog/"+T,{method:"GET",mode:"cors"}).then((function(e){if(200===e.status)return e.json()})).then((function(e){return w(e)}));var t=localStorage.getItem("token");null===t?v(!1):s(t)}}),[T,e.apiURL]),Object(n.useEffect)((function(){I&&d(I[0].post)}),[I]),Object(n.useEffect)((function(){}),[c]),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col",children:[function(){if(!x)return Object(j.jsx)(h.a,{push:!0,to:"/login"})}(),function(){if(S)return Object(j.jsx)(h.a,{push:!0,to:"/blog"})}(),function(){if(E)return Object(j.jsx)(h.a,{push:!0,to:"/blog/".concat(T)})}(),Object(j.jsx)("h1",{className:"text-center h1",children:I?"Update Post":"Create Post"}),Object(j.jsxs)("form",{onSubmit:I?function(e){e.preventDefault(),fetch("https://quiet-retreat-88465.herokuapp.com/blog/"+T,{method:"PUT",body:JSON.stringify({post:r,title:m}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+c},mode:"cors"}).then((function(e){401===e.status&&localStorage.removeItem("token"),200===e.status&&(I?k(!0):L(!0))}))}:function(e){e.preventDefault(),fetch("https://quiet-retreat-88465.herokuapp.com/blog",{method:"POST",body:JSON.stringify({post:r,title:m}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+c},mode:"cors"}).then((function(e){401===e.status&&localStorage.removeItem("token"),200===e.status&&L(!0)}))},children:[I?Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"prev-title",children:"Previous Title:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",style:{minWidth:"30vw",marginBottom:"3vh"},value:I[0].title,required:!0})]}):null,Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",style:{minWidth:"30vw",marginBottom:"3vh"},required:!0,onChange:function(e){return O(e.target.value)}})]}),Object(j.jsx)(p.a,{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).TINY_KEY,onEditorChange:function(e,t){return d(e)},initialValue:I?I[0].post:"",init:{height:500,menubar:"insert",plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount media"],toolbar:"undo redo | formatselect | bold italic backcolor |                         alignleft aligncenter alignright alignjustify |                         bullist numlist outdent indent | removeformat | help | image | media | link"}}),Object(j.jsx)("input",{type:"submit",value:"submit"})]})]})})})};var g=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(""),o=Object(l.a)(i,2),r=o[0],d=o[1],b=Object(n.useState)(""),u=Object(l.a)(b,2),m=u[0],O=u[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),g=f[0],x=f[1],v=Object(n.useState)(!1),y=Object(l.a)(v,2),N=y[0],S=y[1];return Object(n.useEffect)((function(){""!==m&&(localStorage.setItem("token",m),e.setLogin(!0),S(!0))}),[m]),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row d-flex justify-content-center",children:Object(j.jsxs)("div",{className:"col-6",children:[function(){if(N)return Object(j.jsx)(h.a,{push:!0,to:"/blog"})}(),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==e.apiURL&&fetch(e.apiURL+"/login",{method:"POST",body:JSON.stringify({username:c,password:r}),headers:{"Content-Type":"application/json"},mode:"cors"}).then((function(e){if(400!==e.status)return e.json();localStorage.removeItem("token"),x(!0)})).then((function(e){e&&O(e.token)}))},className:"login-form text-center",style:{outline:"3px solid black",padding:"2vw"},children:[Object(j.jsx)("h1",{className:" h1 mb-3 text-center",children:"Login Form"}),Object(j.jsx)("input",{type:"text",className:"form-control  mb-3",name:"username",required:!0,placeholder:"username",onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("input",{type:"password",className:"form-control mb-3",name:"password",placeholder:"password",required:!0,onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("input",{type:"submit",value:"login"})]}),g?Object(j.jsx)("p",{children:"Failed to log in. Please try again."}):null]})})})},x=function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row d-flex justify-content-center",children:Object(j.jsxs)("div",{className:"col-12 col-lg-8",children:[Object(j.jsxs)("h1",{children:["Results: ",e.posts.length]}),e.posts.length>0?e.posts.map((function(e,t){return Object(j.jsx)("div",{className:"card my-3 p-3 shadow-lg",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title fs-1",children:e.title}),Object(j.jsxs)("p",{children:["Posted ",b.DateTime.fromISO(e.postdate).toFormat("LLL dd, yyyy")]}),e.tags.length>0?Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsxs)("p",{children:["Tags:",e.tags.map((function(t,a){return Object(j.jsxs)("span",{children:[t.tagname,a+1!==e.tags.length?", ":null]})}))]})]}):null,Object(j.jsx)("hr",{}),Object(j.jsx)("p",{className:"card-text lh-base fs-5",dangerouslySetInnerHTML:e.post.length>200?{__html:e.post.substr(0,200)+"..."}:{__html:e.post}}),Object(j.jsx)(r.b,{to:"/blog/"+e._id,className:"stretched-link"},e._id)]})},e._id)})):Object(j.jsx)("p",{children:"No results"})]})})})},v=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(h.h)().tagid;return Object(n.useEffect)((function(){""!==e.apiURL&&fetch(e.apiURL+"/tag/"+i+"/posts",{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){return s(e.posts.reverse())}))}),[e.apiURL,i]),Object(j.jsx)(x,{title:i,posts:c})},y=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(h.h)().searchstring;return Object(n.useEffect)((function(){if(""!==e.apiURL&&""!==i){var t=i.split("_").join(" ");fetch(e.apiURL+"/search?query="+t,{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){s(e.results)}))}}),[e.apiURL,i]),Object(j.jsx)(x,{title:"Search: "+i.split("_").join(" "),posts:c})},N=a(24),S=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(""),o=Object(l.a)(i,2),d=o[0],b=o[1],u=Object(n.useState)(""),m=Object(l.a)(u,2),O=m[0],p=m[1],f=Object(h.g)();return Object(n.useEffect)((function(){""!==localStorage.getItem("token")&&b(localStorage.getItem("token"))}),[]),Object(j.jsxs)("nav",{className:"navbar navbar-light navbar-expand-md shadow mb-5",style:{backgroundColor:"#44b787"},children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(r.b,{to:"/",className:"navbar-brand",children:"Home"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navContent","aria-controls":"navContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse d-flex justify-content-end",id:"navContent",children:Object(j.jsxs)("ul",{className:"navbar-nav d-flex",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)("form",{className:"form-inline my-2 my-lg-0 d-flex",onSubmit:function(t){return function(t){t.preventDefault(),""!==e.apiURL&&f.push("/search/"+O.split(" ").join("_"))}(t)},children:[Object(j.jsx)("input",{className:"form-control mr-sm-2 rounded-start",required:!0,type:"text",onChange:function(e){return p(e.target.value)},name:"query",placeholder:"Search","aria-label":"Search"}),Object(j.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",style:{backgroundColor:"darkGreen"},children:Object(j.jsx)(N.a,{color:"black"})})]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/blog",className:"nav-link",children:"Blog"})}),e.loggedIn?Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("p",{className:"nav-link","data-bs-toggle":"modal","data-bs-target":"#createTagModal",style:{cursor:"pointer",marginBottom:"0"},children:"Add Tag"})}):null,e.loggedIn?Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/blog/create",className:"nav-link",children:"Create"})}):null,e.loggedIn?Object(j.jsx)("li",{onClick:function(){localStorage.removeItem("token"),e.setLogin(!1)},className:"nav-item nav-link",style:{cursor:"pointer"},children:"Log Out"}):Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/login",className:"nav-link",children:"Login"})})]})})]}),Object(j.jsx)("div",{className:"modal fade",id:"createTagModal",tabIndex:"-1","aria-labelledby":"createTagModalLabel","aria-hidden":"true",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"createTagModalLabel",children:"Tag Form"}),Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsxs)("form",{children:[""===c?Object(j.jsx)("input",{type:"text",required:!0,onChange:function(e){return s(e.target.value)},defaultValue:""}):Object(j.jsx)("input",{type:"text",required:!0,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(t){""!==e.apiURL&&""!==d&&""!==c&&fetch(e.apiURL+"/tag/",{method:"POST",headers:{Authorization:"Bearer "+d,"Content-Type":"application/json"},body:JSON.stringify({name:c}),mode:"cors"}).then((function(e){return s("")}))},children:"Create Tag"})]})}),Object(j.jsx)("div",{className:"modal-footer",children:Object(j.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})]})};var L=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),o=i[0],b=i[1];function m(e){c(e)}return Object(n.useEffect)((function(){b("https://quiet-retreat-88465.herokuapp.com")}),[]),Object(n.useEffect)((function(){""!==o&&null!==localStorage.getItem("token")&&fetch(o+"/verify",{method:"get",headers:{Authorization:"Bearer "+localStorage.getItem("token")},mode:"cors"}).then((function(e){200===e.status?c(!0):(c(!1),localStorage.removeItem("token"))}))}),[o]),Object(n.useEffect)((function(){}),[a]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{style:{minHeight:"97vh"},children:Object(j.jsxs)(r.a,{hashType:"slash",children:[Object(j.jsx)(S,{setLogin:m,apiURL:""===o?"":o,loggedIn:a}),Object(j.jsxs)(h.d,{children:[Object(j.jsx)(h.b,{path:"/",render:function(){return Object(j.jsx)(d,{apiURL:""===o?"":o})},exact:!0}),Object(j.jsx)(h.b,{path:"/search/:searchstring",exact:!0,children:Object(j.jsx)(y,{apiURL:""===o?"":o})}),Object(j.jsx)(h.b,{path:"/blog/",exact:!0,children:Object(j.jsx)(u,{apiURL:""===o?"":o})}),Object(j.jsx)(h.b,{path:"/blog/create",exact:!0,children:Object(j.jsx)(f,{apiURL:""===o?"":o})}),Object(j.jsx)(h.b,{path:"/blog/:id/edit",exact:!0,children:Object(j.jsx)(f,{apiURL:""===o?"":o})}),Object(j.jsx)(h.b,{path:"/blog/:id",exact:!0,children:Object(j.jsx)(O,{apiURL:""===o?"":o})}),Object(j.jsx)(h.b,{path:"/tag/:tagid",exact:!0,children:Object(j.jsx)(v,{apiURL:""===o?"":o})}),Object(j.jsx)(h.b,{path:"/login",exact:!0,children:Object(j.jsx)(g,{apiURL:""===o?"":o,setLogin:m})})]})]})}),Object(j.jsx)("div",{style:{backgroundColor:"rgb(68, 183, 135)",minHeight:"3vh"},className:"text-center",children:Object(j.jsx)("a",{style:{textDecoration:"none",color:"white"},target:"_blank",rel:"noreferrer",href:"https://anthonyargel.com/",children:"Developer"})})]})};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.67270629.chunk.js.map