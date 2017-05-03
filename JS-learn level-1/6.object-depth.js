"use strict"

// let person = {
//     name: 'Nag',
//     age: 33
// };


//------------------------------------------------

// Object.defineProperty(person, 'name', {
//     configurable: false,
//     writable: false,
//     enumerable:false
// });
// // Object.defineProperties

// delete person.name;
// person.name = "";

// console.log(person.name);

// for (let prop in person) {
//     console.log(prop+"==>"+person[prop]);
// }

//------------------------------------------------



//

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);

// person.bla = "bla";
// delete person.age;
// person.age = -10;


//------------------------------------------------


// let person = {

//     // data properties
//     _name: 'Nag',
//     _age: 33,

//     // accessor properties
//     set name(newName) {
//         if (newName) {
//             this._name = newName;
//         }
//     },
//     set age(newAge) {
//         if (newAge > 0) {
//             this._age=newAge
//         }
//     },
//     get name() {
//         return this._name;
//     },
//     get age() {
//         return this._age;
//     }

// };


// person.name = "" // set
// console.log(person.name); // get


// person.age = -10 // set
// console.log(person.age); // get
