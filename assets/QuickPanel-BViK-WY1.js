import{g as R,e as O,s as v,f as C,_ as L,r as T,u as P,h as j,i as z,c as F,k as G,S as Q,l as _,m as N,n as A,o as U,j as e,t as E,a as r,T as m,p as y,q as g,L as x,v as d,w as h,x as f,y as b,z as S,A as k,F as W}from"./index-zMAIA6bL.js";function H(s){return R("MuiListSubheader",s)}O("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const $=["className","color","component","disableGutters","disableSticky","inset"],q=s=>{const{classes:t,color:o,disableGutters:a,inset:c,disableSticky:n}=s,i={root:["root",o!=="default"&&`color${C(o)}`,!a&&"gutters",c&&"inset",!n&&"sticky"]};return G(i,H,t)},B=v("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,o.color!=="default"&&t[`color${C(o.color)}`],!o.disableGutters&&t.gutters,o.inset&&t.inset,!o.disableSticky&&t.sticky]}})(({theme:s,ownerState:t})=>L({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(s.vars||s).palette.text.secondary,fontFamily:s.typography.fontFamily,fontWeight:s.typography.fontWeightMedium,fontSize:s.typography.pxToRem(14)},t.color==="primary"&&{color:(s.vars||s).palette.primary.main},t.color==="inherit"&&{color:"inherit"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.inset&&{paddingLeft:72},!t.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(s.vars||s).palette.background.paper})),p=T.forwardRef(function(t,o){const a=P({props:t,name:"MuiListSubheader"}),{className:c,color:n="default",component:i="li",disableGutters:u=!1,disableSticky:l=!1,inset:M=!1}=a,D=j(a,$),w=L({},a,{color:n,component:i,disableGutters:u,disableSticky:l,inset:M}),I=q(w);return z.jsx(B,L({as:i,className:F(I.root,c),ref:o,ownerState:w},D))});p.muiSkipListHighlight=!0;const J=v(Q)(()=>({"& .MuiDrawer-paper":{width:280}}));function V(){const s=_(),t=N(A),o=N(U),[a,c]=T.useState(["notifications"]),n=i=>()=>{const u=a.indexOf(i),l=[...a];u===-1?l.push(i):l.splice(u,1),c(l)};return e(J,{open:o,anchor:"right",onOpen:()=>{},onClose:()=>s(E()),disableSwipeToOpen:!0,children:r(W,{children:[e(p,{component:"div",children:"Today"}),r("div",{className:"mb-0 px-24 py-16",children:[e(m,{className:"mb-12 text-5xl",color:"text.secondary",children:y(new Date,"eeee")}),r("div",{className:"flex",children:[e(m,{className:"text-5xl leading-none",color:"text.secondary",children:y(new Date,"dd")}),e(m,{className:"text-15 leading-none",color:"text.secondary",children:"th"}),e(m,{className:"text-5xl leading-none",color:"text.secondary",children:y(new Date,"MMMM")})]})]}),e(g,{}),r(x,{children:[e(p,{component:"div",children:"Events"}),t&&t.events.map(i=>e(d,{children:e(h,{primary:i.title,secondary:i.detail})},i.id))]}),e(g,{}),r(x,{children:[e(p,{component:"div",children:"Notes"}),t&&t.notes.map(i=>e(d,{children:e(h,{primary:i.title,secondary:i.detail})},i.id))]}),e(g,{}),r(x,{children:[e(p,{component:"div",children:"Quick Settings"}),r(d,{children:[e(f,{className:"min-w-36",children:e(b,{children:"material-outline:notifications"})}),e(h,{primary:"Notifications"}),e(S,{children:e(k,{color:"primary",onChange:n("notifications"),checked:a.indexOf("notifications")!==-1})})]}),r(d,{children:[e(f,{className:"min-w-36",children:e(b,{children:"material-outline:cloud"})}),e(h,{primary:"Cloud Sync"}),e(S,{children:e(k,{color:"secondary",onChange:n("cloudSync"),checked:a.indexOf("cloudSync")!==-1})})]}),r(d,{children:[e(f,{className:"min-w-36",children:e(b,{children:"material-outline:brightness_high"})}),e(h,{primary:"Retro Thrusters"}),e(S,{children:e(k,{color:"primary",onChange:n("retroThrusters"),checked:a.indexOf("retroThrusters")!==-1})})]})]})]})})}export{V as default};