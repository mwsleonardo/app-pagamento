(this["webpackJsonpprojeto-react"]=this["webpackJsonpprojeto-react"]||[]).push([[0],{15:function(e,t,c){},20:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);c(15);var n=c(2),a=c.n(n),s=c(14),o=c.n(s),r=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))},i=c(3),d=(c(20),c(5)),l=c.n(d),u=c(0);var j=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({}),o=Object(i.a)(s,2),r=o[0],d=o[1],j=Object(n.useState)(!1),m=Object(i.a)(j,2),b=m[0],O=m[1],p=Object(n.useState)(!1),h=Object(i.a)(p,2),x=h[0],v=h[1];Object(n.useEffect)((function(){l.a.get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce",{method:"GET"}).then((function(e){a(e.data)}))}),[]);var f=function(e){v(!0)};return Object(u.jsxs)(u.Fragment,{children:[c.map((function(e,t){return Object(u.jsx)("div",{className:"user_container",children:Object(u.jsxs)("div",{className:"user_content",children:[Object(u.jsx)("img",{src:"",alt:""}),Object(u.jsx)("img",{className:"user_thumbnail",src:e.img,alt:""}),Object(u.jsxs)("div",{className:"user_infos",children:[Object(u.jsxs)("p",{children:["Nome do Usu\xe1rio: ",e.name]}),Object(u.jsxs)("p",{children:["ID: ",e.id," - Username: ",e.username]})]}),Object(u.jsx)("button",{"data-index":t,onClick:function(e){return d(c[t]),void O(!0)},children:"PAGAR"})]})},"user"+t)})),Object(u.jsx)("div",{className:"backdrop",style:{display:b?"block":"none"},onClick:function(){return O(!1)}}),Object(u.jsxs)("div",{className:"modal_box",style:{display:b?"block":"none"},children:[Object(u.jsx)("div",{className:"modal_title",children:Object(u.jsxs)("p",{children:["   Pagamento para ",Object(u.jsx)("span",{children:r.name})]})}),Object(u.jsxs)("form",{action:"",className:"modal_form",children:[Object(u.jsx)("input",{name:"valor",type:"number",id:"valor",placeholder:"R$ 0,00",required:!0}),Object(u.jsxs)("select",{name:"card",id:"card",required:!0,children:[Object(u.jsx)("option",{value:"",children:"Selecione o cart\xe3o"}),[{card_number:"1111111111111111",cvv:789,expiry_date:"01/18"},{card_number:"4111111111111234",cvv:123,expiry_date:"01/20"}].map((function(e,t){return Object(u.jsxs)("option",{value:"card"+t,children:["Cart\xe3o com final ",e.card_number.substr(-4)]},"card"+t)}))]}),Object(u.jsx)("button",{className:"modal_button",onClick:function(e){return function(e){e.preventDefault();var t=document.getElementById("card").value,c=document.getElementById("valor").value,n=document.getElementById("payment_succes"),a=document.getElementById("payment_error");"card0"===t?(l.a.post("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",{card_number:"1111111111111111",cvv:789,expiry_date:"01/18",destination_user_id:r.id,value:c}),f(),a.innerHTML=""):(f(),n.innerHTML="")}(e)},children:"PAGAR"})]})]}),Object(u.jsxs)("div",{className:"modal_box",style:{display:x?"block":"none"},children:[Object(u.jsx)("div",{className:"modal_title",children:Object(u.jsx)("p",{children:"Recibo de pagamento"})}),Object(u.jsxs)("div",{className:"modal_content",children:[Object(u.jsx)("h2",{id:"payment_succes",children:"O pagamento foi conclu\xeddo com sucesso"}),Object(u.jsx)("h2",{id:"payment_error",children:"O pagamento n\xe3o foi conclu\xeddo com sucesso"}),Object(u.jsx)("button",{onClick:function(){window.location.reload()},children:"Concluir Transa\xe7\xe3o"})]})]})]})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),r()}},[[40,1,2]]]);
//# sourceMappingURL=main.04185f9e.chunk.js.map