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