(this.webpackJsonptimecap=this.webpackJsonptimecap||[]).push([[0],{26:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),i=a.n(r),s=(a(26),a(2)),l=a(4),m=a(7),j=a(44),b=a(5),o=a.n(b),h=a(1),d=function(){var e=Object(n.useState)({starttime:"",endtime:"",break:"",totalHours:"",answer:!1}),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(m.a)(r,2),b=i[0],d=i[1],u=function(e){d(!1),c(Object(l.a)(Object(l.a)({},a),{},Object(s.a)({},e.target.name,e.target.value)))};function O(e){var t=e/60|0,n=e%60|0,r=o.a.utc().hours(t).minutes(n).format("hh:mm");!function(e){var t=e/60|0,n=e%60|0,r=o.a.utc().hours(t).minutes(n).format("hh:mm");c(Object(l.a)(Object(l.a)({},a),{},{totalHours:r,answer:!0}))}(o()(r,"hh:mm").diff(o()("00:".concat(a.break),"hh:mm"),"minutes"))}return Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("div",{className:"bg-light text-dark p-4",children:Object(h.jsx)("h1",{children:"\u23f1 Time Tracker \u23f1"})}),Object(h.jsx)("hr",{className:"my-5"}),b&&Object(h.jsxs)(j.a,{container:!0,justifyContent:"center",my:2,children:[Object(h.jsxs)("div",{className:"alert alert-danger d-flex align-items-center w-25",role:"alert",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-exclamation-triangle-fill flex-shrink-0 me-2",viewBox:"0 0 16 16",role:"img","aria-label":"Warning:",children:Object(h.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),Object(h.jsx)("div",{children:" Please fill Start Time and End Time !!! "})]})," "]}),Object(h.jsxs)(j.a,{container:!0,justifyContent:"center",my:2,children:[Object(h.jsx)(j.a,{item:!0,lg:1,children:Object(h.jsx)("label",{className:"mt-2",htmlFor:"starttime",children:"Start Time : "})}),Object(h.jsx)(j.a,{item:!0,lg:2,children:Object(h.jsx)("input",{type:"time",name:"starttime",className:"form-control",id:"starttime",value:a.starttime,onChange:function(e){return u(e)}})})]}),Object(h.jsxs)(j.a,{container:!0,justifyContent:"center",my:2,children:[Object(h.jsx)(j.a,{item:!0,lg:1,children:Object(h.jsx)("label",{className:"mt-2",htmlFor:"break",children:"Break :"})}),Object(h.jsx)(j.a,{item:!0,lg:2,children:Object(h.jsx)("input",{type:"text",name:"break",className:"form-control",id:"break",value:a.break,onChange:function(e){return u(e)}})})]}),Object(h.jsxs)(j.a,{container:!0,justifyContent:"center",my:2,children:[Object(h.jsx)(j.a,{item:!0,lg:1,children:Object(h.jsx)("label",{className:"mt-2",htmlFor:"endtime",children:"End Time :"})}),Object(h.jsx)(j.a,{item:!0,lg:2,children:Object(h.jsx)("input",{type:"time",name:"endtime",className:"form-control",id:"endtime",value:a.endtime,onChange:function(e){return u(e)}})})]}),Object(h.jsx)("hr",{className:"my-5"}),Object(h.jsx)("button",{className:"btn btn-outline-light w-25",onClick:function(){a.starttime&&a.endtime?O(o()(a.endtime,"hh:mm").diff(o()(a.starttime,"hh:mm"),"minutes")):(d(!0),c(Object(l.a)(Object(l.a)({},a),{},{answer:!1})))},children:"Submit"}),a.answer&&Object(h.jsx)("div",{className:"bg-light text-dark p-4",style:{margin:"5rem 0"},children:Object(h.jsxs)("h1",{children:["\ud83c\udf89 \ud83c\udf89  Great ! You Worked ",Object(h.jsx)("span",{className:"text-danger",children:a.totalHours})," hours  \ud83c\udf89 \ud83c\udf89"]})})]})};var u=function(){return Object(h.jsx)("div",{className:"mt-5",children:Object(h.jsx)(d,{})})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.d5cb1b1d.chunk.js.map