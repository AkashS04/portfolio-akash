import{o as L,n as w,O as P,P as S,p as g,x as i,y as b,A as d,r as y,q as A,j as a,e as O,t as z,Q as T,S as M,B as n,T as m,H as q}from"./main-DIMqfW4a.js";import{u as F}from"./index-PQYTPQ-C.js";function U(r){return L("MuiLinearProgress",r)}w("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const h=4,C=P`
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
`,N=typeof C!="string"?S`
        animation: ${C} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,j=P`
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
`,H=typeof j!="string"?S`
        animation: ${j} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,I=P`
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
`,E=typeof I!="string"?S`
        animation: ${I} 3s infinite linear;
      `:null,K=r=>{const{classes:e,variant:t,color:o}=r,x={root:["root",`color${i(o)}`,t],dashed:["dashed",`dashedColor${i(o)}`],bar1:["bar",`barColor${i(o)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar",t!=="buffer"&&`barColor${i(o)}`,t==="buffer"&&`color${i(o)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return z(x,U,e)},R=(r,e)=>r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?T(r.palette[e].main,.62):M(r.palette[e].main,.5),J=g("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${i(t.color)}`],e[t.variant]]}})(b(({theme:r})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter(d()).map(([e])=>({props:{color:e},style:{backgroundColor:R(r,e)}})),{props:({ownerState:e})=>e.color==="inherit"&&e.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),V=g("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${i(t.color)}`]]}})(b(({theme:r})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter(d()).map(([e])=>{const t=R(r,e);return{props:{color:e},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),E||{animation:`${I} 3s infinite linear`}),W=g("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${i(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&e.bar1Indeterminate,t.variant==="determinate"&&e.bar1Determinate,t.variant==="buffer"&&e.bar1Buffer]}})(b(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter(d()).map(([e])=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main}})),{props:{variant:"determinate"},style:{transition:`transform .${h}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${h}s linear`}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:{width:"auto"}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:N||{animation:`${C} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),_=g("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${i(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&e.bar2Indeterminate,t.variant==="buffer"&&e.bar2Buffer]}})(b(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter(d()).map(([e])=>({props:{color:e},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[e].main}})),{props:({ownerState:e})=>e.variant!=="buffer"&&e.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:e})=>e.variant!=="buffer"&&e.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter(d()).map(([e])=>({props:{color:e,variant:"buffer"},style:{backgroundColor:R(r,e),transition:`transform .${h}s linear`}})),{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:{width:"auto"}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:H||{animation:`${j} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),G=y.forwardRef(function(e,t){const o=A({props:e,name:"MuiLinearProgress"}),{className:x,color:k="primary",value:v,valueBuffer:D,variant:l="indeterminate",...$}=o,c={...o,color:k,variant:l},u=K(c),B=F(),p={},f={bar1:{},bar2:{}};if((l==="determinate"||l==="buffer")&&v!==void 0){p["aria-valuenow"]=Math.round(v),p["aria-valuemin"]=0,p["aria-valuemax"]=100;let s=v-100;B&&(s=-s),f.bar1.transform=`translateX(${s}%)`}if(l==="buffer"&&D!==void 0){let s=(D||0)-100;B&&(s=-s),f.bar2.transform=`translateX(${s}%)`}return a.jsxs(J,{className:O(u.root,x),ownerState:c,role:"progressbar",...p,ref:t,...$,children:[l==="buffer"?a.jsx(V,{className:u.dashed,ownerState:c}):null,a.jsx(W,{className:u.bar1,ownerState:c,style:f.bar1}),l==="determinate"?null:a.jsx(_,{className:u.bar2,ownerState:c,style:f.bar2})]})}),X=({title:r,value:e,percentage:t})=>a.jsxs(a.Fragment,{children:[a.jsx(n,{children:a.jsx(m,{variant:"h5",sx:{color:"#e3e3e3",fontFamily:"Oswald-Regular",fontSize:{lg:"1.5rem",md:"1.125rem",sm:"1rem",xs:"1rem"}},align:"left",children:r})}),a.jsxs(n,{sx:{display:"flex",alignItems:"center"},children:[a.jsx(n,{sx:{width:"100%",mr:1},children:a.jsx(G,{sx:{backgroundColor:"#e3e3e3"},variant:"determinate",value:e})}),a.jsx(n,{sx:{minWidth:35},children:a.jsx(m,{variant:"body2",sx:{color:"#e3e3e3",fontFamily:"Poppins-Semibold",fontSize:{lg:"1.1rem",md:"1rem",sm:"1.2rem",xs:"0.8rem"}},children:t})})]})]}),Q=[{uID:121,title:"HTML5",value:85,percentage:"85%"},{uID:122,title:"CSS3",value:80,percentage:"80%"},{uID:123,title:"JavaScript",value:90,percentage:"90%"},{uID:124,title:"TypeScript",value:90,percentage:"90%"},{uID:125,title:"React",value:85,percentage:"85%"},{uID:131,title:"Redux",value:85,percentage:"85%"},{uID:126,title:"Material-UI",value:70,percentage:"70%"},{uID:127,title:"Bootstrap",value:80,percentage:"80%"},{uID:132,title:"Vitest",value:75,percentage:"75%"},{uID:128,title:"REST API",value:70,percentage:"70%"},{uID:129,title:"GitHub",value:70,percentage:"70%"},{uID:130,title:"JIRA",value:70,percentage:"70%"},{uID:133,title:"Vite",value:75,percentage:"75%"},{uID:134,title:"GitHub Actions",value:75,percentage:"75%"}],Y=()=>a.jsx(a.Fragment,{children:Q.map(r=>a.jsx(n,{sx:{width:{lg:"40%",md:"40%",sm:"40%",xs:"80%"},display:"flex",flexDirection:"column",backgroundColor:"#48484894",padding:{lg:"1rem 2rem 3rem 2rem",md:"1rem 2rem 3rem 2rem",sm:"0.8rem 1rem 1.5rem 1rem",xs:"0.8rem 0.8rem 1.5rem 0.8rem"},borderRadius:"1rem",margin:{lg:"1rem",md:"0.8rem",sm:"0.7rem",xs:"0.5rem"}},children:a.jsx(X,{title:r.title,value:r.value,percentage:r.percentage})},r.uID))}),Z=()=>a.jsx(n,{sx:{padding:{lg:"0rem 4rem",md:"0rem 3rem",sm:"0rem 2rem",xs:"0rem 2rem"}},children:a.jsxs(n,{sx:{padding:"1rem 0rem",border:"1px solid #707070",borderRadius:".5rem"},children:[a.jsx(m,{variant:"h6",sx:{color:"#e3e3e3",paddingLeft:"2rem",fontFamily:"Oswald-Medium",fontSize:"1.5rem"},align:"left",children:"CORE SKILLS"}),a.jsx(n,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:a.jsx(Y,{})})]})}),te=y.forwardRef(r=>{console.log("<about >component");const e=y.useContext(q),{aboutRef:t}=e;return a.jsx(a.Fragment,{children:a.jsxs(n,{ref:t,sx:{width:"100%"},children:[a.jsx(m,{variant:"h3",sx:{color:"#d52e2e",fontFamily:"Oswald-Bold",mt:"1rem",fontSize:{lg:"3rem",md:"2.6rem",sm:"2.5rem",xs:"2.25rem"}},gutterBottom:!0,children:"ABOUT"}),a.jsxs(n,{sx:{padding:{lg:"1rem 4rem",md:"1rem 4rem",sm:"1rem 2rem",xs:"0.5rem 2rem"}},children:[a.jsx(m,{variant:"h4",align:"left",sx:{fontFamily:"Kanit-Regular",color:"#00d8ff",fontSize:{lg:"2.5rem",md:"2rem",sm:"1.5rem",xs:"1.5rem"}},gutterBottom:!0,children:"React Developer, India."}),a.jsxs(m,{variant:"h5",align:"left",sx:{fontFamily:"kanit-Regular",color:"#e3e3e3",fontSize:{lg:"1.5rem",md:"1.125rem",sm:"1rem",xs:"1rem"}},gutterBottom:!0,children:["Skilled in Building Scalable and User-Centric Web Applications Crafting dynamic UIs with React.js, Javascript, Typescript, HTML, CSS.",a.jsx("br",{}),"Managing state with Redux & Context API and Seamless API integration using REST APIs for optimal user experiences."]})]}),a.jsx(Z,{})]})})});export{te as default};
