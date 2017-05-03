'use strict';

var _a = require('./package/a');

console.log(_a.name); // using DOM

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

// import * as amod from './package/a';
// console.log(amod);


//--------------------------------------------

console.log(_a.age);