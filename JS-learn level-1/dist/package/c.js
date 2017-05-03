'use strict';

// var o = {
//     doWork: function () {
//         console.log('C work..');
//     }
// };


//------------------------------------------

// a. self-executable function

// var app = app || {};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('C work..');
//         }
//     };

//     app.c = o;


// })();

//------------------------------------------


// AMD module

// define('package/c', [], function () {

//     var o = {
//         doWork: function () {
//             console.log('C work..');
//         }
//     };

//     return o;    

// });


//------------------------------------------


function greet() {
    console.log('Ola....');
}

module.exports = greet;