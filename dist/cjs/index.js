var F=Object.create,u=Object.defineProperty,h=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,R=Object.getOwnPropertyNames,V=Object.getOwnPropertyDescriptor;var f=e=>u(e,"__esModule",{value:!0});var g=(e,n)=>{for(var T in n)u(e,T,{get:n[T],enumerable:!0})},k=(e,n,T)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of R(n))!C.call(e,t)&&t!=="default"&&u(e,t,{get:()=>n[t],enumerable:!(T=V(n,t))||T.enumerable});return e},v=e=>k(f(u(e!=null?F(h(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);f(exports);g(exports,{newRidgeState:()=>q});var S=v(require("react")),l=v(require("./e"));let w=(e,n)=>e===n,y={};function O(e,n=w){let T=S.useRef(y),t=T.current;return(0,l.default)(()=>{T.current=t}),(T.current===y||!n(e,T.current))&&(t=e),t}function q(e,n){let T=[],t=e;function c(r,a){let o=t;t=r instanceof Function?r(t):r,setTimeout(()=>{T.forEach(s=>s(t)),a&&a(t),n&&n.onSet&&n.onSet(t,o)})}function i(r){(0,l.default)(()=>(T.push(r),()=>{T=T.filter(a=>a!==r)}),[r])}function p(){let[r,a]=S.useState(t);return i(a),[r,c]}function b(r,a=w){const[o,s]=S.useState();return i(m=>{const d=r(m);a(d,o)||s(d)}),o}return{use:p,useSelector:b,useValue:()=>p()[0],get:()=>t,set:c,reset:()=>c(e)}}
