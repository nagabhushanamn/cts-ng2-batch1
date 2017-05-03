"use strict";

/*

    .js lang , we can create func in 2 ways

    1. function declaration
    2. function expression


*/

// 1. function declaration

// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,13));

//-----------------------------------


// 2. function expression

// console.log(add(12,13));
// var add = function (n1, n2) { return n1 + n2 };

// //console.log(add(12,13));


//-----------------------------------


//a.functions as values


// function sayHello() {
//     console.log('Hello..');
// }


// var sayHi = sayHello;

// sayHi();


//-----------------------------------

// b. function as args


// function greet(f) {
//     if (f) {
//         f();
//         return;
//     }
//     console.log('Hello..');
// }

// greet();

// // es  ==> Ola

// greet(function () { console.log('Ola...')});


// var nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(function (a, b) { return b - a; });

// console.log(nums);


//-----------------------------------

// function as return

// function teach() {

//     console.log('teaching...');

//     function learn() {
//         console.log('learning...');
//     }

//     return learn;

// }

// var learnFunc = teach();

// learnFunc()
// learnFunc()


//-----------------------------------


// function f(a) {
//     console.dir(arguments);
//     return arguments[1];
// }

// console.log(f(12,13,14,15));


// function sum() {

//     var r = 0,
//         len = arguments.length,
//         i = 0;

//     while (i < len) {
//         r += arguments[i];
//         i++;
//     }

//     return r;    

// }
//-----------------------------------


function getFood() {
    return "No Food";
}
// var getFood = new Function('....');

function getFood(pay) {
    return "Biryani";
}
// var getFood = new Function('....');

console.log(getFood());

//-----------------------------------------