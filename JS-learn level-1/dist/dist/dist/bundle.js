"use strict";

(function e(t, n, r) {
     function s(o, u) {
          if (!n[o]) {
               if (!t[o]) {
                    var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
               }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];return s(n ? n : e);
               }, l, l.exports, e, t, n, r);
          }return n[o].exports;
     }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
          s(r[o]);
     }return s;
})({ 1: [function (require, module, exports) {
          'use strict';

          var _a = require('./package/a');

          var amod = _interopRequireWildcard(_a);

          function _interopRequireWildcard(obj) {
               if (obj && obj.__esModule) {
                    return obj;
               } else {
                    var newObj = {};if (obj != null) {
                         for (var key in obj) {
                              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                         }
                    }newObj.default = obj;return newObj;
               }
          }

          console.log(amod); // using DOM

          // document.addEventListener('DOMContentLoaded', function (e) {

          //     console.log('DOM ready..');

          //     var box = document.querySelector('.jumbotron');
          //     var hideBtn = document.querySelector('.btn-danger');
          //     var showBtn = document.querySelector('.btn-primary');

          //     hideBtn.addEventListener('click', function (e) {
          //         box.style.display = 'none';
          //     });

          //     showBtn.addEventListener('click', function (e) {
          //         box.style.display = '';
          //     });

          // })


          // using jQuery


          /*
          
               syntax to use jQuery
          
               $('selctor').action1().action2();
          
          */

          // $(document).ready(function () { 

          //     var box = $('.jumbotron');
          //     $('.btn-danger').click(function () { 
          //         box.hide(5000);
          //     })
          //     $('.btn-primary').click(function () { 
          //         box.show(5000);
          //     })

          // });

          //-----------------------------------------------------


          // console.log('app.js');


          // var app = app || {};

          // app.a.doWork();  // a.js work


          //-----------------------------------------------------

          // require(null, ['package/a','package/b'], function (a,b) { 

          //     a.doWork();
          //     b.doWork();

          // });


          //-------------------------------------------------------


          // console.log('in app.js');
          // var greetMod = require('./package/a');

          // var greetMod = require('./package');

          // greetMod.greet('en');
          // greetMod.greet('es');
          // greetMod.greet();


          //-------------------------------------------------------


          // Es6 module

          //--------------------------------------------

          // import { name,age } from './package/a';
          // console.log(name);
          // console.log(age);

          //--------------------------------------------
     }, { "./package/a": 2 }], 2: [function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
               value: true
          });
          // var o = {
          //     doWork: function () {
          //         console.log('A work..');
          //     }
          // };


          //------------------------------------------

          // a. self-executable function

          // var app = app || {};

          // (function () {

          //     app.b.doWork();

          //     var o = {
          //         doWork: function () {
          //             console.log('A work..');
          //         }
          //     };

          //     app.a = o; // export


          // })();

          //------------------------------------------


          // AMD module

          // define('package/a', [], function () {

          //     var o = {
          //         doWork: function () {
          //             console.log('A work..');
          //         }
          //     };

          //     return o;    

          // });

          //------------------------------------------

          // common JS

          // console.log('in a.js');

          // var en = require('./b');
          // var es = require('./c');

          // function greet(lang) {
          //     if (lang === 'en') {
          //         en();
          //         return;
          //     }
          //     if (lang === 'es') {
          //         es();
          //         return;
          //     }

          //     console.log('Hello maga..');

          // }

          // // greet();

          // module.exports = {
          //     greet: greet
          // };


          //----------------------------------------------

          // Es6 module


          var name = exports.name = "Nag";
          var age = exports.age = 32;
     }, {}] }, {}, [1]);