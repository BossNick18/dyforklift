(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(3),i=t.n(a),c=t(4),l=t(2);var s=function(){const{id:e}=Object(l.q)();return r.a.createElement("div",null,"Driver ID: ",e)};var d=function(){return r.a.createElement(c.a,{basename:"/dyforklift"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/driver/:id",element:r.a.createElement(s,null)}),r.a.createElement(l.a,{path:"/",element:r.a.createElement("div",null,"Home Page")})))};const h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,n){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;null!=t&&(t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))}))})}).catch(e=>{console.error("Error during service worker registration:",e)})}function f(e){const n=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),t=window.atob(n),o=new Uint8Array(t.length);for(let r=0;r<t.length;++r)o[r]=t.charCodeAt(r);return o}navigator.serviceWorker.ready.then(e=>{e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:f("BDTs1kysJabgnThBu5CBbF6diZhz6cxJtUhbuTyGHBfJDrBOy62ItIjUvJx64Ce0HkwFrppZzlbBdOrZAok3l1k")}).then(e=>{fetch("".concat("http://localhost:5000","/subscribe"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}).catch(e=>console.error("Could not subscribe to notifications",e))}),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dyforklift",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const n="".concat("/dyforklift","/firebase-messaging-sw.js");h?(function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then(t=>{const o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):u(e,n)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):u(n,e)})}}()},6:function(e,n,t){e.exports=t(11)}},[[6,1,2]]]);
//# sourceMappingURL=main.dd513242.chunk.js.map