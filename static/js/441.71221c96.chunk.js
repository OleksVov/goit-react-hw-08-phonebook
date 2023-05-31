"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[441],{441:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(791),o="Filter_label__vEd1E",s=n(434),r=function(e){return e.contacts.items},c=function(e){return e.filter},l=n(184),u=function(e){var t=e.onChange,n=(0,s.v9)(c);return console.log(n),(0,l.jsxs)("label",{htmlFor:"",className:o,children:["Find contacts by name",(0,l.jsx)("input",{type:"text",value:n,name:"filter",onChange:t})]})},i=n(439),d={contactItem:"Contacts_contactItem__qm4r1",list:"Contacts_list__R3QeP",button:"Contacts_button__vUlqW",nameContact:"Contacts_nameContact__MVYl-",buttonBox:"Contacts_buttonBox__yOjt0",form:"Contacts_form__mYayM"},m=n(428),h=n(164),f="Modal_overlay__r63M6",b="Modal_modal__DJDMv",p=document.querySelector("#modal-root"),v=function(e){var t=e.onCloseModal,n=e.children;(0,a.useEffect)((function(){window.addEventListener("keydown",o)})),(0,a.useEffect)((function(){return function(){window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&t()};return(0,h.createPortal)((0,l.jsx)("div",{className:f,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,l.jsx)("div",{className:b,children:n})}),p)},_=function(e){var t=e.onDelete,n=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}((0,s.v9)(r),(0,s.v9)(c)),o=(0,s.I0)(),u=(0,a.useState)(!1),h=(0,i.Z)(u,2),f=h[0],b=h[1],p=(0,a.useState)(null),_=(0,i.Z)(p,2),x=_[0],C=_[1],j=(0,a.useState)(""),y=(0,i.Z)(j,2),N=y[0],g=y[1],w=(0,a.useState)(""),k=(0,i.Z)(w,2),S=k[0],Z=k[1],A=function(){b(!1)};return(0,l.jsxs)("div",{children:[(0,l.jsx)("ul",{className:d.list,children:n.map((function(e){var n=e.id,a=e.name,o=e.number;return(0,l.jsxs)("li",{className:d.contactItem,children:[(0,l.jsxs)("p",{className:d.nameContact,children:[a,": ",o]}),(0,l.jsxs)("div",{className:d.buttonBox,children:[(0,l.jsx)("button",{className:d.button,type:"button",onClick:function(){return function(e,t,n){b(!0),C(n),g(e),Z(t)}(a,o,n)},children:"Update"}),(0,l.jsx)("button",{className:d.button,type:"button",onClick:function(){return t(n)},children:"Delete"})]})]},n)}))}),f&&(0,l.jsxs)(v,{onCloseModal:A,children:[(0,l.jsx)("div",{className:d.boxForm,children:(0,l.jsxs)("form",{className:d.form,onSubmit:function(e){e.preventDefault(),o((0,m.Tk)({id:x,name:N,number:S})),A()},children:[(0,l.jsx)("input",{type:"text",name:"name",value:N,onChange:function(e){g(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,l.jsx)("input",{type:"tel",name:"number",value:S,onChange:function(e){Z(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,l.jsx)("button",{className:d.button,type:"submit",children:"Update"})]})}),(0,l.jsx)("button",{className:d.button,type:"button",onClick:A,children:"Close"})]})]})},x="ContactForm_form__dhl+T",C="ContactForm_label__-cVXI",j="ContactForm_buttonSubmit__8QQ3D";var y=function(e){var t=e.onSubmit,n=(0,a.useState)(""),o=(0,i.Z)(n,2),s=o[0],r=o[1],c=(0,a.useState)(""),u=(0,i.Z)(c,2),d=u[0],m=u[1],h=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":m(a);break;default:console.warm("This type of field is not processed")}},f=function(){r("")},b=function(){m("")};return(0,l.jsxs)("form",{className:x,onSubmit:function(e){e.preventDefault(),t(s,d),f(),b()},children:[(0,l.jsxs)("label",{className:C,children:["Name",(0,l.jsx)("input",{type:"text",name:"name",value:s,onChange:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)("label",{htmlFor:"",className:C,children:["Number",(0,l.jsx)("input",{type:"tel",name:"number",value:d,onChange:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)("button",{className:j,type:"submit",children:"Add contact"})]})},N=n(895);function g(){var e=(0,s.I0)(),t=(0,s.v9)(r);(0,a.useEffect)((function(){e((0,m.yF)())}),[e]);return(0,l.jsxs)("div",{style:{padding:40},children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(y,{onSubmit:function(n,a){var o,s=(o=n,t.some((function(e){var t=e.name;return o.toLowerCase()===t.toLowerCase()})));s?alert("".concat(n," is already in contacts")):e((0,m.uK)({name:n,number:a}))}}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(u,{onChange:function(t){e((0,N.W1)(t.target.value))}}),(0,l.jsx)(_,{onDelete:function(t){e((0,m.GK)(t))}})]})}}}]);
//# sourceMappingURL=441.71221c96.chunk.js.map