"use strict";

var _person;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// es6

//------------------------------------

// var name = "Mur";
// var age = 32;

// var person = {
//     name: name,
//     age:age
// };

// var person = { name, age };


//------------------------------------


// var person = {
//     name: 'Nag',
//     sayName: function () {
//         console.log('im '+this.name);
//     }
// };

// or


// var person = {
//     name: 'Nag',
//     sayName() {
//         console.log('im '+this.name);
//     }
// };


//------------------------------------


var dynamicFiled = "name";

var person = (_person = {}, _defineProperty(_person, "ibm-" + dynamicFiled, 'Nag'), _defineProperty(_person, "say Name", function sayName() {
    console.log('im ' + this['ibm-' + dynamicFiled]);
}), _person);
person['say Name']();

//------------------------------------------