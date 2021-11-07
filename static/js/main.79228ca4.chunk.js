(this["webpackJsonpreact-sixth-app"]=this["webpackJsonpreact-sixth-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__gRygR",summary:"CartItem_summary__RUnjA",price:"CartItem_price__poKLv",amount:"CartItem_amount__3h70V",actions:"CartItem_actions__3YhSJ"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__BT46c",total:"Cart_total__2EkIl",actions:"Cart_actions__14GK3","button--alt":"Cart_button--alt__1V4s4",button:"Cart_button__2JSly"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__36GM5",icon:"HeaderCartButton_icon__jJae7",badge:"HeaderCartButton_badge__29lzu",bump:"HeaderCartButton_bump__2EPwk"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2AluK",description:"MealItem_description__2uywM",price:"MealItem_price__3STAX"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3PW2_",modal:"Modal_modal__1pfaw","slide-down":"Modal_slide-down__1qcAL"}},,function(e,t,n){e.exports={header:"Header_header__1lr9z","main-image":"Header_main-image__1zgs_"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__17zwJ"}},function(e,t,n){e.exports={input:"Input_input__3A-NQ"}},function(e,t,n){e.exports={form:"MealItemForm_form__3rncZ"}},function(e,t,n){e.exports={card:"Card_card__1CE6G"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__35-3r","meals-appear":"AvailableMeals_meals-appear__uUVof"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),m=n(8),d=n.n(m),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(u).items,m=s.reduce((function(e,t){return e+t.amount}),0),j="".concat(d.a.button," ").concat(a?d.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{onClick:e.onClick,className:j,children:[Object(o.jsx)("span",{className:d.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:d.a.badge,children:m})]})},b=n.p+"static/media/meals.2971f633.jpg",x=n(13),p=n.n(x),O=function(e){return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsxs)("header",{className:p.a.header,children:[Object(o.jsx)("h1",{children:"React Meals"}),Object(o.jsx)(j,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:p.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"table full of delicious food!"})})]})},h=n(15),_=n.n(h),f=function(){return Object(o.jsxs)("section",{className:_.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To Uou"}),Object(o.jsx)("p",{children:"Choose yout favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(2),C=n(16),g=n.n(C),A=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:g.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(v.a)({ref:t},e.input))]})})),N=n(17),y=n.n(N),I=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(o.jsxs)("form",{className:y.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(A,{ref:s,label:"amount",input:{id:"amount",type:"number",min:"1",max:"5",step:1,defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount between (1-5)."})]})},w=n(10),M=n.n(w),k=function(e){var t=Object(r.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:M.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:M.a.description,children:e.description}),Object(o.jsx)("div",{className:M.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(I,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},H=n(18),S=n.n(H),B=function(e){return Object(o.jsx)("div",{className:S.a.card,children:e.children})},R=n(19),E=n.n(R),F=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],z=function(){var e=F.map((function(e){return Object(o.jsx)(k,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:E.a.meals,children:Object(o.jsx)(B,{children:Object(o.jsx)("ul",{children:e})})})},T=function(){return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(z,{})]})},D=n(11),J=n.n(D),P=function(e){return Object(o.jsx)("div",{className:J.a.backdrop,onClick:e.onClose})},V=function(e){return Object(o.jsx)("div",{className:J.a.modal,children:Object(o.jsx)("div",{className:J.a.content,children:e.children})})},G=function(e){var t=document.getElementById("overlays");return Object(o.jsxs)(s.a.Fragment,{children:[c.a.createPortal(Object(o.jsx)(P,{onClose:e.onClose}),t),c.a.createPortal(Object(o.jsx)(V,{children:e.children}),t)]})},K=n(4),U=n.n(K),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:U.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:U.a.summary,children:[Object(o.jsx)("span",{className:U.a.price,children:t}),Object(o.jsxs)("span",{className:U.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:U.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},q=n(5),L=n.n(q),Y=function(e){var t=Object(r.useContext)(u),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(v.a)(Object(v.a)({},e),{},{amount:1}))},s=Object(o.jsx)("ul",{className:L.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)($,{name:e.name,price:e.price,amount:e.amount,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(o.jsxs)(G,{onClose:e.onClose,children:[s,Object(o.jsxs)("div",{className:L.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:L.a.actions,children:[Object(o.jsx)("button",{className:L.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(o.jsx)("button",{className:L.a.button,children:"Order"})]})]})},Q=n(14),W={items:[],totalAmount:0},X=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(v.a)(Object(v.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(Q.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(v.a)(Object(v.a)({},l),{},{amount:l.amount-1});(s=Object(Q.a)(e.items))[o]=m}return{items:s,totalAmount:u}}return W},Z=function(e){var t=Object(r.useReducer)(X,W),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var ee=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(Z,{children:[Object(o.jsx)(O,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(T,{})}),n&&Object(o.jsx)(Y,{onClose:function(){a(!1)}})]})};c.a.render(Object(o.jsx)(ee,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.79228ca4.chunk.js.map