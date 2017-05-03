'use strict';

// var o = {
//     doWork: function () {
//         console.log('B work..');
//     }
// };


//------------------------------------------

// a. self-executable function

// var app = app || {};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('B work..');
//         }
//     };

//     app.b = o;

// })();

//------------------------------------------


// AMD module

// define('package/b', [], function () {

//     // c.doWork();

//     var o = {
//         doWork: function () {
//             console.log('B work..');
//         }
//     };

//     return o;    

// });


//------------------------------------------


function greet() {
    console.log('Hello....');
}

module.exports = greet;