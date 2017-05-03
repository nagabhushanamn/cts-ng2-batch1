// ES5 - class syntax


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age);
// }



//-----------------------------------------------


class Person {

    constructor(name, age) {
        console.log("Peson::constructor");
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log('im ' + this.name);
    }

    sayAge() {
        console.log('im ' + this.age);
    }

}


// var p = new Person('Nag', 33);

class Employee extends Person {


    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log("Employee::constructor");
    }

    saySalary() {
        console.log(`i get ${this.salary}`);
    }

    getBonus() {
        return this.salary * 0.02;
    }
}


// let emp = new Employee('Emp', 33, 1000);


class Boss extends Employee {
    getBonus() {
        return super.getBonus() + this.salary * 0.2;
    }
}

let boss = new Boss("Boss", 0, 1000);

//---------------------------------------------------------



class Abc {
    static staMethod() {
        console.log('sattic method...');
    }
}

Abc.staVar = 12; // static var

Abc.staMethod();