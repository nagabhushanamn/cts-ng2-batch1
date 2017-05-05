/*
    // how to implement inheritance in .js lang?

    using prototype(s)  ==> parent obj with common stuff



*/

function Person(name, age) {
    this.name = name;
    this.age = age;

    // this.sayName = function () {
    //     console.log('im '+this.name);
    // }
    // this.sayAge = function () {
    //     console.log('im '+this.age);
    // }
}

Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age);
}


// let p1 = new Person("Nag", 32);
// let p2 = new Person("Ria", 2);


function Employee(name, age, salary) {
    Person.call(this, name, age);
    this.salary = salary;
}
Employee.prototype = new Person();

Employee.prototype.saySalary = function () {
    console.log('i owe ' + this.salary);
}


let e1 = new Employee('Emp', 33, 1000.00);