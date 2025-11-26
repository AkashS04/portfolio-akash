import{o as L,n as $,O as S,P,p as g,y as n,w as b,C as d,r as y,q as T,j as a,e as A,t as O,Q as z,S as q,B as i,d as c,H as M}from"./index-Cf_qInv6.js";import{u as N}from"./index-axcqFNKy.js";function F(r){return L("MuiLinearProgress",r)}$("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const h=4,C=S`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,U=typeof C!="string"?P`
        animation: ${C} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,I=S`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,H=typeof I!="string"?P`
        animation: ${I} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,j=S`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,K=typeof j!="string"?P`
        animation: ${j} 3s infinite linear;
      `:null,E=r=>{const{classes:e,variant:t,color:o}=r,x={root:["root",`color${n(o)}`,t],dashed:["dashed",`dashedColor${n(o)}`],bar1:["bar",`barColor${n(o)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar",t!=="buffer"&&`barColor${n(o)}`,t==="buffer"&&`color${n(o)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return O(x,F,e)},R=(r,e)=>r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?z(r.palette[e].main,.62):q(r.palette[e].main,.5),J=g("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${n(t.color)}`],e[t.variant]]}})(b(({theme:r})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter(d()).map(([e])=>({props:{color:e},style:{backgroundColor:R(r,e)}})),{props:({ownerState:e})=>e.color==="inherit"&&e.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),_=g("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${n(t.color)}`]]}})(b(({theme:r})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter(d()).map(([e])=>{const t=R(r,e);return{props:{color:e},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),K||{animation:`${j} 3s infinite linear`}),G=g("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${n(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&e.bar1Indeterminate,t.variant==="determinate"&&e.bar1Determinate,t.variant==="buffer"&&e.bar1Buffer]}})(b(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter(d()).map(([e])=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main}})),{props:{variant:"determinate"},style:{transition:`transform .${h}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${h}s linear`}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:{width:"auto"}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:U||{animation:`${C} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),V=g("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${n(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&e.bar2Indeterminate,t.variant==="buffer"&&e.bar2Buffer]}})(b(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter(d()).map(([e])=>({props:{color:e},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[e].main}})),{props:({ownerState:e})=>e.variant!=="buffer"&&e.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:e})=>e.variant!=="buffer"&&e.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter(d()).map(([e])=>({props:{color:e,variant:"buffer"},style:{backgroundColor:R(r,e),transition:`transform .${h}s linear`}})),{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:{width:"auto"}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:H||{animation:`${I} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),W=y.forwardRef(function(e,t){const o=T({props:e,name:"MuiLinearProgress"}),{className:x,color:w="primary",value:v,valueBuffer:D,variant:l="indeterminate",...B}=o,u={...o,color:w,variant:l},p=E(u),k=N(),m={},f={bar1:{},bar2:{}};if((l==="determinate"||l==="buffer")&&v!==void 0){m["aria-valuenow"]=Math.round(v),m["aria-valuemin"]=0,m["aria-valuemax"]=100;let s=v-100;k&&(s=-s),f.bar1.transform=`translateX(${s}%)`}if(l==="buffer"&&D!==void 0){let s=(D||0)-100;k&&(s=-s),f.bar2.transform=`translateX(${s}%)`}return a.jsxs(J,{className:A(p.root,x),ownerState:u,role:"progressbar",...m,ref:t,...B,children:[l==="buffer"?a.jsx(_,{className:p.dashed,ownerState:u}):null,a.jsx(G,{className:p.bar1,ownerState:u,style:f.bar1}),l==="determinate"?null:a.jsx(V,{className:p.bar2,ownerState:u,style:f.bar2})]})}),X=({title:r,value:e,percentage:t})=>a.jsxs(i,{children:[a.jsx(i,{children:a.jsx(c,{variant:"body1",sx:{color:"#e3e3e3",fontFamily:"Oswald-Regular",letterSpacing:"0.8px"},align:"left",children:r})}),a.jsxs(i,{sx:{display:"flex",alignItems:"center",justifyItems:"center"},children:[a.jsx(W,{sx:{backgroundColor:"#e3e3e3",width:"100%"},variant:"determinate",value:e}),a.jsx(c,{variant:"body2",sx:{color:"#e3e3e3",fontFamily:"Poppins-Semibold",ml:1},children:t})]})]}),Q=[{uID:125,title:"React",value:90,percentage:"90%"},{uID:124,title:"TypeScript",value:90,percentage:"90%"},{uID:135,title:"Tailwind CSS",value:85,percentage:"85%"},{uID:131,title:"Redux",value:85,percentage:"85%"},{uID:132,title:"Jest + React Testing Library",value:80,percentage:"80%"},{uID:136,title:"Playwright",value:75,percentage:"75%"},{uID:128,title:"RESTfull APIs",value:90,percentage:"90%"},{uID:129,title:"GitHub",value:70,percentage:"70%"},{uID:134,title:"GitHub Actions",value:75,percentage:"75%"},{uID:133,title:"Vite",value:75,percentage:"75%"},{uID:121,title:"HTML5",value:95,percentage:"95%"},{uID:122,title:"CSS3",value:90,percentage:"90%"},{uID:123,title:"JavaScript",value:90,percentage:"90%"},{uID:126,title:"Material-UI",value:70,percentage:"70%"},{uID:127,title:"Bootstrap",value:80,percentage:"80%"},{uID:130,title:"JIRA",value:70,percentage:"70%"}],Y=()=>a.jsx(i,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:Q.map(r=>a.jsx(i,{sx:{backgroundColor:"#48484894",padding:"16px",borderRadius:"8px",margin:"16px",width:"40%"},className:"skill-box",children:a.jsx(X,{title:r.title,value:r.value,percentage:r.percentage})},r.uID))}),Z=()=>a.jsx(i,{sx:{padding:"0% 8% 8% 8% "},children:a.jsxs(i,{sx:{backgroundColor:"#0000003b",padding:"2rem 0rem 1rem 0rem",borderRadius:"16px"},children:[a.jsx(c,{variant:"h4",sx:{color:"#e3e3e3",paddingLeft:"2rem",fontFamily:"Kanit-Regular",fontSize:"1.5rem",letterSpacing:"1.8px",mb:{lg:4,md:3,sm:2,xs:2}},align:"left",children:"Core Skills"}),a.jsx(Y,{})]})}),te=y.forwardRef(r=>{console.log("<about >component");const e=y.useContext(M),{aboutRef:t}=e;return a.jsx(a.Fragment,{children:a.jsxs(i,{ref:t,sx:{width:"100%",mt:{lg:8,md:6,sm:4,xs:3},mb:{lg:8,md:6,sm:4,xs:3}},children:[a.jsx(c,{variant:"h2",sx:{color:"#d52e2e",fontFamily:"Oswald-Bold",fontSize:{lg:"3rem",md:"2.6rem",sm:"2.5rem",xs:"2.25rem"},letterSpacing:"4px"},gutterBottom:!0,children:"ABOUT"}),a.jsxs(i,{sx:{padding:"8% "},children:[a.jsx(c,{variant:"h3",align:"left",sx:{fontFamily:"Kanit-Regular",color:"#e6e6e6",fontSize:{lg:"2.5rem",md:"2rem",sm:"1.5rem",xs:"1.5rem"},letterSpacing:"1.8px",mb:{lg:5,md:4,sm:3,xs:3}},gutterBottom:!0,children:"React Developer, India."}),a.jsxs(c,{variant:"body1",align:"left",sx:{fontFamily:"Kanit-Light",fontSize:{lg:"1.174rem",md:"1.1rem",sm:"1rem",xs:"0.9rem"},color:"#e3e3e3",letterSpacing:"1.2px",textAlign:"justify",lineHeight:"1.59"},gutterBottom:!0,children:["2+ years of experience building fast, scalable, and maintainable web applications. Skilled in React, TypeScript, Tailwind CSS, Redux, and REST APIs, with a strong focus on clean architecture, reusable components, and predictable UI behavior.",a.jsx("br",{}),"Work includes crafting dashboards, workflow systems, and responsive interfaces that balance performance with user experience. Strong understanding of state management, API integration, testing (Jest, RTL, Playwright), CI/CD, SEO, and cross-browser compatibility ensures that every solution is reliable in real-world environments.",a.jsx("br",{}),"Driven by curiosity for how systems connect and scale, paired with a mindset built around clarity, structure, and thoughtful design.",a.jsx("br",{}),"Let’s build something meaningful — together."]})]}),a.jsx(Z,{})]})})});export{te as default};
