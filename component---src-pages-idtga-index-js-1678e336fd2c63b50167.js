"use strict";(self.webpackChunkrewrite=self.webpackChunkrewrite||[]).push([[9718],{1385:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var n=a(7294),l=a(6010),r=a(1883),s=a(784),o=a(9686),c=a(6630),i=a(7462),m=a(6652),d=a(2707),u=a(9920),f=a(9563),p=a(7255),h=a(192),g=a(3216),x=a(6195);const b="Collapsible",[v,E]=(0,d.b)(b),[w,k]=v(b),N=(0,n.forwardRef)(((e,t)=>{const{__scopeCollapsible:a,open:l,defaultOpen:r,disabled:s,onOpenChange:o,...c}=e,[m=!1,d]=(0,u.T)({prop:l,defaultProp:r,onChange:o});return(0,n.createElement)(w,{scope:a,disabled:s,contentId:(0,x.M)(),open:m,onOpenToggle:(0,n.useCallback)((()=>d((e=>!e))),[d])},(0,n.createElement)(h.WV.div,(0,i.Z)({"data-state":j(m),"data-disabled":s?"":void 0},c,{ref:t})))})),y="CollapsibleTrigger",C=(0,n.forwardRef)(((e,t)=>{const{__scopeCollapsible:a,...l}=e,r=k(y,a);return(0,n.createElement)(h.WV.button,(0,i.Z)({type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":j(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled},l,{ref:t,onClick:(0,m.M)(e.onClick,r.onOpenToggle)}))})),M="CollapsibleContent",z=(0,n.forwardRef)(((e,t)=>{const{forceMount:a,...l}=e,r=k(M,e.__scopeCollapsible);return(0,n.createElement)(g.z,{present:a||r.open},(({present:e})=>(0,n.createElement)(Z,(0,i.Z)({},l,{ref:t,present:e}))))})),Z=(0,n.forwardRef)(((e,t)=>{const{__scopeCollapsible:a,present:l,children:r,...s}=e,o=k(M,a),[c,m]=(0,n.useState)(l),d=(0,n.useRef)(null),u=(0,p.e)(t,d),g=(0,n.useRef)(0),x=g.current,b=(0,n.useRef)(0),v=b.current,E=o.open||c,w=(0,n.useRef)(E),N=(0,n.useRef)();return(0,n.useEffect)((()=>{const e=requestAnimationFrame((()=>w.current=!1));return()=>cancelAnimationFrame(e)}),[]),(0,f.b)((()=>{const e=d.current;if(e){N.current=N.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";const t=e.getBoundingClientRect();g.current=t.height,b.current=t.width,w.current||(e.style.transitionDuration=N.current.transitionDuration,e.style.animationName=N.current.animationName),m(l)}}),[o.open,l]),(0,n.createElement)(h.WV.div,(0,i.Z)({"data-state":j(o.open),"data-disabled":o.disabled?"":void 0,id:o.contentId,hidden:!E},s,{ref:u,style:{"--radix-collapsible-content-height":x?`${x}px`:void 0,"--radix-collapsible-content-width":v?`${v}px`:void 0,...e.style}}),E&&r)}));function j(e){return e?"open":"closed"}const R=N,_=C,A=z;var D=a(7598),H=a(2954),O=a.p+"static/idtga-bcb2cec65d0b2cb6456705c7a3f54dcf.svg",T=a.p+"static/skater-2f1d042ace4fff587bbf40287925703d.webp",V=a.p+"static/promo_invite-d4f1c5f7f20734f96f89342c342eb7f8.webp",L=a.p+"static/promo_blaster-b355ef20d8ecadd6ebc70659e807b031.webp",S=a.p+"static/promo_friends-cf882570e599dbaad20a49134b443ed6.webp",W=a(1151);function F(e){const t=Object.assign({p:"p",em:"em",strong:"strong",ul:"ul",li:"li"},(0,W.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.p,null,"We're back for season 47, after a ",n.createElement(t.em,null,"bit")," of a hiatus going into October.\nFeel free to check out the full list of changes in the patch notes below!"),"\n",n.createElement(t.p,null,n.createElement(t.strong,null,"Patch Notes:")),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"A minimum threshold for the Master Bracket has been created please see the most recent OTD blogpost for more information!"),"\n",n.createElement(t.li,null,"Some changes to staff have been made internally so be patient with us as we get ourselves situated!"),"\n",n.createElement(t.li,null,"Alongside the above staff changes we will be experimenting with a bi-monthly format until further notice."),"\n",n.createElement(t.li,null,"For full patch notes please refer to the most recent pull request on our GitHub."),"\n"))}var I=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,W.ah)(),e.components);return t?n.createElement(t,e,n.createElement(F,e)):F(e)},P=a(6774);const B=()=>{var e,t,a,l,i,m,d,u;const f=(0,D.Z)("idtga"),p=e=>(0,s.Z)((0,o.Z)({start:new Date,end:e})).split(" ").slice(0,2).join(" ");return n.createElement("div",{className:"bg-default flex w-full flex-col items-stretch rounded-t-xl shadow-xl sm:max-w-lg sm:rounded-xl"},n.createElement("div",{className:"rounded-t-xl bg-slate-200 px-8 py-8 dark:bg-slate-800"},n.createElement("h2",{className:"text-center text-xl font-semibold"},f.data?f.data.smashgg.name:n.createElement("div",{className:"mx-auto h-7 w-96 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700"}))),n.createElement("div",{className:"mx-auto flex w-full max-w-lg flex-col items-stretch gap-8 px-8 py-8"},f.data&&n.createElement(G,{data:f.data}),n.createElement("div",{className:"flex flex-col items-stretch gap-2"},n.createElement(q,{icon:n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"}),left:"Tournament starts:"},n.createElement("div",{className:(null===(e=f.data)||void 0===e?void 0:e.hasEnded())&&"line-through"},f.data?(0,c.Z)(f.data.startDate,"MMM d, h:mm aa"):n.createElement("div",{className:"mx-auto h-6 w-32 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700"}))),n.createElement(q,{icon:n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}),left:"Registration closes:"},n.createElement("div",{className:(null===(t=f.data)||void 0===t?void 0:t.hasClosed())&&"line-through"},f.data?null!==(a=f.data)&&void 0!==a&&a.hasClosed()?p(null===(l=f.data)||void 0===l?void 0:l.closeDate)+" ago":"in "+p(null===(i=f.data)||void 0===i?void 0:i.closeDate):n.createElement("div",{className:"mx-auto h-6 w-32 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700"})))),n.createElement(U,null),n.createElement("div",{className:"flex flex-wrap items-center justify-between gap-3 sm:rounded-b-xl"},n.createElement(r.rU,{to:"/signup",className:"rounded-lg"},n.createElement("button",{disabled:!(!1===(null===(m=f.data)||void 0===m?void 0:m.hasEnded())),className:"rounded-lg bg-otd-cyan-200 py-2 px-6 text-lg font-medium hover:enabled:bg-otd-cyan-300 disabled:opacity-50 disabled:grayscale-[50%] dark:bg-otd-cyan-700 hover:enabled:dark:bg-otd-cyan-600"},null===(d=f.data)||void 0===d||!d.hasClosed()||null!==(u=f.data)&&void 0!==u&&u.hasEnded()?"Signup!":"Signup as a sub!")),n.createElement(r.rU,{to:"rules"},n.createElement("button",{className:"rounded-lg bg-slate-200 py-2 px-6 text-lg font-medium hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700"},"Rules")),n.createElement("p",{className:"text-sm text-slate-500"},"Times are listed in your timezone, see rules for format and schedule."))))},G=e=>{let{data:t}=e,a={color:"bg-green-600/20 text-green-700 dark:bg-green-400/20 dark:text-green-400",underline:"decoration-green-700/50 dark:decoration-green-400/50 hover:decoration-green-700 hover:dark:decoration-green-400",message:"Registration is currently open!"};return t.hasClosed()&&(a={color:"bg-lime-600/20 text-lime-700 dark:bg-lime-400/20 dark:text-lime-400",underline:"decoration-lime-700/50 dark:decoration-lime-400/50 hover:decoration-lime-700 hover:dark:decoration-lime-400",message:"Signups have closed, but you can still register as a sub!"}),t.hasEnded()&&(a={color:"bg-red-600/20 text-red-700 dark:bg-red-400/20 dark:text-red-400",underline:"decoration-red-700/5k0 dark:decoration-red-400/50 hover:decoration-red-700 hover:dark:decoration-red-400",message:"This season has concluded, thanks for playing!"}),n.createElement("div",{className:(0,l.Z)("flex items-center gap-4 rounded-lg p-4 font-medium",a.color)},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6 flex-shrink-0"},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})),a.message)},q=e=>{let{icon:t,left:a,className:r,children:s}=e;return n.createElement("div",{className:(0,l.Z)("flex flex-wrap items-center gap-2 text-xl text-slate-600 dark:text-slate-300",r)},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6 flex-shrink-0 text-slate-500 dark:text-slate-400"},t),n.createElement("div",{className:"mr-auto"},a),n.createElement("div",{className:"font-medium"},s))},U=()=>{const{0:e,1:t}=(0,n.useState)(!1),{0:a,1:s}=(0,n.useState)(!1);return(0,r.K2)("1978084442").mdx.frontmatter.hidden?null:n.createElement(R,{open:e,onOpenChange:t,className:(0,l.Z)("rounded-lg border-2 border-slate-300 dark:border-slate-600",a&&"bg-slate-100 dark:bg-slate-800")},n.createElement(_,{className:"flex w-full items-center justify-between rounded-lg px-4 py-3 text-lg font-medium",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1)},n.createElement("h3",null,"Season Info"),n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2.5,stroke:"currentColor",className:(0,l.Z)("h-6 w-6 transition-transform",e&&"rotate-180")},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))),n.createElement(A,{asChild:!0},n.createElement(n.Fragment,null,n.createElement("div",{className:"mx-4 border-t-2 border-slate-200 dark:border-slate-700"}),n.createElement("article",{className:"prose prose-slate p-4 dark:prose-invert"},n.createElement(I,null)))))},$=e=>{let{heading:t,desc:a,src:r,className:s}=e;return n.createElement(P.n,{animateOnce:!0,animateIn:"animate-in fade-in slide-in-from-bottom-12",duration:.5},n.createElement("div",{className:(0,l.Z)("flex max-w-6xl flex-col-reverse justify-between p-12 sm:flex-row sm:items-center sm:gap-0 sm:p-0",s)},n.createElement("div",{className:"flex-1 sm:p-12"},n.createElement("h3",{className:"mb-2 text-2xl font-medium md:text-3xl"},t),n.createElement("p",{className:"text-xl text-slate-600 dark:text-slate-300 md:text-2xl"},a)),n.createElement("div",{className:"flex-1"},n.createElement("img",{src:r,alt:"",className:"w-64 sm:w-auto"}))))};var K=()=>n.createElement(H.ZP,{helmet:{title:"IDTGA"}},n.createElement("div",{className:"bg-otd-slate"},n.createElement("div",{className:"mx-3 border-t-2 border-otd-slate-300"}),n.createElement("div",{className:"mx-auto flex max-w-6xl flex-col items-center justify-between sm:gap-10 sm:p-10 lg:flex-row"},n.createElement("div",{className:"flex w-fit flex-col items-center p-8 sm:p-0 lg:items-stretch"},n.createElement("img",{src:O,alt:"",className:"mb-6 h-28 lg:self-start"}),n.createElement("p",{className:"text-center text-lg font-medium uppercase tracking-wider text-otd-slate-100 lg:text-left"},"This Season Of"),n.createElement("h1",{className:"text-center text-2xl font-medium text-slate-50 sm:text-3xl lg:text-left"},"It's Dangerous to go Alone")),n.createElement(B,null))),n.createElement("div",{className:"relative flex flex-col md:flex-row"},n.createElement("div",{className:"ml-auto max-w-[calc(72rem+((100vw-72rem)/2))] pt-16 pl-5"},n.createElement("img",{src:T,alt:""})),n.createElement("div",{className:"mx-auto flex max-w-6xl md:absolute md:inset-0"},n.createElement("div",{className:"md:flex-1"}),n.createElement("div",{className:"flex-[2_2_0%]"},n.createElement("div",{className:"flex flex-col gap-1.5 p-12 md:p-16"},n.createElement("h2",{className:"text-xl font-medium uppercase tracking-wider text-otd-slate-500 dark:text-otd-slate-300"},"About the tournament"),n.createElement("p",{className:"text-2xl font-semibold sm:text-3xl"},"Our flagship ",n.createElement("i",null,"solo registration")," tournament."),n.createElement("p",{className:"text-2xl text-slate-600 dark:text-slate-300 sm:text-3xl"},"Focused on creating balanced teams, and being accessible to everyone."))))),n.createElement("div",{className:"my-12 flex flex-col items-center"},n.createElement($,{heading:"No team, no problem",desc:"Whether you are brand new to the scene, or a skilled free agent. We make it always accessible to gain competitive experience.",src:V}),n.createElement($,{heading:"Put yourself out there",desc:"Test your chemistry with different folks, and show the scene what you're made of. You might just find your new teammates.",src:L,className:"sm:!flex-row-reverse"}),n.createElement($,{heading:"Have some fun",desc:"Got an open weekend? Meet new people, make new friends, and just have a really great time.",src:S})))},1151:function(e,t,a){a.d(t,{Zo:function(){return o},ah:function(){return r}});var n=a(7294);const l=n.createContext({});function r(e){const t=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:a}){let o=r(e);return a&&(o=e||s),n.createElement(l.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-idtga-index-js-1678e336fd2c63b50167.js.map