(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),c=a(7),s=a(4),o=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function d(e){return l.find((function(t){return t.id===e}))||null}var u=a(0),m=function(e){var t=e.onSubmit,a=Object(o.useState)(""),n=Object(r.a)(a,2),i=n[0],c=n[1],s=Object(o.useState)(!1),m=Object(r.a)(s,2),j=m[0],b=m[1],h=Object(o.useState)(0),O=Object(r.a)(h,2),f=O[0],p=O[1],x=Object(o.useState)(!1),v=Object(r.a)(x,2),S=v[0],y=v[1];return Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),b(!i),y(!f),i&&f&&(t({id:0,title:i,userId:f,completed:!1,user:d(f)}),c(""),p(0))},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"todo-title",className:"label",children:"Title"}),Object(u.jsx)("input",{id:"todo-title",type:"text",name:"Title",placeholder:"Enter title","data-cy":"titleInput",value:i,onChange:function(e){var t=e.target.value.replace(/[^a-zA-Z\u0430-\u044f\u0410-\u042f\d\s]/g,"");c(t),b(!1)}}),j&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"todo-user",className:"label",children:"User"}),Object(u.jsxs)("select",{id:"todo-user","data-cy":"userSelect",value:f,onChange:function(e){p(+e.target.value),y(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),S&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",className:"button",children:"Add"})]})},j=a(9),b=a.n(j),h=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},O=function(e){var t=e.todo;return Object(u.jsxs)("article",{"data-id":t.id,className:b()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(u.jsx)(h,{user:t.user})]})},f=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(O,{todo:e},e.id)}))})},p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:d(e.userId)})}));function x(e){return Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id}))))+1}var v=function(){var e=Object(o.useState)(p),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsx)(m,{onSubmit:function(e){var t=Object(s.a)(Object(s.a)({},e),{},{completed:!0,id:x(a)});n((function(e){return[].concat(Object(c.a)(e),[t])}))}}),Object(u.jsx)(f,{todos:a})]})};i.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.54c7890d.chunk.js.map