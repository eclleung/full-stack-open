(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(13),c=t.n(u),o=t(14),l=t(2),i=function(e){var n=e.nameFilter,t=e.handleFilterChange;return a.a.createElement("div",null,"Filter shown with: ",a.a.createElement("input",{type:"text",value:n,onChange:t}))},m=function(e){var n=e.person,t=e.removeEntry;return a.a.createElement("div",null,n.name," ",n.number,"   ",a.a.createElement("button",{onClick:t},"Delete"))},s=function(e){return a.a.createElement("form",{onSubmit:e.addEntry},a.a.createElement("div",null,"Full name: ",a.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),a.a.createElement("div",null,"Phone number: ",a.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"Add")))},f=function(e){var n=e.message,t=e.error,r=null===n||""===n?a.a.createElement("div",null):!0===t?a.a.createElement("div",{className:"error"},n):a.a.createElement("div",{className:"success"},n);return a.a.createElement("div",null,r)},d=t(3),b=t.n(d),h="/api/persons",p=function(){return b.a.get(h).then((function(e){return e.data}))},v=function(e){return b.a.post(h,e).then((function(e){return e.data}))},E=function(e){return b.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},O=function(e,n){return b.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))};function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var w=function(){var e=Object(r.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(r.useState)(""),d=Object(l.a)(c,2),b=d[0],h=d[1],w=Object(r.useState)(""),g=Object(l.a)(w,2),j=g[0],C=g[1],N=Object(r.useState)(""),P=Object(l.a)(N,2),S=P[0],k=P[1],D=Object(r.useState)(""),F=Object(l.a)(D,2),T=F[0],A=F[1],x=Object(r.useState)(!1),J=Object(l.a)(x,2),L=J[0],B=J[1];Object(r.useEffect)((function(){p().then((function(e){u(e)}))}),[]);var I=t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())})),q=function(e,n){return window.confirm("Are you sure you want to delete ".concat(n,"?"))?E(e).catch((function(r){B(!0),A("Oops! ".concat(n," has already been removed from the server.")),setTimeout((function(){A(null),B(!1)}),5e3),u(t.filter((function(n){return n.id!==e})))}))&&u(t.filter((function(n){return n.id!==e}))):null};return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(f,{message:T,error:L}),a.a.createElement(i,{nameFilter:S,handleFilterChange:function(e){return k(e.target.value)}}),a.a.createElement("h3",null,"Add a new entry"),a.a.createElement(s,{addEntry:function(e){e.preventDefault();var n=t.find((function(e){return e.name===b})),r=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(t,!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n,{number:j});return void 0===n?v({name:b,number:j}).then((function(e){h(""),C(""),u(t.concat(e)),A("".concat(e.name," was successfully added!")),setTimeout((function(){A(null)}),5e3)})):n.name===b&&n.number!==j?(!0===window.confirm("".concat(b," is already in the phonebook. Do you want to update the number?"))?O(r.id,r).then((function(e){h(""),C(""),u(t.map((function(n){return n.name!==b?n:e}))),A("".concat(e.name,"'s number was successfully changed!")),setTimeout((function(){A(null)}),5e3)})).catch((function(e){B(!0),A("Oops! ".concat(n.name," has already been removed from the server.")),setTimeout((function(){A(null),B(!1)}),5e3)})):C(""),h("")):n.name===b&&n.number===j?alert("".concat(n.name,"'s name and number are already in the phonebook!")):null},newName:b,newNumber:j,handleNameChange:function(e){return h(e.target.value)},handleNumberChange:function(e){return C(e.target.value)}}),a.a.createElement("h3",null,"Numbers"),a.a.createElement("div",null,I.map((function(e){return a.a.createElement(m,{key:e.name,person:e,removeEntry:function(){return q(e.id,e.name)}})}))))};t(37);c.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f6a5186e.chunk.js.map