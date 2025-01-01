"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8295],{70768:function(e,t,r){var i=r(78212),n=r(27378),o=r(16125),s=r(26902),a=r(57075),l=r(54062);t.Z=()=>{let e=(0,o.I0)(),{data:t}=(0,l.BP)(),r=(0,i.Z)(),{refresh:c,token:d}=(0,o.v9)(a.G8);(0,n.useEffect)(()=>{let i=async()=>{s.Z.refreshToken(c).then(t=>{let{token:r,refresh:i}=t;e((0,a.setToken)({token:r,refresh:i}))}).catch(e=>{console.log({err:e})})},n=setInterval(()=>{var e,n;d&&c&&r&&(null==t?void 0:null===(n=t.active_organization)||void 0===n?void 0:null===(e=n.super_organization)||void 0===e?void 0:e.require_auto_refreshing_token)&&i()},6e4);return()=>clearInterval(n)},[e,r,c,d,t])}},78212:function(e,t,r){r.d(t,{Z:function(){return o}});var i=r(27378);let n=()=>{var e,t;return null===(t=document)||void 0===t?void 0:null===(e=t.hasFocus)||void 0===e?void 0:e.call(t)};function o(){let[e,t]=(0,i.useState)(n);return(0,i.useEffect)(()=>{t(n());let e=()=>t(!0),r=()=>t(!1);return window.addEventListener("focus",e),window.addEventListener("blur",r),()=>{window.removeEventListener("focus",e),window.removeEventListener("blur",r)}},[]),e}},78295:function(e,t,r){r.r(t),r.d(t,{__N_SSP:function(){return eu},default:function(){return ew},fetchScribeAndActions:function(){return ep},getCookies:function(){return ef},getCookiesWithFallback:function(){return ex}});var i=r(24246),n=r(60074),o=r(77737),s=r(70115),a=r(23892),l=r.n(a),c=r(88038),d=r.n(c),u=r(86677),f=r(43218),x=r.n(f),h=r(27378),m=r(55113),p=r(31928),v=r(719),w=r(22967),g=r(42135),b=r(73943),j=r(23067),y=r(37892),_=r(51565),k=e=>{let{kind:t,ordinal:r,isMobileDevice:n}=e;return(0,i.jsx)("div",{className:(0,w.cn)(["absolute flex opacity-100 transition-all group-focus:opacity-0"]),children:"warning"!==t&&"tip"!==t?(0,i.jsx)("span",{className:(0,w.cn)(["text-lg"],{"text-sm":n}),children:r}):"warning"===t?(0,i.jsx)(_._l2,{size:n?18:20,title:"alert ordinal icon"}):(0,i.jsx)(_.tbY,{size:n?22:24,title:"information ordinal icon"})})};let N=e=>"warning"===e?"bg-red-500 text-white":"tip"===e?"bg-green-200 text-green-600":"bg-indigo-50 text-indigo-500 font-bold";var S=e=>{let{kind:t,ordinal:r,isMobileDevice:n}=e,o=!["warning","tip"].includes(t);return(0,i.jsx)("div",{className:"mr-3 flex h-8 w-8 flex-shrink-0 flex-col items-center justify-center rounded-full font-sans text-base md:h-10 md:w-10 ".concat(N(t)),"aria-label":o?"Step ".concat(r):t,children:(0,i.jsx)(k,{kind:t,ordinal:r,isMobileDevice:n})})};let A=e=>"warning"===e?"text-red-900 font-medium text-base ":"tip"===e?"text-green-900 font-medium text-base ":"instruction"===e?"text-slate-800":"text-slate-800 font-normal text-base",E=e=>{let{kind:t,description:r,ordinal:n}=e;return(0,i.jsxs)("div",{className:"flex w-full flex-grow flex-row items-center bg-opacity-0 pr-4 font-sans","data-testid":"actionDescription",children:[(0,i.jsx)(S,{kind:t,ordinal:n}),(0,i.jsx)("div",{className:(0,w.cn)("m-0 flex w-[calc(100%_-_48px)] md:pt-[5px]",A(t)),children:(0,i.jsx)("div",{className:"w-full",children:(0,i.jsx)("span",{className:(0,w.cn)("action-description prose break-words p-1 leading-6",A(t)),children:r})})})]})};E.defaultProps={};let C=(e,t)=>(0,i.jsx)("div",{className:"rounded-md bg-red-100 p-4",children:(0,i.jsx)("h1",{className:"text-red-500",children:"Something went wrong"})});var T=e=>(0,i.jsx)(b.Z,{fallback:C,children:(0,i.jsx)(E,{...e})}),I=r(16354),q=e=>{let{user_cropped_screenshot:t,screenshot:r,alt_text:n,clickTargetColor:o,position:s,kind:a}=e,l=o||I.Qe,c=!!a&&a.indexOf("click")>-1,d=()=>({width:720,height:720/(16/9)});return(0,i.jsx)("div",{className:"mt-4 flex w-full justify-center",children:(0,i.jsxs)("div",{className:"relative w-full overflow-hidden rounded-lg bg-white",style:d(),children:[(0,i.jsx)("div",{className:"absolute left-0 top-0 overflow-hidden rounded-lg",style:d(),children:(t||(null==r?void 0:r.upload_status)==="uploaded")&&(0,i.jsx)("img",{src:(null==t?void 0:t.url)||(null==r?void 0:r.download_url),alt:n||"",className:"h-full w-full object-contain"})}),c&&s&&(0,i.jsx)("div",{className:"absolute rounded-full",style:{backgroundColor:"".concat(l,"80"),border:"2px solid ".concat(l),top:s.y-22,left:s.x-22,width:44,height:44}})]})})},F=e=>{let{screenshotUrl:t,description:r}=e;return(0,i.jsx)("div",{className:(0,w.cn)("relative mt-4 flex max-h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white"),children:(0,i.jsx)("img",{src:t,alt:r,className:(0,w.cn)("max-h-96 max-w-full overflow-hidden rounded-lg object-contain")})})};let O=e=>{let{commentSection:t,scribeFile:r,timestamp:n,id:o,...s}=e,a=(0,y.$7)(s);return(0,i.jsxs)("div",{className:"box-border flex h-auto w-full flex-col rounded-2xl bg-white p-4 shadow",children:[(0,i.jsxs)("div",{className:"flex w-full flex-row",children:[(0,i.jsx)(T,{...s,kind:s.kind,description:s.transcribed_description||s.description,ordinal:s.ordinal}),n&&(0,i.jsx)("span",{className:"mr-4 text-sm text-blueGray-500",children:n})]}),("stack"!==s.kind&&!!a||"stack"===s.kind&&!!a&&!(0,j.sY)(a))&&(0,i.jsx)(q,{user_cropped_screenshot:s.user_cropped_screenshot,screenshot:s.screenshot,...s}),(null==s?void 0:s.external_screenshot_url)&&(0,i.jsx)("div",{className:"flex w-full justify-center",children:(0,i.jsx)("img",{alt:"external-screenshot",className:"mt-2 max-h-[360px] max-w-full rounded md:min-h-[360px]",src:null==s?void 0:s.external_screenshot_url})}),"stack"===s.kind&&!!a&&(0,j.sY)(a)&&(0,i.jsx)(F,{description:s.description,screenshotUrl:a}),t]})},P=()=>(0,i.jsx)("div",{children:"Error in action"});var Z=e=>(0,i.jsx)(b.Z,{fallback:P,children:(0,i.jsx)(O,{...e})}),z=e=>{let{description:t}=e;return(0,i.jsx)("div",{className:"group relative flex h-auto w-full flex-row items-center font-bold text-blueGray-600",children:(0,i.jsxs)("div",{className:"flex w-full items-start",children:[(0,i.jsx)("div",{className:(0,w.cn)("h-px min-w-4 flex-1 bg-blueGray-200")}),(0,i.jsx)("div",{"data-testid":"section-description",className:"flex max-w-[12rem] break-words sm:max-w-[16rem] md:max-w-xs lg:max-w-md xl:max-w-lg",children:(0,i.jsx)("h2",{className:"m-0 mx-6 mt-[-12px] p-0 text-center text-lg md:text-xl",children:t})}),(0,i.jsx)("div",{className:(0,w.cn)("h-px min-w-4 flex-1 bg-blueGray-200")})]})})},D=e=>{let{id:t,description:r,mode:n,actionType:o,commentSection:s,scribeFile:a,...l}=e,c=(0,y.$7)(l);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:(0,w.cn)("flex flex-col h-auto w-full p-4 rounded-2xl border box-border ".concat("tip"===o?"border-green-300 bg-green-50":"border-red-300 bg-red-50"),s&&"rounded-b-none"),children:[(0,i.jsx)("div",{className:"flex w-full flex-row",children:(0,i.jsx)(T,{kind:o,description:r})}),!!c&&(0,i.jsx)(q,{...l,description:r,mode:n,hovered:!1,clickTargetColor:null==a?void 0:a.click_target_color})]}),s&&(0,i.jsx)("div",{className:"overflow-hidden rounded-b-2xl border border-t-0 border-blueGray-300 bg-white px-3 py-2 pb-4",children:s})]})};let L=(e,t)=>(0,i.jsx)(e,{...t}),G=e=>{let t,{mode:r,commentSection:i,scribeFile:n,scribeFileId:o,desktopOnly:s,actionType:a,id:l,ordinal:c,description:d,timestamp:u,hash:f,kind:x,instruction_type:h,...m}=e,p={...m,mode:r,ordinal:c,description:d,id:l};return"warning"===h||"tip"===h?t=L(D,{...p,commentSection:i,scribeFile:n,desktopOnly:s,actionType:a,ordinal:c,kind:x,id:l,description:d}):"section"===x?t=L(z,{...p,scribeFileId:o}):["mouse_click_action","stack","keyboard_combination_action","keyboard_sequence_action","instruction"].indexOf(x)>-1&&(t=L(Z,{...p,hash:f,ordinal:c,scribeFile:n,desktopOnly:s,timestamp:u,commentSection:i,kind:x,id:l,description:d})),t},V=()=>(0,i.jsx)("div",{className:"rounded-md bg-red-100 p-4",children:(0,i.jsx)("h1",{className:"text-red-500",children:"Something went wrong"})});var M=e=>(0,i.jsx)(b.Z,{fallback:V,children:(0,i.jsx)(G,{...e})}),R=e=>{let{mode:t="viewer",id:r,description:n,selected:o,scribeFile:s,isActive:a,isSideKick:l,isGuiding:c,selectDisabled:d=!1,showGuideMeStepNotFoundMsg:u=!1,guideMeStepNotFoundMsg:f,...x}=e,h=null==r?void 0:r.split("-")[0],m=x.instruction_type,p=(0,i.jsx)(M,{mode:t,kind:x.kind||"action",sort_order:x.sort_order,screenshot_url:x.screenshot_url,external_screenshot_url:x.external_screenshot_url,openLinksWithScribeViewer:x.openLinksWithScribeViewer,selectDisabled:d,instruction_type:x.instruction_type,stack_actions:x.stack_actions,url:x.url,selected:o,scribeFile:s,hash:h,actionType:m,scribeFileId:null==s?void 0:s.id,ordinal:x.ordinal||x.sort_order,id:r,description:n,showGuideMeStepNotFoundMsg:u,guideMeStepNotFoundMsg:f,...x});return(0,i.jsxs)("div",{className:(0,w.cn)("group relative transition-[margin-bottom] duration-200 ease-in-out",(0,g.m)(t)?"mb-14":"mb-4 md:mb-6",{"rounded-2xl shadow-lg":l&&a,"rounded-2xl shadow-alert":l&&a&&"warning"===m,"rounded-2xl shadow-tip":l&&a&&"tip"===m,"mb-0 mt-0":l,"cursor-pointer":c}),children:[(0,i.jsx)("div",{id:h,className:"absolute -top-20"}),(0,i.jsx)("div",{className:"relative",children:p})]})},H=e=>{let{mode:t,actions:r,scribeFileId:n,showTimestamps:o}=e,s={},a={},l=1,c=0;return r.forEach((e,t)=>{!["section"].includes(e.kind)&&!["tip","warning"].includes(e.instruction_type)&&(s[e.id]=l,l++),o&&e.recorded_time_ms&&("stack"===e.kind?c+=e.stack_actions.reduce((e,t)=>e+t.recorded_time_ms,0):c+=e.recorded_time_ms,a[e.id]=c)}),(0,i.jsx)("div",{className:"flex w-full flex-col items-center",children:r.map((e,r)=>(0,i.jsx)("div",{className:"mt-4 w-full",children:(0,i.jsx)(R,{...e,mode:t,scribeId:n,ordinal:s[e.id],timestamp:a[e.id]&&new Date(a[e.id]).toISOString().substr(11,12)})},e.id))})};let{publicRuntimeConfig:U}=l()(),$="".concat(U.cursiveRootUrl,"og/"),B=e=>"".concat($).concat(e);var Q=e=>{var t;let{scribeFileData:r,actions:n,actionsCount:o,isAuthenticated:a,includeHeader:l}=e,{pid:c}=(0,u.useRouter)().query,f="".concat(r.name||"Viewer"," | Scribe"),h="By ".concat(r.author),w=(null==r?void 0:r.no_index)===!0,g=(0,p.Eo)(r.id,r.name),b=B(c);return(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsxs)(d(),{children:[(0,i.jsx)("title",{children:f}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{name:"description",content:r.description||h}),(0,i.jsx)("meta",{property:"og:title",content:f}),(0,i.jsx)("meta",{name:"slack-app-id",content:U.slackAppId}),(0,i.jsx)("meta",{property:"og:image",content:b}),(0,i.jsx)("meta",{property:"og:url",content:g}),(0,i.jsx)("meta",{property:"og:description",content:r.description||h}),(0,i.jsx)("meta",{property:"twitter:url",content:g}),(0,i.jsx)("meta",{property:"twitter:title",content:f}),(0,i.jsx)("meta",{property:"twitter:image",content:b}),w&&(0,i.jsx)("meta",{name:"robots",content:"noindex"}),(0,i.jsx)("link",{rel:"canonical",href:(0,p.Hb)(r.id,r.name,!1)}),s.Z.includes(r.id)&&(0,i.jsx)(x(),{type:"application/ld+json",dangerouslySetInnerHTML:(0,m.Z)(g,r,n)},"jsonld")]}),(0,i.jsx)("div",{className:"fixed left-0 right-0 top-0 z-[9999] h-16 w-full border-b border-b-[#0b1f40] border-opacity-[0.08] bg-white"}),(0,i.jsx)("div",{id:"scribe-file-viewer",className:"flex h-auto min-h-full flex-1 animate-fade-up-delay justify-center bg-blueGray-50 opacity-0",children:(0,i.jsxs)("div",{className:"flex w-full max-w-[720px] flex-col",children:[(0,i.jsx)(v.Z,{mode:"viewer",numActions:o,documentData:r,loggedIn:a,onFeedbackClick:()=>{},isInContextViewerInstance:!1,showProfilePic:null==r?void 0:null===(t=r.user_owner)||void 0===t?void 0:t.has_public_profile,className:"mx-0"}),(0,i.jsx)("div",{className:"relative mb-14 flex w-full flex-1 flex-grow flex-col items-center pt-0",children:(0,i.jsx)(H,{actions:n,mode:"viewer",scribeFileId:r.id,showTimestamps:!1})})]})})]})},J=r(76489),W=r(64425),Y=r(16125),X=r(28481),K=r(93570),ee=r(78919),et=r(70768),er=r(57075),ei=r(79011),en=r(37979),eo=r(12068),es=r(22121),ea=r(5827);let el=(e,t)=>{if(!t.res)return;let r=t.res.getHeader("Set-Cookie");Array.isArray(r)||(r=r?[String(r)]:[]);let i=(0,K.mQ)(),n={path:K.ym,domain:K.JP,expires:(0,en._V)(),secure:i,sameSite:void 0};i&&(n.sameSite="None");let o=Object.entries(e).map(e=>{let[t,r]=e;return(0,J.q)(t,r,n)});t.res.setHeader("Set-Cookie",r.concat(o))},ec=async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:300,n=r,o=i;for(;n>=0;)try{return await fetch(e,t)}catch(t){if(0===n)throw Error("Failed to fetch data for ".concat(e," after ").concat(r," retries: ").concat(t.message));if("AbortError"===t.name)throw Error("Request timed out for ".concat(e));await new Promise(e=>setTimeout(e,o)),n--,o*=2}throw Error("Unexpected end of retryFetch")},ed=async function(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,n=[];return null!=r&&n.push("user_agent=".concat(encodeURIComponent(r))),Promise.all([ec("".concat(ei.G,"scribe_file/").concat(e,"/?include_actions_count=true").concat(n.length>0?"&":"").concat(n.join("&")),{headers:t}),ec("".concat(ei.G,"scribe_documents/").concat(e,"/actions?skip=0&limit=").concat(i),{headers:t})])};var eu=!0;let ef=function(){let e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(r){var i;if(null==r?void 0:null===(i=r.req)||void 0===i?void 0:i.headers.cookie){let i=(0,J.Q)(r.req.headers.cookie);t=i.data,e=i.refresh_data}}else{let{token:r,refresh:i}=(0,K.r_)();t=r,e=i}return{token:t,refresh:e}},ex=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,{refresh:t,token:r}=ef(e);if(window.self!==window.top&&!r&&!t){let e=await (0,eo.XX)();r=null==e?void 0:e.token,t=null==e?void 0:e.refresh}return{token:r,refresh:t}},eh=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;r?el({data:e,refresh_data:t},r):(0,K.bm)(e,t)},em=async function(e,t,r,i){var n;let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:20,s={Authorization:void 0},{token:a,refresh:l}=await ex(r),c=(null==r?void 0:null===(n=r.req)||void 0===n?void 0:n.headers["user-agent"])||null;t&&a&&(s.Authorization="Bearer ".concat(a));let d=await ed(e,s,c,o);if(t&&l&&(401===d[0].status||401===d[1].status)){let t=await fetch("".concat(ei.G,"token/refresh/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:l})});if(200===t.status){let{token:n,refresh:o}=await t.json();return s.Authorization="Bearer ".concat(n),eh(n,o,r),i&&i((0,er.setToken)({token:n,refresh:o})),ed(e,s,c)}401===t.status&&i&&i((0,er.signOut)())}return d},ep=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:20,s=(0,p.IT)(e);try{let n=!1;if(!e||e===s&&37!==e.length)return{props:{pageId:e||"notfound",result:null,initialVisibleActions:[],error:404,isAuthError:n}};let a=await em(s,t,r,i,o);if(200===a[0].status&&200===a[1].status){let t=await a[0].json(),r=await a[1].json();return{props:{pageId:e,backendPID:s,result:t,initialVisibleActions:r.actions,actionsCount:r.count_without_sections,error:null,actionCount:r.count_without_sections,isAuthError:n}}}let l=(n=401===a[0].status||403===a[0].status)?await a[0].json():null;return{props:{pageId:e,backendPID:s,result:l,initialVisibleActions:[],error:a[0].status,isAuthError:n,actionsStatus:a[1].status}}}catch(t){return n.uT("fetchScribeAndActions Failed - Client Side",{level:"error",extra:{error:t}}),{props:{pageId:e,backendPID:s,result:{},initialVisibleActions:[],error:500,isAuthError:!1,actionsStatus:500}}}},ev=e=>{let t=(0,u.useRouter)(),r=(0,Y.I0)(),[s,a]=(0,h.useState)(e),l=(0,W.Z)(),{ref:c}=t.query,[d,f]=(0,h.useState)(!0),{pageId:x,backendPID:m,result:v,initialVisibleActions:w,error:g,isAuthError:b}=s;return((0,et.Z)(),(0,h.useEffect)(()=>{(async()=>{b&&a((await ep(x,!0,null,r)).props),f(!1)})()},[]),(0,h.useEffect)(()=>{d||s.isAuthError||404===s.error||!s.error&&s.result||n.uT("Scribe Page View Failed",{level:"info",extra:{state:s}})},[d,s]),(0,h.useEffect)(()=>{if(d)return;let e=Array.isArray(t.query.referrer)?t.query.referrer[0]:t.query.referrer;"cursiveinternal"!==c&&(null==v?void 0:v.id)&&l&&(0,X.ZP)(v.id,"scribe-viewer",l,e,X.pJ.LinkScroll)},[null==v?void 0:v.id,c,l,d]),(0,h.useEffect)(()=>{if(!v||b)return;let e=(0,p.km)(v.id,v.name);(x===m||String(t.query.pid).trim()!==e)&&t.replace({query:{...t.query,pid:e}})},[x,m,v&&v.id&&v.name,t&&t.query&&t.query.pid]),!g&&v)?d?(0,i.jsx)(Q,{scribeFileData:v,isAuthenticated:e.isAuthenticated,actions:w,actionsCount:e.actionsCount,includeHeader:!0}):(0,i.jsx)(es.Z,{scribeFileData:v,isAuthenticated:e.isAuthenticated,actions:w,includeHeader:!0}):b&&d?(0,i.jsx)("div",{style:{width:"100vw",height:"100vh",backgroundColor:"rgb(240, 240, 248)"}}):b&&!d?(0,i.jsx)(ea.Z,{pk:m,type:"document",isRequestable:v.is_requestable}):404===g||410===g?(0,i.jsx)(ee.Z,{fileId:m,isServerSide:d}):(0,i.jsx)(o.d,{})};ev.SSR=!0;var ew=ev},76489:function(e,t){t.Q=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");var r={},n=e.length;if(n<2)return r;var o=t&&t.decode||d,s=0,a=0,u=0;do{if(-1===(a=e.indexOf("=",s)))break;if(-1===(u=e.indexOf(";",s)))u=n;else if(a>u){s=e.lastIndexOf(";",a-1)+1;continue}var f=l(e,s,a),x=c(e,a,f),h=e.slice(f,x);if(!i.call(r,h)){var m=l(e,a+1,u),p=c(e,u,m);34===e.charCodeAt(m)&&34===e.charCodeAt(p-1)&&(m++,p--);var v=e.slice(m,p);r[h]=function(e,t){try{return t(e)}catch(t){return e}}(v,o)}s=u+1}while(s<n);return r},t.q=function(e,t,i){var l=i&&i.encode||encodeURIComponent;if("function"!=typeof l)throw TypeError("option encode is invalid");if(!n.test(e))throw TypeError("argument name is invalid");var c=l(t);if(!o.test(c))throw TypeError("argument val is invalid");var d=e+"="+c;if(!i)return d;if(null!=i.maxAge){var u=Math.floor(i.maxAge);if(!isFinite(u))throw TypeError("option maxAge is invalid");d+="; Max-Age="+u}if(i.domain){if(!s.test(i.domain))throw TypeError("option domain is invalid");d+="; Domain="+i.domain}if(i.path){if(!a.test(i.path))throw TypeError("option path is invalid");d+="; Path="+i.path}if(i.expires){var f=i.expires;if("[object Date]"!==r.call(f)||isNaN(f.valueOf()))throw TypeError("option expires is invalid");d+="; Expires="+f.toUTCString()}if(i.httpOnly&&(d+="; HttpOnly"),i.secure&&(d+="; Secure"),i.partitioned&&(d+="; Partitioned"),i.priority)switch("string"==typeof i.priority?i.priority.toLowerCase():i.priority){case"low":d+="; Priority=Low";break;case"medium":d+="; Priority=Medium";break;case"high":d+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:case"strict":d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"none":d+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return d};var r=Object.prototype.toString,i=Object.prototype.hasOwnProperty,n=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,o=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,s=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/;function l(e,t,r){do{var i=e.charCodeAt(t);if(32!==i&&9!==i)return t}while(++t<r);return r}function c(e,t,r){for(;t>r;){var i=e.charCodeAt(--t);if(32!==i&&9!==i)return t+1}return r}function d(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}}}]);