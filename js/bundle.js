/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={702:function(t,e,n){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,i=void 0,s=function(t,e){h[r]=t,h[r+1]=e,2===(r+=2)&&(i?i(m):g())};var c="undefined"!=typeof window?window:void 0,a=c||{},l=a.MutationObserver||a.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function f(){var t=setTimeout;return function(){return t(m,1)}}var h=new Array(1e3);function m(){for(var t=0;t<r;t+=2)(0,h[t])(h[t+1]),h[t]=void 0,h[t+1]=void 0;r=0}var v,_,p,y,g=void 0;function b(t,e){var n=this,r=new this.constructor(A);void 0===r[S]&&$(r);var o=n._state;if(o){var i=arguments[o-1];s((function(){return H(o,r,i,n._result)}))}else k(n,r,t,e);return r}function w(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(A);return M(e,t),e}g=u?function(){return process.nextTick(m)}:l?(_=0,p=new l(m),y=document.createTextNode(""),p.observe(y,{characterData:!0}),function(){y.data=_=++_%2}):d?((v=new MessageChannel).port1.onmessage=m,function(){return v.port2.postMessage(0)}):void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(m)}:f()}catch(t){return f()}}():f();var S=Math.random().toString(36).substring(2);function A(){}var E=void 0,L=1,q=2;function x(e,n,r){n.constructor===e.constructor&&r===b&&n.constructor.resolve===w?function(t,e){e._state===L?C(t,e._result):e._state===q?j(t,e._result):k(e,void 0,(function(e){return M(t,e)}),(function(e){return j(t,e)}))}(e,n):void 0===r?C(e,n):t(r)?function(t,e,n){s((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?M(t,n):C(t,n))}),(function(e){r||(r=!0,j(t,e))}),t._label);!r&&o&&(r=!0,j(t,o))}),t)}(e,n,r):C(e,n)}function M(t,e){if(t===e)j(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)C(t,e);else{var n=void 0;try{n=e.then}catch(e){return void j(t,e)}x(t,e,n)}var r,o}function T(t){t._onerror&&t._onerror(t._result),I(t)}function C(t,e){t._state===E&&(t._result=e,t._state=L,0!==t._subscribers.length&&s(I,t))}function j(t,e){t._state===E&&(t._state=q,t._result=e,s(T,t))}function k(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+L]=n,o[i+q]=r,0===i&&t._state&&s(I,t)}function I(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?H(n,r,o,i):o(i);t._subscribers.length=0}}function H(e,n,r,o){var i=t(r),s=void 0,c=void 0,a=!0;if(i){try{s=r(o)}catch(t){a=!1,c=t}if(n===s)return void j(n,new TypeError("A promises callback cannot return that same promise."))}else s=o;n._state!==E||(i&&a?M(n,s):!1===a?j(n,c):e===L?C(n,s):e===q&&j(n,s))}var O=0;function $(t){t[S]=O++,t._state=void 0,t._result=void 0,t._subscribers=[]}var D=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(A),this.promise[S]||$(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?C(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&C(this.promise,this._result))):j(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===E&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===w){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===b&&t._state!==E)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===P){var c=new n(A);s?j(c,i):x(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===E&&(this._remaining--,t===q?j(r,n):this._result[e]=n),0===this._remaining&&C(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;k(t,void 0,(function(t){return n._settledAt(L,e,t)}),(function(t){return n._settledAt(q,e,t)}))},t}();var P=function(){function e(t){this[S]=O++,this._result=this._state=void 0,this._subscribers=[],A!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){M(t,e)}),(function(e){j(t,e)}))}catch(e){j(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return P.prototype.then=b,P.all=function(t){return new D(this,t).promise},P.race=function(t){var n=this;return e(t)?new n((function(e,r){for(var o=t.length,i=0;i<o;i++)n.resolve(t[i]).then(e,r)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},P.resolve=w,P.reject=function(t){var e=new this(A);return j(e,t),e},P._setScheduler=function(t){i=t},P._setAsap=function(t){s=t},P._asap=s,P.polyfill=function(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=P},P.Promise=P,P}()},835:()=>{window&&window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";n(835);function t(t){(r=document.querySelector(t)).style.display="none",document.body.style.overflow=""}function e(t,e){(r=document.querySelector(t)).style.display="block",document.body.style.overflow="hidden",console.log(e),e&&clearInterval(e)}function r(n,r,o){const i=document.querySelectorAll(n),s=document.querySelector(r);i.forEach((t=>{t.addEventListener("click",(()=>e(r,o)))})),s.addEventListener("click",(e=>{e.target!==s&&""!=e.target.getAttribute("data-close")||t(r)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&t(r)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(e(r,o),window.removeEventListener("scroll",t))}))}const o=r,i=JSON.parse('{"G":[{"img":"img/tabs/vegy.jpg","altimg":"vegy","title":"Меню \'Фитнес\'","descr":"Меню \'Фитнес\' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!","price":599,"id":"7cc3"},{"img":"img/tabs/post.jpg","altimg":"post","title":"Меню \'Постное\'","descr":"Меню \'Постное\' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.","price":899,"id":"8d70"},{"img":"img/tabs/elite.jpg","altimg":"elite","title":"Меню \'Премиум\'","descr":"В меню \'Премиум\' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!","price":1299,"id":"a62a"}]}');n(702).polyfill(),window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>showModal(".modal",n)),3e5);(function(t,e,n,r){let o=document.querySelectorAll(t),i=document.querySelectorAll(e),s=document.querySelector(n);function c(){i.forEach((t=>{t.style.display="none"})),o.forEach((t=>{t.classList.remove(r)}))}function a(t=0){i[t].style.display="block",o[t].classList.add(r)}c(),a(),s.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains(t.slice(1))&&o.forEach(((t,e)=>{t==n&&(c(),a(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),o("[data-modal]",".modal",n),function(t,e){function n(t){return t>=0&&t<10?`0${t}`:t}!function(t,e){const r=document.querySelector(t),o=r.querySelector("#days"),i=r.querySelector("#hours"),s=r.querySelector("#minutes"),c=r.querySelector("#seconds"),a=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date);return{total:e,days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/6e4%60),seconds:Math.floor(e/1e3%60)}}(e);o.innerHTML=n(t.days),i.innerHTML=n(t.hours),s.innerHTML=n(t.minutes),c.innerHTML=n(t.seconds),t.total<=0&&(clearInterval(a),o.innerHTML=0,i.innerHTML=0,s.innerHTML=0,c.innerHTML=0)}l()}(t,e)}(".timer","2024-06-20"),function(){const t=document.querySelector(".menu__field .container");class e{constructor(t,e,n,r,o){this.src=t,this.alt=e,this.title=n,this.descr=r,this.price=o,this.render()}render(){t.innerHTML+=`<div class="menu__item">\n                <img src="${this.src}" alt="${this.alt}">\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>\n                </div>\n            </div>`}}i.G.forEach((({img:t,altimg:n,title:r,descr:o,price:i})=>{new e(t,n,r,o,i)}))}(),function(){const t=document.querySelector(".calculating__result span");let e,n,r,o,i;function s(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function c(){t.textContent=e&&n&&r&&o&&i?"female"===e?Math.round((447.6+9.2*r+3.1*n-4.3*o)*i):Math.round((88.36+13.4*r+4.8*n-5.7*o)*i):"____"}function a(t,n){const r=document.querySelectorAll(t);r.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(i=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),console.log(i,e),r.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),c()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":r=+e.value;break;case"age":o=+e.value}c()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?i=localStorage.getItem("ratio"):(i="1.375",localStorage.setItem("ratio","1.375")),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),c(),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(n,r){document.querySelectorAll(n).forEach((n=>{var o;(o=n).addEventListener("submit",(n=>{const i=document.createElement("img");i.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",o.insertAdjacentElement("afterend",i),function(n){const o=document.querySelector(".modal__dialog");o.style.display="none",e(".modal",r);const i=document.createElement("div");i.classList.add("modal__dialog"),i.innerHTML=`\n        <div class="modal__content">\n            <div class="modal__close" data-close>&times;</div>\n            <div class="modal__title">${n}</div>\n        </div>\n        `,document.querySelector(".modal").append(i),setTimeout((()=>{i.remove(),o.style.display="block",t(".modal")}),4e3)}("Спасибо! Скоро мы с вами свяжемся")}))}))}("form",n),function({container:t,slide:e,prevArray:n,nextArray:r,totalCounter:o,currentCounter:i,wrapper:s,field:c}){const a=document.querySelectorAll(e),l=(document.querySelector(t),document.querySelector(n)),u=document.querySelector(r),d=document.querySelector(o),f=document.querySelector(i),h=document.querySelector(s);document.querySelector(c),window.getComputedStyle(h).width;let m=1;function v(t){t>a.length&&(m=1),t<1&&(m=a.length),a.forEach((t=>t.style.display="none")),a[m-1].style.display="block",a.length<10?f.textContent=`0${m}`:f.textContent=m}function _(t){v(m+=t)}v(m),a.length<10?d.textContent=`0${a.length}`:d.textContent=a.length,l.addEventListener("click",(function(){_(-1)})),u.addEventListener("click",(function(){_(1)}))}({container:".offer__slider",slide:".offer__slide",prevArray:".offer__slider-prev",nextArray:".offer__slider-next",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))})()})();
//# sourceMappingURL=bundle.js.map
