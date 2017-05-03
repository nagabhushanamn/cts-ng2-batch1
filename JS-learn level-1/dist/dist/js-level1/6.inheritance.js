'use strict';

/*

    how to implement inheritance .js lang ?

    ==> using 'prototypes'

*/

// constructor / class

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

// this.sayName = function () {
//     console.log('im '+this.name);
// }

// this.sayAge = function () {
//     console.log('im ' + this.age + " old");    
// }

// }

// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }

// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

// var p1 = new Person('Nag', 32);
// var p2 = new Person('Ria', 2);


//---------------------------------
// var p11 = Object.create(p1);
//---------------------------------


// function Employee(name, age, salary) {
//     Person.call(this, name, age);
//     this.salary = salary;
// }
// Employee.prototype = new Person();
// Employee.prototype.saySalary = function () {
//     return this.salary;
// }


// var e = new Employee('Nag',32,1000.00);


//------------------------------------------


// var a = { x: 1 };
// var b = Object.create(a);


//-------------------------------------------


//  super - class

function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {
    console.log('im ' + this.name);
};

// sub -class

function Employee(name, skill) {
    Person.call(this, name); // super()
    this.skill = skill;
}
Employee.prototype = new Person();
Employee.prototype.saySkill = function () {
    console.log('i know ' + this.skill);
};

var emp = new Employee('Nag', 'Javascript');