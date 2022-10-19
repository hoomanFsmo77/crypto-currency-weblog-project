(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function o(t){var e="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return r(t,arguments,a(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),c(o,t)},o(t)}function r(t,e,n){return r=i()?Reflect.construct.bind():function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&c(r,n.prototype),r},r.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var l=document.createElement("template");l.innerHTML='\n            <link rel="stylesheet" href="./css/components.css">\n             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">\n            <div class="article_card w-100 radius-3 pointer relative">\n                <div class="article_bg"></div>\n                <div class="article_overlay d-flex flex-column align-start justify-end p-9">\n                    <span class="feature  justify-center align-center">\n                       <i class="bi bi-star-fill"></i>\n                    </span>\n                    <span class=" category fw-6">Cardano</span>\n                    <h1 class="lh-1">\n                        <a href="#" class=" btn-link btn-stretch text-light mb-4 ">\n                            <slot name="title"></slot>\n                        </a>\n                    </h1>\n                    <p class=" text-light mb-5">\n                       <slot name="description"></slot>\n                    </p>\n                    <h4 class="text-light fw-4 d-flex align-center">\n                        <img src="" alt="" width="40" class="mr-3">\n                        <a href="#" class="btn-link text-light">\n                            By <slot name="author"></slot>\n                        </a>\n                        <span class="mx-3">\n                                            •\n                        </span>\n                        <slot name="date"></slot>\n                        <span class="mx-3">\n                                            •\n                        </span>\n                        <slot name="time"></slot>\n                    </h4>\n                </div>\n            </div>\n';const s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(d,t);var o,r,s,u,f,p=(o=d,r=i(),function(){var t,e=a(o);if(r){var i=a(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function d(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),(t=p.call(this)).attachShadow({mode:"open"}),t.shadowRoot.appendChild(l.content.cloneNode(!0)),t}return s=d,(u=[{key:"connectedCallback",value:function(){this.checkFeature(this.getAttribute("has-feature")),this.setImage(this.getAttribute("img-src")),this.setCategory(this.getAttribute("category")),this.setHeight(this.getAttribute("height")),this.setUserImage(this.getAttribute("user-src")),this.checkSize(this.getAttribute("is-small"))}},{key:"checkFeature",value:function(t){this.shadowRoot.querySelector(".feature").style.display="false"===t?"none":"flex"}},{key:"setImage",value:function(t){this.shadowRoot.querySelector(".article_bg").style.backgroundImage="url(".concat(t,")")}},{key:"setCategory",value:function(t){this.shadowRoot.querySelector(".category").innerHTML=t,"Cardano"===t?this.shadowRoot.querySelector(".category").classList.add("cat-blue"):"NFT"===t?this.shadowRoot.querySelector(".category").classList.add("cat-info"):"Cybercrime"===t&&this.shadowRoot.querySelector(".category").classList.add("cat-dark")}},{key:"setHeight",value:function(t){this.shadowRoot.querySelector(".article_card").style.height="".concat(t)}},{key:"setUserImage",value:function(t){isNaN(t)?this.shadowRoot.querySelector("img").src=t:this.shadowRoot.querySelector("img").style.display="none"}},{key:"checkSize",value:function(t){"true"===t&&this.shadowRoot.querySelector(".article_card").classList.add("small")}}])&&e(s.prototype,u),f&&e(s,f),Object.defineProperty(s,"prototype",{writable:!1}),d}(o(HTMLElement));function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){var e="function"==typeof Map?new Map:void 0;return y=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return h(t,arguments,m(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),v(o,t)},y(t)}function h(t,e,n){return h=b()?Reflect.construct.bind():function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&v(r,n.prototype),r},h.apply(null,arguments)}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var w=document.createElement("template");w.innerHTML='\n                <link rel="stylesheet" href="./css/components.css">\n                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">\n                <div class="highlight_card">\n                    <div class="card_header relative">\n                        <img src="" alt="" class="w-100 radius-2">\n                        <div class="card_overlay absolute top-0 left-0 w-100 h-100 d-flex align-end">\n                            <span class="card_category m-5 pointer"><a href="#">Technology</a></span>\n                            <div class="video_part absolute top-0 m-5 p-3 ">\n                                <i class="bi bi-camera-video-fill text-light fs-2"></i>\n                            </div>\n                            <div class="shadow"></div>\n                            <div class="voice_part absolute px-1 py-2 align-center ">\n                               \n                                <div class=\'play pointer d-flex align-center relative justify-center w-10 mr-1\'>\n                                \n                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16" >\n                                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>\n                                    </svg>\n                                    <svg  xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pause-circle-fill absolute pause p-1" viewBox="0 0 16 16">\n                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>\n                                    </svg>\n\n                                    <audio class="absolute" id="audio">\n                                        <source src="">\n                                    </audio>\n                                \n                                </div>\n                                <div class="relative d-flex align-center w-40">\n                                    <input type="range" class="w-100" value="0">\n                                    <span class="progress absolute "></span>\n                                </div>\n                                <div class="timer mx-1 d-flex gap-1">\n                                        <span class="text-muted">\n                                            00:00\n                                        </span>\n                                        /\n                                        <span class="text-muted">\n                                            00:00\n                                        </span>\n                                </div>\n                                <div class="volume p-1 d-flex align-center relative justify-center w-10 pointer h-100">\n\n                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">\n                                    <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>\n                                </svg>\n                                    <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-up-fill absolute mute p-1" viewBox="0 0 16 16">\n                                        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>\n                                        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>\n                                        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>\n                                    </svg>\n                                    \n                                </div>\n                                <div class="relative d-flex align-center w-10">\n                                    <input type="range" value="0" class="w-100" >\n                                    <span class="progress absolute "></span>\n                                </div>\n                            </div>\n                   \n\n\n                        </div>\n                    </div>\n                    <div class="crd_body mt-4">\n                        <a slot="title" href="#" class="btn-link card_title  fw-6">\n                            <slot name="title"></slot>\n                        </a>\n                        <p class="text-muted mx-0 fs-09 fw-5">\n                           <slot name="description"></slot>\n                        </p>\n                        <div class="w-100 mt-3 d-flex align-center">\n                            <img class="user_image" src="" width="40" alt="">\n                            <span class="text-muted fs-09 ml-5 fw-5">\n                                 <a href="#" class="btn-link text-muted author_name"></a>\n                                <span class="mx-3">\n                                            •\n                                </span>\n                                <span class="card_date"></span>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n\n';var g=null;const S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(a,t);var e,n,o,r,i,c=(e=a,n=b(),function(){var t,o=m(e);if(n){var r=m(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return p(this,t)});function a(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this)).attachShadow({mode:"open"}),t.shadowRoot.append(w.content.cloneNode(!0)),g=d(t),t.isPlayed=!1,t.isMuted=!0,t}return o=a,(r=[{key:"connectedCallback",value:function(){this.setImage=this.getAttribute("img-src"),this.category=this.getAttribute("category"),this.author=this.getAttribute("author"),this.date=this.getAttribute("date"),this.userImage=this.getAttribute("user-img"),this.checkFilm=this.getAttribute("is-film"),this.checkVoice=this.getAttribute("is-voice"),this.shadowRoot.querySelector(".play").addEventListener("click",this.playHandler),this.shadowRoot.querySelector(".volume").addEventListener("click",this.volumHandler)}},{key:"playHandler",value:function(){var t=this.querySelector("#audio");this.isPlayed?(this.children[1].style.display="none",this.children[0].style.display="block",t.pause(),g.realTimeHandler(t),g.inputHandler(t),this.isPlayed=!1):(this.children[0].style.display="none",this.children[1].style.display="block",t.play(),g.calculateAudioDuration(t),g.realTimeHandler(t),g.inputHandler(t),this.isPlayed=!0)}},{key:"inputHandler",value:function(t){var e=this.previousElementSibling.shadowRoot.querySelectorAll("input")[0];setInterval((function(){e.value=(t.currentTime/t.duration*100).toFixed(2)}),1e3)}},{key:"realTimeHandler",value:function(t){var e=this;setInterval((function(){var n=Math.floor(t.currentTime/60),o=Math.floor(t.currentTime%60);e.previousElementSibling.shadowRoot.querySelector(".timer").children[0].innerHTML=n<10?o<10?"0".concat(n,":0").concat(o):"0".concat(n,":").concat(o):o<10?"".concat(n,":0").concat(o):"".concat(n,":").concat(o)}),1e3)}},{key:"calculateAudioDuration",value:function(t){var e=Math.floor(t.duration/60),n=Math.floor(t.duration%60);this.previousElementSibling.shadowRoot.querySelector(".timer").children[1].innerHTML=e<10?n<10?"0".concat(e,":0").concat(n):"0".concat(e,":").concat(n):n<10?"".concat(e,":0").concat(n):"".concat(e,":").concat(n)}},{key:"volumHandler",value:function(){var t=g.previousElementSibling.shadowRoot.querySelector("#audio");this.isMuted?(this.children[1].style.display="none",this.children[0].style.display="block",g.previousElementSibling.shadowRoot.querySelectorAll("input")[1].value=0,t.volume=0,this.isMuted=!1):(this.children[0].style.display="none",this.children[1].style.display="block",g.previousElementSibling.shadowRoot.querySelectorAll("input")[1].value=100,t.volume=1,this.isMuted=!0)}},{key:"changeValueHandler",value:function(t){var e=g.previousElementSibling.shadowRoot.querySelector("#audio");e.currentTime=e.duration*(t.target.value/100)}},{key:"volumChangeHandler",value:function(t){g.previousElementSibling.shadowRoot.querySelector("#audio").volume=t.target.value/100,t.target.value<1?(g.previousElementSibling.shadowRoot.querySelector(".volume").children[0].style.display="block",g.previousElementSibling.shadowRoot.querySelector(".volume").children[1].style.display="none"):t.target.value>0&&(g.previousElementSibling.shadowRoot.querySelector(".volume").children[1].style.display="block",g.previousElementSibling.shadowRoot.querySelector(".volume").children[0].style.display="none")}},{key:"setImage",set:function(t){this.shadowRoot.querySelector(".card_header img").src=t}},{key:"category",set:function(t){this.shadowRoot.querySelector(".card_category").innerHTML=t,"Technology"===t?this.shadowRoot.querySelector(".card_category").classList.add("cat-warning"):"Games"===t?this.shadowRoot.querySelector(".card_category").classList.add("cat-success"):"Bitcoin"===t?this.shadowRoot.querySelector(".card_category").classList.add("cat-blue"):"Economy"===t&&this.shadowRoot.querySelector(".card_category").classList.add("cat-dark")}},{key:"author",set:function(t){this.shadowRoot.querySelector(".author_name").innerHTML="By ".concat(t)}},{key:"date",set:function(t){this.shadowRoot.querySelector(".card_date").innerHTML=t}},{key:"userImage",set:function(t){this.shadowRoot.querySelector(".user_image").src=t}},{key:"checkFilm",set:function(t){"yes"===t&&(this.shadowRoot.querySelector(".video_part").style.display="block")}},{key:"checkVoice",set:function(t){"yes"===t&&(this.shadowRoot.querySelector(".voice_part").style.display="flex",this.shadowRoot.querySelector(".shadow").style.display="block",this.shadowRoot.querySelector("#audio").children[0].src=this.getAttribute("audio-link"),this.shadowRoot.querySelectorAll("input")[0].addEventListener("input",this.changeValueHandler),this.shadowRoot.querySelectorAll("input")[1].addEventListener("input",this.volumChangeHandler))}}])&&f(o.prototype,r),i&&f(o,i),Object.defineProperty(o,"prototype",{writable:!1}),a}(y(HTMLElement));function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function O(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function k(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function _(t){var e="function"==typeof Map?new Map:void 0;return _=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return j(t,arguments,T(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),E(o,t)},_(t)}function j(t,e,n){return j=x()?Reflect.construct.bind():function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&E(r,n.prototype),r},j.apply(null,arguments)}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var q=document.createElement("template");q.innerHTML='\n    <link rel="stylesheet" href="./css/components.css">\n    <div class="topic w-100 radius-1 pointer relative d-flex align-center justify-center o-hidden my-3">\n           <div class="topic-overlay h-100 w-100 radius-1"></div>\n           <div class="absolute w-100 h-100 d-flex align-center justify-center">\n                 <a href="#" class=" btn-link text-light  btn-stretch"></a>\n           </div>\n    </div>\n\n';const P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(a,t);var e,n,o,r,i,c=(e=a,n=x(),function(){var t,o=T(e);if(n){var r=T(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return k(this,t)});function a(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this)).attachShadow({mode:"open"}),t.shadowRoot.append(q.content.cloneNode(!0)),t}return o=a,(r=[{key:"connectedCallback",value:function(){this.shadowRoot.querySelector(".topic-overlay").style.background="linear-gradient(rgba(0,0,0,0.5),rgb(0,0,0,0.5)), url(".concat(this.getAttribute("img-src"),") center center/cover"),this.shadowRoot.querySelector(".btn-link").innerHTML=this.getAttribute("title")}}])&&O(o.prototype,r),i&&O(o,i),Object.defineProperty(o,"prototype",{writable:!1}),a}(_(HTMLElement));function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function A(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function L(t,e){if(e&&("object"===M(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return H(t)}function H(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){var e="function"==typeof Map?new Map:void 0;return C=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return B(t,arguments,I(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),z(o,t)},C(t)}function B(t,e,n){return B=F()?Reflect.construct.bind():function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&z(r,n.prototype),r},B.apply(null,arguments)}function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function z(t,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},z(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var N=document.createElement("template");N.innerHTML='\n<link rel="stylesheet" href="./css/components.css">\n                <div class="post w-100 my-4 d-flex py-2 pointer relative align-center gap-2">\n                    <img class="w-50 radius-1" src="" alt="">\n                    <div>\n                        <a href="#" class="btn-link btn-stretch fw-7 mb-3">\n                           <slot name="title"></slot>\n                        </a>\n                        <span class="text-muted w-100 d-block mt-3 fs-09"></span>\n                    </div>\n                </div>\n\n';var D=null,V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&z(t,e)}(a,t);var e,n,o,r,i,c=(e=a,n=F(),function(){var t,o=I(e);if(n){var r=I(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return L(this,t)});function a(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this)).attachShadow({mode:"open"}),t.shadowRoot.appendChild(N.content.cloneNode(!0));var e=H(t).shadowRoot;return D=e,t}return o=a,(r=[{key:"connectedCallback",value:function(){this.image=this.getAttribute("img-src"),this.date=this.getAttribute("date")}},{key:"image",set:function(t){D.querySelector("img").src=t}},{key:"date",set:function(t){D.querySelector("span").innerHTML=t}}])&&A(o.prototype,r),i&&A(o,i),Object.defineProperty(o,"prototype",{writable:!1}),a}(C(HTMLElement));const U=V;function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function J(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function K(t,e){if(e&&("object"===G(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Q(t){var e="function"==typeof Map?new Map:void 0;return Q=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return W(t,arguments,Z(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Y(o,t)},Q(t)}function W(t,e,n){return W=X()?Reflect.construct.bind():function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&Y(r,n.prototype),r},W.apply(null,arguments)}function X(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function Y(t,e){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Y(t,e)}function Z(t){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Z(t)}var $=document.createElement("template");$.innerHTML='\n<link rel="stylesheet" href="./css/components.css">\n            <div class="sponsored_item pointer mx-5">\n                <div class="item_header w-100 relative">\n                    <img class="w-100 radius-2"\n                         src="" alt=""\n                    >\n                    <div class="img_overlay absolute w-100 h-100 top-0 left-0 d-flex align-end justify-start">\n                        <a href="#">\n                            <span class="cat-blue m-4 d-flex align-center category">\n                            Bitcoin\n                            </span>\n                        </a>\n                    </div>\n                </div>\n                <div class="item_content mt-3">\n                    <a href="#" class="btn-link">\n                        <slot name="title"></slot>\n                    </a>\n                    <div class="w-100 mt-3 d-flex align-center">\n                        <img class="user_image" src="" width="40" alt="">\n                        <span class="text-muted fs-09 ml-5 fw-5">\n                                 <a href="#" class="btn-link text-muted author_name  ">\n                                      \n                                 </a>\n                                <span class="mx-3">\n                                            •\n                                </span>\n                                <span class="date">\n                                    \n                                </span>\n                            </span>\n                    </div>\n                </div>\n            </div>\n';const tt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Y(t,e)}(a,t);var e,n,o,r,i,c=(e=a,n=X(),function(){var t,o=Z(e);if(n){var r=Z(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return K(this,t)});function a(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this)).attachShadow({mode:"open"}),t.shadowRoot.appendChild($.content.cloneNode(!0)),t}return o=a,(r=[{key:"connectedCallback",value:function(){this.shadowRoot.querySelector("img").src=this.getAttribute("img"),this.shadowRoot.querySelector(".author_name").innerHTML=this.getAttribute("author_name"),this.shadowRoot.querySelector(".user_image").src=this.getAttribute("icon"),this.shadowRoot.querySelector(".date").innerHTML=this.getAttribute("date"),this.shadowRoot.querySelector(".category").innerHTML=this.getAttribute("cat-name"),this.shadowRoot.querySelector(".category").classList.add(this.getAttribute("cat-type"))}},{key:"observedAttributes",get:function(){return["img","author_name","icon","date","cat-name","cat-type"]}}])&&J(o.prototype,r),i&&J(o,i),Object.defineProperty(o,"prototype",{writable:!1}),a}(Q(HTMLElement));window.customElements.define("site-article",s),window.customElements.define("highlight-card",S),window.customElements.define("trend-topic",P),window.customElements.define("recent-post",U),window.customElements.define("sponsore-news",tt)})();