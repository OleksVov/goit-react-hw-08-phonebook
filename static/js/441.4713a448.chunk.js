"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[441],{441:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(791),s="Filter_label__vEd1E",r=n(434),o=function(e){return e.contacts.items},c=function(e){return e.filter},l=n(184),i=function(e){var t=e.onChange,n=(0,r.v9)(c);return console.log(n),(0,l.jsxs)("label",{htmlFor:"",className:s,children:["Find contacts by name",(0,l.jsx)("input",{type:"text",value:n,name:"filter",onChange:t})]})},u=n(439),d="Contacts_contactItem__qm4r1",m="Contacts_list__R3QeP",h="Contacts_button__vUlqW",f="Contacts_nameContact__MVYl-",p="Contacts_buttonBox__yOjt0",_="Contacts_form__mYayM",b="Contacts_input__QpUjA",v=n(428),C=n(164),x="Modal_overlay__r63M6",j="Modal_modal__DJDMv",y=document.querySelector("#modal-root"),N=function(e){var t=e.onCloseModal,n=e.children;(0,a.useEffect)((function(){window.addEventListener("keydown",s)})),(0,a.useEffect)((function(){return function(){window.removeEventListener("keydown",s)}}));var s=function(e){"Escape"===e.code&&t()};return(0,C.createPortal)((0,l.jsx)("div",{className:x,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,l.jsx)("div",{className:j,children:n})}),y)},g=function(e){var t=e.onDelete,n=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}((0,r.v9)(o),(0,r.v9)(c)),s=(0,r.I0)(),i=(0,a.useState)(!1),C=(0,u.Z)(i,2),x=C[0],j=C[1],y=(0,a.useState)(null),g=(0,u.Z)(y,2),w=g[0],k=g[1],A=(0,a.useState)(""),S=(0,u.Z)(A,2),Z=S[0],F=S[1],M=(0,a.useState)(""),z=(0,u.Z)(M,2),D=z[0],E=z[1],q=function(){j(!1)};return(0,l.jsxs)("div",{children:[(0,l.jsx)("ul",{className:m,children:n.map((function(e){var n=e.id,a=e.name,s=e.number;return(0,l.jsxs)("li",{className:d,children:[(0,l.jsxs)("p",{className:f,children:[a,": ",s]}),(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("button",{className:h,type:"button",onClick:function(){return function(e,t,n){j(!0),k(n),F(e),E(t)}(a,s,n)},children:"Update"}),(0,l.jsx)("button",{className:h,type:"button",onClick:function(){return t(n)},children:"Delete"})]})]},n)}))}),x&&(0,l.jsxs)(N,{onCloseModal:q,children:[(0,l.jsxs)("form",{className:_,onSubmit:function(e){e.preventDefault(),s((0,v.Tk)({id:w,name:Z,number:D})),q()},children:[(0,l.jsx)("input",{className:b,type:"text",name:"name",value:Z,onChange:function(e){F(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,l.jsx)("input",{className:b,type:"tel",name:"number",value:D,onChange:function(e){E(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,l.jsx)("button",{className:h,type:"submit",children:"Update"})]}),(0,l.jsx)("button",{className:h,type:"button",onClick:q,children:"Close"})]})]})},w="ContactForm_form__dhl+T",k="ContactForm_label__-cVXI",A="ContactForm_buttonSubmit__8QQ3D";var S=function(e){var t=e.onSubmit,n=(0,a.useState)(""),s=(0,u.Z)(n,2),r=s[0],o=s[1],c=(0,a.useState)(""),i=(0,u.Z)(c,2),d=i[0],m=i[1],h=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:console.warm("This type of field is not processed")}},f=function(){o("")},p=function(){m("")};return(0,l.jsxs)("form",{className:w,onSubmit:function(e){e.preventDefault(),t(r,d),f(),p()},children:[(0,l.jsxs)("label",{className:k,children:["Name",(0,l.jsx)("input",{type:"text",name:"name",value:r,onChange:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)("label",{htmlFor:"",className:k,children:["Number",(0,l.jsx)("input",{type:"tel",name:"number",value:d,onChange:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)("button",{className:A,type:"submit",children:"Add contact"})]})},Z=n(895);function F(){var e=(0,r.I0)(),t=(0,r.v9)(o);(0,a.useEffect)((function(){e((0,v.yF)())}),[e]);return(0,l.jsxs)("div",{style:{padding:40},children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(S,{onSubmit:function(n,a){var s,r=(s=n,t.some((function(e){var t=e.name;return s.toLowerCase()===t.toLowerCase()})));r?alert("".concat(n," is already in contacts")):e((0,v.uK)({name:n,number:a}))}}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(i,{onChange:function(t){e((0,Z.W1)(t.target.value))}}),(0,l.jsx)(g,{onDelete:function(t){e((0,v.GK)(t))}})]})}}}]);
//# sourceMappingURL=441.4713a448.chunk.js.map