"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9294],{66471:function(e){e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(i=n;0!=i--;)if(!e(t[i],r[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(o=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(r,o[i]))return!1;for(i=n;0!=i--;){var n,i,o,s=o[i];if(!e(t[s],r[s]))return!1}return!0}return t!=t&&r!=r}},70006:function(e,t,r){r.d(t,{w:function(){return n}});function n(e,t,r,n){let i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;let o=Object.keys(e),s=Object.keys(t);if(o.length!==s.length)return!1;let a=Object.prototype.hasOwnProperty.bind(t);for(let s=0;s<o.length;s++){let c=o[s];if(!a(c))return!1;let u=e[c],d=t[c];if(!1===(i=r?r.call(n,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},98672:function(e,t,r){r.d(t,{J:function(){return s}});var n=r(66471),i=r(27378),o=r(66618);function s(e,t,r){return function(e,t,r){let[s,a]=function(e,t,r){let[s,a]=(0,i.useState)(()=>t(e)),c=(0,i.useCallback)(()=>{let i=t(e);!n(s,i)&&(a(i),r&&r())},[s,e,r]);return(0,o.L)(c),[s,c]}(e,t,r);return(0,o.L)(function(){let t=e.getHandlerId();if(null!=t)return e.subscribeToStateChange(a,{handlerIds:[t]})},[e,a]),s}(t,e||(()=>({})),()=>r.reconnect())}},49294:function(e,t,r){r.d(t,{c:function(){return D}});var n=r(47552),i=r(98672),o=r(72203),s=r(27378),a=r(70006),c=r(98697),u=r(41317);class d{receiveHandlerId(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){let e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){let e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return t&&this.disconnectDragSource(),this.handlerId&&(e?t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)):this.lastConnectedDragSource=e),t}reconnectDragPreview(e=!1){let t=this.dragPreview,r=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(r&&this.disconnectDragPreview(),this.handlerId){if(!t){this.lastConnectedDragPreview=t;return}r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=t,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,t,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!(0,a.w)(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!(0,a.w)(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=(0,u.p)({dragSource:(e,t)=>{this.clearDragSource(),this.dragSourceOptions=t||null,(0,c.d)(e)?this.dragSourceRef=e:this.dragSourceNode=e,this.reconnectDragSource()},dragPreview:(e,t)=>{this.clearDragPreview(),this.dragPreviewOptions=t||null,(0,c.d)(e)?this.dragPreviewRef=e:this.dragPreviewNode=e,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}}var l=r(5109),g=r(66618);let h=!1,f=!1;class p{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){(0,n.k)(!h,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return h=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{h=!1}}isDragging(){if(!this.sourceId)return!1;(0,n.k)(!f,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return f=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{f=!1}}subscribeToStateChange(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,t){return this.internalMonitor.isOverTarget(e,t)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}}var v=r(55872);class w{beginDrag(){let e=this.spec,t=this.monitor,r=null;return null!=(r="object"==typeof e.item?e.item:"function"==typeof e.item?e.item(t):{})?r:null}canDrag(){let e=this.spec,t=this.monitor;return"boolean"==typeof e.canDrag?e.canDrag:"function"!=typeof e.canDrag||e.canDrag(t)}isDragging(e,t){let r=this.spec,n=this.monitor,{isDragging:i}=r;return i?i(n):t===e.getSourceId()}endDrag(){let e=this.spec,t=this.monitor,r=this.connector,{end:n}=e;n&&n(t.getItem(),t),r.reconnect()}constructor(e,t,r){this.spec=e,this.monitor=t,this.connector=r}}function D(e,t){let r=(0,o.w)(e,t);(0,n.k)(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");let a=function(){let e=(0,l.N)();return(0,s.useMemo)(()=>new p(e),[e])}(),c=function(e,t){let r=(0,l.N)(),n=(0,s.useMemo)(()=>new d(r.getBackend()),[r]);return(0,g.L)(()=>(n.dragSourceOptions=e||null,n.reconnect(),()=>n.disconnectDragSource()),[n,e]),(0,g.L)(()=>(n.dragPreviewOptions=t||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,t]),n}(r.options,r.previewOptions);return!function(e,t,r){let i=(0,l.N)(),o=function(e,t,r){let n=(0,s.useMemo)(()=>new w(e,t,r),[t,r]);return(0,s.useEffect)(()=>{n.spec=e},[e]),n}(e,t,r),a=(0,s.useMemo)(()=>{let t=e.type;return(0,n.k)(null!=t,"spec.type must be defined"),t},[e]);(0,g.L)(function(){if(null!=a){let[e,n]=(0,v.w)(a,o,i);return t.receiveHandlerId(e),r.receiveHandlerId(e),n}},[i,t,r,o,a])}(r,a,c),[(0,i.J)(r.collect,a,c),(0,s.useMemo)(()=>c.hooks.dragSource(),[c]),(0,s.useMemo)(()=>c.hooks.dragPreview(),[c])]}},5109:function(e,t,r){r.d(t,{N:function(){return s}});var n=r(47552),i=r(27378),o=r(82667);function s(){let{dragDropManager:e}=(0,i.useContext)(o.L);return(0,n.k)(null!=e,"Expected drag drop context"),e}},66618:function(e,t,r){r.d(t,{L:function(){return i}});var n=r(27378);let i="undefined"!=typeof window?n.useLayoutEffect:n.useEffect},72203:function(e,t,r){r.d(t,{w:function(){return i}});var n=r(27378);function i(e,t){let r=[...t||[]];return null==t&&"function"!=typeof e&&r.push(e),(0,n.useMemo)(()=>"function"==typeof e?e():e,r)}},98697:function(e,t,r){r.d(t,{d:function(){return n}});function n(e){return null!==e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}},55872:function(e,t,r){function n(e,t,r){let n=r.getRegistry(),i=n.addTarget(e,t);return[i,()=>n.removeTarget(i)]}function i(e,t,r){let n=r.getRegistry(),i=n.addSource(e,t);return[i,()=>n.removeSource(i)]}r.d(t,{n:function(){return n},w:function(){return i}})},41317:function(e,t,r){r.d(t,{p:function(){return o}});var n=r(47552),i=r(27378);function o(e){let t={};return Object.keys(e).forEach(r=>{let o=e[r];if(r.endsWith("Ref"))t[r]=e[r];else{let e=(e=null,t=null)=>(0,i.isValidElement)(e)?(function(e){if("string"==typeof e.type)return;let t=e.type.displayName||e.type.name||"the component";throw Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}(e),function(e,t){let r=e.ref;return((0,n.k)("string"!=typeof r,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r)?(0,i.cloneElement)(e,{ref:e=>{s(r,e),s(t,e)}}):(0,i.cloneElement)(e,{ref:t})}(e,t?e=>o(e,t):o)):(o(e,t),e);t[r]=()=>e}}),t}function s(e,t){"function"==typeof e?e(t):e.current=t}}}]);