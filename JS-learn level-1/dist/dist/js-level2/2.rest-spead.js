"use strict";

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

// rest

// function f(...rest) {
//     console.log(a);
//     // console.log(Array.isArray(rest))
//     console.log(rest);
// }

// f(12,13,14,15);


//-----------------------------------------

// spread


// var max = Math.max(1,2,3);

// var nums = [1, 2, 3,4,5,6,7,8,9,20];
//var max = Math.max(nums[0], nums[1], nums[2]); // spread ( manualy)
// var max = Math.max(...nums);


var a = [1, 2, 3];
var b = [7, 8, 9];
var name = "Nag";

var c = [].concat(a, [4, 5, 6], b, _toConsumableArray(name));

// imp note : if an object is an iterable , then it is 'spredable'


//-------------------------------------------------------------