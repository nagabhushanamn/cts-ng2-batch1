// call-stack


// sample-1



// function foo(b) {
//     var a = 10;
//     return a + b + 11;
// }

// function bar(x) {
//     var y = 3;
//     return foo(x * y);
// }


// console.log(bar(7));




// sample-2


// function foo() { }
// function bar() { foo() }
// function baz() { bar() }
// baz();


// sample-3

// function foo() { foo(); }
// foo();

//-------------------------------------------------------------



// sample-4


// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log('long................');
//         i++
//     }
// }

// function shortRunning() {
//     console.log('short...');
// }

// longRunning();
// shortRunning();

//-------------------------------------------------------------




// sample-5


/*

    <button class="odd"> button-1 </button>
    <button class="even"> button-2 </button>

*/


// console.log('start.....');

// $.on('.odd', 'click', function handler1(event) {
//     console.log('Handling click-event on .odd elements');
// });
// $.on('.even', 'click', function handler2(event) {
//     console.log('Handling click-event on .even elements');
// });

// console.log('continue with other work....');


// // function longRunning() {
// //     var i = 0;
// //     while (i < 10) {
// //         console.log('long................');
// //         i++
// //     }
// // }
// // longRunning();

// // Event
// setTimeout(function () { 
//     console.log("Gud Mng");
// },5000);




// sample-5



setTimeout(function () { 
    console.log('ill back in 0s');
}, 1);
function longRunning() {
    var i = 0;
    while (i < 100) {
        console.log('long................');
        i++
    }
}
longRunning();
