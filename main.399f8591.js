parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||t(e)||n(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,r){if(e){if("string"==typeof e)return l(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,r):void 0}}function t(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return l(e)}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var d=document.body.querySelector(".append-row"),i=document.body.querySelector(".remove-row"),c=document.body.querySelector(".append-column"),a=document.body.querySelector(".remove-column"),s=document.body.querySelector(".field"),u=function(){10!==s.rows.length?(i.disabled=!1,d.disabled=!1,s.append(s.rows[0].cloneNode(!0))):d.disabled=!0},b=function(){var e=s.rows.length;2!==e?(i.disabled=!1,d.disabled=!1,s.rows[e-1].remove()):i.disabled=!0},f=function(){if(10!==s.rows[0].cells.length){a.disabled=!1,c.disabled=!1;var r=e(s.rows).map(function(e){return e.cells[e.cells.length-1].cloneNode()});e(s.rows).map(function(e,n){return e.appendChild(r[n])})}else c.disabled=!0},m=function(){2!==s.rows[0].cells.length?(a.disabled=!1,c.disabled=!1,e(s.rows).map(function(e){return e.cells[e.cells.length-1].remove()})):a.disabled=!0};d.addEventListener("click",u),i.addEventListener("click",b),c.addEventListener("click",f),a.addEventListener("click",m);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.399f8591.js.map