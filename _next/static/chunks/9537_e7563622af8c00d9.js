"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9537],{78166:function(e,t,n){n.d(t,{f:function(){return i}});var r=n(25773),o=n(27378),l=n(23392);let i=(0,o.forwardRef)((e,t)=>(0,o.createElement)(l.WV.label,(0,r.Z)({},e,{ref:t,onMouseDown:t=>{var n;null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))},2898:function(e,t,n){n.d(t,{Eh:function(){return X},VY:function(){return S},fC:function(){return V},h_:function(){return F},xz:function(){return Y},zt:function(){return z}});var r=n(25773),o=n(27378),l=n(76949),i=n(62921),a=n(13958),u=n(94962),c=n(24395),s=n(52876),p=n(93551),d=n(13099),f=n(23392),h=n(14207),g=n(37517),v=n(57433);let[y,m]=(0,a.b)("Tooltip",[s.D7]),b=(0,s.D7)(),x="tooltip.open",[E,w]=y("TooltipProvider"),C="Tooltip",[T,_]=y(C),k="TooltipTrigger",D=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,...a}=e,u=_(k,n),c=w(k,n),p=b(n),d=(0,o.useRef)(null),h=(0,i.e)(t,d,u.onTriggerChange),g=(0,o.useRef)(!1),v=(0,o.useRef)(!1),y=(0,o.useCallback)(()=>g.current=!1,[]);return(0,o.useEffect)(()=>()=>document.removeEventListener("pointerup",y),[y]),(0,o.createElement)(s.ee,(0,r.Z)({asChild:!0},p),(0,o.createElement)(f.WV.button,(0,r.Z)({"aria-describedby":u.open?u.contentId:void 0,"data-state":u.stateAttribute},a,{ref:h,onPointerMove:(0,l.M)(e.onPointerMove,e=>{"touch"===e.pointerType||v.current||c.isPointerInTransitRef.current||(u.onTriggerEnter(),v.current=!0)}),onPointerLeave:(0,l.M)(e.onPointerLeave,()=>{u.onTriggerLeave(),v.current=!1}),onPointerDown:(0,l.M)(e.onPointerDown,()=>{g.current=!0,document.addEventListener("pointerup",y,{once:!0})}),onFocus:(0,l.M)(e.onFocus,()=>{g.current||u.onOpen()}),onBlur:(0,l.M)(e.onBlur,u.onClose),onClick:(0,l.M)(e.onClick,u.onClose)})))}),M="TooltipPortal",[R,P]=y(M,{forceMount:void 0}),L="TooltipContent",O=(0,o.forwardRef)((e,t)=>{let n=P(L,e.__scopeTooltip),{forceMount:l=n.forceMount,side:i="top",...a}=e,u=_(L,e.__scopeTooltip);return(0,o.createElement)(d.z,{present:l||u.open},u.disableHoverableContent?(0,o.createElement)(A,(0,r.Z)({side:i},a,{ref:t})):(0,o.createElement)(I,(0,r.Z)({side:i},a,{ref:t})))}),I=(0,o.forwardRef)((e,t)=>{let n=_(L,e.__scopeTooltip),l=w(L,e.__scopeTooltip),a=(0,o.useRef)(null),u=(0,i.e)(t,a),[c,s]=(0,o.useState)(null),{trigger:p,onClose:d}=n,f=a.current,{onPointerInTransitChange:h}=l,g=(0,o.useCallback)(()=>{s(null),h(!1)},[h]),v=(0,o.useCallback)((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),l=Math.abs(t.left-e.x);switch(Math.min(n,r,o,l)){case l:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());s(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t,n=5){let r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),...function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())])),h(!0)},[h]);return(0,o.useEffect)(()=>()=>g(),[g]),(0,o.useEffect)(()=>{if(p&&f){let e=e=>v(e,f),t=e=>v(e,p);return p.addEventListener("pointerleave",e),f.addEventListener("pointerleave",t),()=>{p.removeEventListener("pointerleave",e),f.removeEventListener("pointerleave",t)}}},[p,f,v,g]),(0,o.useEffect)(()=>{if(c){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==p?void 0:p.contains(t))||(null==f?void 0:f.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,l=t.length-1;e<t.length;l=e++){let i=t[e].x,a=t[e].y,u=t[l].x,c=t[l].y;a>r!=c>r&&n<(u-i)*(r-a)/(c-a)+i&&(o=!o)}return o}(n,c);r?g():o&&(g(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[p,f,c,d,g]),(0,o.createElement)(A,(0,r.Z)({},e,{ref:u}))}),[Z,H]=y(C,{isInside:!1}),A=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,children:l,"aria-label":i,onEscapeKeyDown:a,onPointerDownOutside:c,...p}=e,d=_(L,n),f=b(n),{onClose:g}=d;return(0,o.useEffect)(()=>(document.addEventListener(x,g),()=>document.removeEventListener(x,g)),[g]),(0,o.useEffect)(()=>{if(d.trigger){let e=e=>{let t=e.target;null!=t&&t.contains(d.trigger)&&g()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,g]),(0,o.createElement)(u.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:e=>e.preventDefault(),onDismiss:g},(0,o.createElement)(s.VY,(0,r.Z)({"data-state":d.stateAttribute},f,p,{ref:t,style:{...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),(0,o.createElement)(h.A4,null,l),(0,o.createElement)(Z,{scope:n,isInside:!0},(0,o.createElement)(v.f,{id:d.contentId,role:"tooltip"},i||l))))}),B=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,...l}=e,i=b(n);return H("TooltipArrow",n).isInside?null:(0,o.createElement)(s.Eh,(0,r.Z)({},i,l,{ref:t}))}),z=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:r=300,disableHoverableContent:l=!1,children:i}=e,[a,u]=(0,o.useState)(!0),c=(0,o.useRef)(!1),s=(0,o.useRef)(0);return(0,o.useEffect)(()=>{let e=s.current;return()=>window.clearTimeout(e)},[]),(0,o.createElement)(E,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:(0,o.useCallback)(()=>{window.clearTimeout(s.current),u(!1)},[]),onClose:(0,o.useCallback)(()=>{window.clearTimeout(s.current),s.current=window.setTimeout(()=>u(!0),r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:(0,o.useCallback)(e=>{c.current=e},[]),disableHoverableContent:l},i)},V=e=>{let{__scopeTooltip:t,children:n,open:r,defaultOpen:l=!1,onOpenChange:i,disableHoverableContent:a,delayDuration:u}=e,p=w(C,e.__scopeTooltip),d=b(t),[f,h]=(0,o.useState)(null),v=(0,c.M)(),y=(0,o.useRef)(0),m=null!=a?a:p.disableHoverableContent,E=null!=u?u:p.delayDuration,_=(0,o.useRef)(!1),[k=!1,D]=(0,g.T)({prop:r,defaultProp:l,onChange:e=>{e?(p.onOpen(),document.dispatchEvent(new CustomEvent(x))):p.onClose(),null==i||i(e)}}),M=(0,o.useMemo)(()=>k?_.current?"delayed-open":"instant-open":"closed",[k]),R=(0,o.useCallback)(()=>{window.clearTimeout(y.current),_.current=!1,D(!0)},[D]),P=(0,o.useCallback)(()=>{window.clearTimeout(y.current),D(!1)},[D]),L=(0,o.useCallback)(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>{_.current=!0,D(!0)},E)},[E,D]);return(0,o.useEffect)(()=>()=>window.clearTimeout(y.current),[]),(0,o.createElement)(s.fC,d,(0,o.createElement)(T,{scope:t,contentId:v,open:k,stateAttribute:M,trigger:f,onTriggerChange:h,onTriggerEnter:(0,o.useCallback)(()=>{p.isOpenDelayed?L():R()},[p.isOpenDelayed,L,R]),onTriggerLeave:(0,o.useCallback)(()=>{m?P():window.clearTimeout(y.current)},[P,m]),onOpen:R,onClose:P,disableHoverableContent:m},n))},Y=D,F=e=>{let{__scopeTooltip:t,forceMount:n,children:r,container:l}=e,i=_(M,t);return(0,o.createElement)(R,{scope:t,forceMount:n},(0,o.createElement)(d.z,{present:n||i.open},(0,o.createElement)(p.h,{asChild:!0,container:l},r)))},S=O,X=B}}]);