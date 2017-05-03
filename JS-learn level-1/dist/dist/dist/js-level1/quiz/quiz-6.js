"use strict";

// function Hotel() {

//     this.getFood = function (food) {
//         //...
//         function eat() {
//             console.log('eating..'+food);
//         }
//         return eat;
//     }

// }

// var hotel = new Hotel();

// //-------------------------------------


// var pizaaEat = hotel.getFood("pizaa");
// var biryaniEat = hotel.getFood("biryani");

// //-------------------------------------

// pizaaEat();
// biryaniEat();


//--------------------------------------------


var arr = [];

function getFunc(i) {
    var f = function f() {
        var k = Math.random();
        console.log(k);
        console.log(i);
    };
    return f;
}

for (var i = 0; i < 2; i++) {
    arr.push(getFunc(i));
}

console.log(arr[0]());
console.log(arr[1]());