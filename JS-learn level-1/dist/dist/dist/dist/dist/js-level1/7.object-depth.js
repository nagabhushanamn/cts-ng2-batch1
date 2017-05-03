"use strict";

var person = {
    name: 'Nag',
    age: 32
};

//Object.defineProperty(person, 'age', {configurable:false,writable:false,enumerable:false});
// Object.defineProperties()

// delete person.name;

// person.name = "";

// console.log(person.name);


// for (let prop in person) {
//     if (person.hasOwnProperty(prop)) {
//         console.log(prop+"==>"+person[prop]);
//     }
// }

//-------------------------------------------------------

// var person={
//     name: 'Nag',
//     age:32
// };    

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);


// person.newProp = "new-value";
// delete person.name
// person.name = "abc";

//-----------------------------------------------------------


// 


// var person = {
//     // data properties
//     _name: 'Nag',
//     _age: 32,
//     // accessor properties
//     set name(newName) {
//         console.log('set name');
//         if (newName) {
//             this._name=newName
//         }
//     },
//     get name() {
//         console.log('get name');
//         return this._name;
//     },
//     set age(newAge) {
//         this._age=newAge
//     },
//     get age() {
//         return this._age;
//     }
// };    


// person.name = "Abc" // set
// console.log(person.name);  // get


//-----------------------------------------------------------


var person = {
    name: '',
    age: 32
};

// way-1

/*

    falsy values

    ==> false,0,null,undefined,NAN,""

*/

// if (person.name) {
//     console.log('name property exist..');
// }

// 
delete person.name;
if ("name" in person) {
    console.log('name property exist..');
}

//-----------------------------------------------------------