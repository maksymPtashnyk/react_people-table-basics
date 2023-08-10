(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=c(2),s=(c(19),c(20),c(6)),j=c.n(s),i=c(1),l=c(0),o=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},b=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(a.c,{className:o,to:"/",children:"Home"}),Object(l.jsx)(a.c,{className:o,to:"/people",children:"People"})]})})})})},h=(c(22),function(){return Object(l.jsx)("div",{"data-cy":"app",children:Object(l.jsx)("main",{className:"section",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(b,{}),Object(l.jsx)(r.b,{})]})})})}),d=c(8),O=c(4);function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(23);var u=function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.person;return Object(l.jsx)(a.b,{to:"/people/".concat(null===t||void 0===t?void 0:t.slug),className:j()({"has-text-danger":t&&"f"===t.sex}),children:t.name})},p=function(e){var t=e.people,c=e.onError,n=Object(r.i)().slug;return Object(l.jsx)(l.Fragment,{children:!c&&(t?Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===n}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(m,{person:e})}),Object(l.jsx)("td",{children:e.sex}),Object(l.jsx)("td",{children:e.born}),Object(l.jsx)("td",{children:e.died}),Object(l.jsx)("td",{children:e.mother?Object(l.jsx)(m,{person:e.mother}):e.motherName||"-"}),Object(l.jsx)("td",{children:e.father?Object(l.jsx)(m,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]}):Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}))})},f=function(e,t,c){return"father"===c?e.find((function(e){return e.name===t.fatherName})):e.find((function(e){return e.name===t.motherName}))},v=function(){var e=Object(i.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(!1),r=Object(O.a)(a,2),s=r[0],j=r[1],o=Object(i.useState)(!0),b=Object(O.a)(o,2),h=b[0],m=b[1];return Object(i.useEffect)((function(){m(!0),x().then((function(e){var t=e.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{father:f(e,t,"father"),mother:f(e,t,"mother")})}));n(t)})).catch((function(){return j(!0)})).finally((function(){return m(!1)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[h?Object(l.jsx)(u,{}):Object(l.jsx)(p,{onError:s,people:c}),s&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(r.e,{children:Object(l.jsxs)(r.c,{path:"/",element:Object(l.jsx)(h,{}),children:[Object(l.jsx)(r.c,{index:!0,element:Object(l.jsx)("h1",{className:"title",children:"Home Page"})}),Object(l.jsxs)(r.c,{path:"people",children:[Object(l.jsx)(r.c,{index:!0,element:Object(l.jsx)(v,{})}),Object(l.jsx)(r.c,{path:":slug",element:Object(l.jsx)(v,{})})]}),Object(l.jsx)(r.c,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})}),Object(l.jsx)(r.c,{path:"home",element:Object(l.jsx)(r.a,{replace:!0,to:"/"})})]})})}))}},[[24,1,2]]]);
//# sourceMappingURL=main.68963dfb.chunk.js.map