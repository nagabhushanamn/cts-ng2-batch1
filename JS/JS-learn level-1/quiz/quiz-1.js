


function Person(name,age) {
    this.name = name;
    this.age = age;

    this.sayName = function () {
        console.log('im '+this.name);
    }
    this.sayAge = function () {
        console.log('im '+this.age);
    }
}

/*

    bp: never invoke constructor func , without new keyword

*/


// Person('Abc',100); 

let p=new Person('Person',0);