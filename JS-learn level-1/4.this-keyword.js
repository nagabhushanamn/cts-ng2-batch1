


/*

    this ==> owner of execution-context

*/


// whey we need 'this' keyword ?

// let pName = "Global";

// let person = {
//     pName: "Nag",
//     sayName: function () {
//         let pName = "Local";
//         //console.log('im ' + pName); // reads context's data
//         // console.log('im '+person.pName); // reads objs data
//         console.log('im '+this.pName);
//     }
// };

// /*
//     best-practice

//     -> never access obj's properties with reference-var if that var-name floating with different obj's ref , use 'this' reference

// */

// // person.sayName();

// let p = person;
// person = { pName: 'cts' };

// p.sayName();


//-----------------------------------------------------------------------------------------


// let p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name); } };
// let p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name); } };


// or

// function sayNameForAll() {
//     console.dir(this);
//     console.log('im '+this.name);
// }


// let p1 = { name: 'Nag', sayName:sayNameForAll  };
// let p2 = { name: 'Ria', sayName: sayNameForAll };


// sayNameForAll(); // im ??   // function-invocation  ( this ==> global-obj )
// p1.sayName();  // im Nag    // method-invocation    ( this ==> invoker-obj)
// p2.sayName();  // im Ria


//-----------------------------------------------------------------------------------------   


// 1000+ person objs 



// function Person(name,age) {
//     this.name = name;
//     this.age = age;

//     this.sayName = function () {
//         console.log('im '+this.name);
//     }
//     this.sayAge = function () {
//         console.log('im '+this.age);
//     }
// }


// let p1 = new Person('Nag', 32); // constructor invocation ( this ==> new-obj)
// let p2 = new Person('Ria', 2);
// //...

//-----------------------------------------------------------------------------------------   



// from third-party

let greetLib = {
    sayName: function (message,from) {
        console.log(message+ ' im '+this.name+":"+from);
    },
    sayHello: function () {
        console.log('Hello...');
    }
};



// our data objects

let p = { name: 'Person' };
let e = { name: 'Employee' };


// Quiz
// greetLib.sayName();


// dynamic func binding

// //way-1
// greetLib.sayName.call(p,"Hello","universe");
// greetLib.sayName.call(e,"Hey","cts");

// // or

// // way-2
// greetLib.sayName.apply(p,["Hello","universe"]);
// greetLib.sayName.apply(e,["Hey","cts"]);


// or

// way-3

// let newF = greetLib.sayName.bind(p, "Hello", "unverse");
// newF();
// newF();

// or

// let newFF = greetLib.sayName.bind(e);
// newFF("Hey", "cts");
// newFF("dude","ibm");



//--------------------------------------------------------------

// in .js-lang, we can invoke func in 4 ways

// 1. function -invocation       ( this ==> global-obj )
// 2. method-invocation          ( this ==> invoker-obj)
// 3. constructor-invocation     ( this ==> new-obj)
// 4. call/apply/bind invocation ( this ==> arg-obj)


//--------------------------------------------------------------
























