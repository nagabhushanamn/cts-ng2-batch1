"use strict";

/*

    Execution-Context
    
    memory / stack-frame with args & local variables
    to execute given instructions

    phase-1 : creation

        all variables declared any where will get hoisted to top
        with default value ('undefined')

    phase-2 : execute

        instructions will get execute in seq.


    -------------------


    by default , js-runtime has one 'global-context' and 'global-object'


     global-obj

        browser-envi ==> window

        Node.js      ==> process

     ----------------------------------------------


     imp-note : JS-runtime throw 'ReferenceError',
     when accessing any variable which is not in context.

     ----------------------------------------------

     when invoking any function ,
     also creates new-context which child of in which context
     that function is declared.

     

*/

// var v = 12;
// console.log(v);

// ----------------------------------------------


// var v= 12;


// function f1() {
//     console.log(v);
//     var v = 13
// }

// f1(); // f1-context


// ----------------------------------------------


// var v = 12;

// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     //f2(); // f2-context ==> f1-context
//     var v = 13;
//     return f2;
// }

// var f2Func = f1(); // f1-context  ==> global-context

// f2Func();  // f2-context  ==> f1-context


// ----------------------------------------------


// ES6 ==> keywords  ( let , const)


// console.log(projectId);
// let projectId = 123;


// ----------------------------------------------

// function f() {

//     {
//         let i = 100;
//     }

//     console.log(i);

// }

// f();

//--------------------------------------------


// var i = 100;

// {
//     let i = 200;
//     console.log(i);
// }

// console.log(i);

//--------------------------------------------

// var i = 100;

// for(let i = 0; i < 10; i++){
//   //..  
// }

// console.log(i);


//--------------------------------------------

// let v = 100;

// let v = 200;


//--------------------------------------------


// let v = 100;

//-------------------------------------------


// const v = 12;
// v = 13;


var comp = { name: 'IBM' };

comp.name = "IBM-INDIA";