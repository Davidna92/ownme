(this.webpackJsonphayavli=this.webpackJsonphayavli||[]).push([[0],{19:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),u=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"\u20aa \u05d7\u05d9\u05d9\u05d1 \u05dc\u05d9"),r.a.createElement("h5",null,"\u05d9\u05e9 \u05d3\u05d1\u05e8\u05d9\u05dd \u05e9\u05d0\u05e1\u05d5\u05e8 \u05dc\u05e9\u05db\u05d5\u05d7"))},o=a(13),i=a.n(o),m=a(4),s=a(16),d=a(6),b=function(e,t){switch(t.type){case"ADD_DEBT":return Object(d.a)(Object(d.a)({},e),{},{debts:[].concat(Object(s.a)(e.debts),[t.payload])});case"DELETE_DEBT":return Object(d.a)(Object(d.a)({},e),{},{debts:e.debts.filter((function(e){return e.id!==t.payload}))});default:return e}},E=a(9),f=a.n(E),v={debts:JSON.parse(localStorage.getItem("debts"))||[]},p=Object(n.createContext)(v),h=function(e){var t=e.children,a=Object(n.useReducer)(b,v),l=Object(m.a)(a,2),c=l[0],u=l[1];return Object(n.useEffect)((function(){localStorage.setItem("debts",JSON.stringify(c.debts))})),r.a.createElement(p.Provider,{value:{debts:c.debts,deleteDebt:function(e){f()({title:"\u05de\u05d7\u05d9\u05e7\u05ea \u05d7\u05d5\u05d1",text:"\u05d1\u05d8\u05d5\u05d7 \u05e9\u05d0\u05ea\u05d4 \u05e8\u05d5\u05e6\u05d4 \u05dc\u05de\u05d7\u05d5\u05e7 \u05d0\u05ea \u05d4\u05d7\u05d5\u05d1?",icon:"warning",buttons:["\u05dc\u05d0","\u05db\u05df"],dangerMode:!1}).then((function(t){t?(f()("\u05d4\u05d7\u05d5\u05d1 \u05d4\u05d5\u05e1\u05e8, \u05de\u05e7\u05d5\u05d5\u05d9\u05dd \u05e9\u05d4\u05e1\u05ea\u05d3\u05e8\u05ea\u05dd !",{icon:"success",button:"\u05ea\u05d5\u05d3\u05d4!"}),u({type:"DELETE_DEBT",payload:e})):f()("\u05d4\u05db\u05dc \u05d1\u05e1\u05d3\u05e8 \u05dc\u05d0 \u05de\u05d7\u05e7\u05e0\u05d5 \u05db\u05dc\u05d5\u05dd")}))},addDebt:function(e){u({type:"ADD_DEBT",payload:e})}}},t)},O=function(){var e=Object(n.useContext)(p).debts.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",{className:"balance-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"\u05e1\u05db\u05d5\u05dd \u05db\u05d5\u05dc\u05dc"),r.a.createElement("h2",null,r.a.createElement(i.a,{start:0,end:Number(e),duration:2.5,separator:","}),"\u20aa")))},j=function(e){var t=e.debt,a=Object(n.useContext)(p).deleteDebt;return r.a.createElement("li",{className:"debt"},r.a.createElement("h4",null,t.name),r.a.createElement("div",null,t.reason),r.a.createElement("span",null,t.amount,"\u20aa"),r.a.createElement("button",{onClick:function(){return a(t.id)},className:"delete-btn"},"\u05de\u05d7\u05e7"))},g=a(15),y=function(){var e=Object(n.useContext)(p).debts;return console.log(e),r.a.createElement("div",null,r.a.createElement("h3",null,"\u05e8\u05e9\u05d9\u05de\u05ea \u05d7\u05d9\u05d9\u05d1\u05d9\u05dd:"),r.a.createElement("ul",{className:"list"},r.a.createElement(g.a,{animation:"grow"},e.map((function(e){return r.a.createElement(j,{key:e.id,debt:e})})))))},D=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),u=Object(m.a)(c,2),o=u[0],i=u[1],s=Object(n.useState)(""),d=Object(m.a)(s,2),b=d[0],E=d[1],f=Object(n.useContext)(p).addDebt;return r.a.createElement("div",null,r.a.createElement("h3",null,"\u05d4\u05d5\u05e1\u05e3 \u05d7\u05d9\u05d9\u05d1"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),name:a,reason:o,amount:+b};f(t),l(""),i(""),E("")}},r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"text",placeholder:"\u05e9\u05dd \u05d4\u05d7\u05d9\u05d9\u05d1",required:!0,value:a,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"text",placeholder:"\u05e1\u05d9\u05d1\u05ea \u05d4\u05d7\u05d5\u05d1",required:!0,value:o,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"number",placeholder:"\u05e1\u05db\u05d5\u05dd",required:!0,value:b,onChange:function(e){return E(e.target.value)}})),r.a.createElement("button",{className:"btn"},"\u05d4\u05d5\u05e1\u05e3")))};a(32);var N=function(){return r.a.createElement(h,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(O,null),r.a.createElement(y,null),r.a.createElement(D,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.91a43a78.chunk.js.map