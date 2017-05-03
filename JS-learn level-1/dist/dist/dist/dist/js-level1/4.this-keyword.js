'use strict';

/*


    this ==> owner of execution-context

*/

// whey we need 'this' keyword ?

// var person = {
//     pName: 'Nag',
//     sayName: function () {
//         //console.log('im '+pName); // context's pName
//         //console.log('im '+person.pName); // person's pName
//         console.log('im '+this.pName); // context's owner pName
//     }
// };

// // person.sayName(); // sayName-context ==> global-context


// var p = person;
// person = { pName: 'IBM' };

// p.sayName();

//---------------------------------------------------------------


// var p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name) } };
// var p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name) } };


function sayNameForAll() {
    console.log('im ' + this.name);
}

// var p1 = { name: 'Nag', sayName: sayNameForAll };
// var p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // im ??  // function-invocation ( context owned by 'global-obj')
// p1.sayName(); // im Nag    // method invocation   ( context owned by 'invoker-obj')
// p2.sayName(); // im Ria

//---------------------------------------------------------------


// 1000+ person objs


// function Person(name,age) {
//     this.name = name;
//     this.age = age;

//     this.sayName = function () {
//         console.log('im '+this.name);
//     }

//     this.sayAge = function () {
//         console.log('im ' + this.age + " old");    
//     }

// }


// var p1 = new Person('Nag', 32);  // constructor  ( context owned by new-obj)
// var p2 = new Person('Ria', 2);


//-----------------------------------------------------------------


var greetLib = {
    sayName: function sayName(message, from) {
        console.log(message + ' im ' + this.name + " - " + from);
    }
};

var p = { name: 'Nag' };
var e = { name: 'RiA' };

// dynamic function binding

// way-1

// greetLib.sayName.call(p,"Hello","BLR");
// greetLib.sayName.call(e,"Dude","CHN");

// way-2

// greetLib.sayName.apply(p,["Hello","BLR"]);
// greetLib.sayName.apply(e,["Dude","CHN"]);

// way-3

var newF = greetLib.sayName.bind(p, "Hello", "BLR");

// on event
newF();

var newF2 = greetLib.sayName.bind(e);
newF2("hey", "CHN");

//---------------------------------------------------------


/*
 in .js-lang , we can ivoke func in 4 ways


 1. function invocation  ( this ==> global-obj )
 2. method invocation    ( this ==> invoker-obj)
 3. constructor invocation ( this ==> new-obj )
 4. call/apply/bind invocation ( this ==> arg-obj)



*/