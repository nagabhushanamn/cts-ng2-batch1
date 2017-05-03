'use strict';

// 1

function foo(b) {
    var a = 10;
    return a + b + 11;
}

function bar(x) {
    var y = 3;
    return foo(x * y);
}

console.log(bar(7));

// 2


function foo() {}
function bar() {
    foo();
}
function baz() {
    bar();
}
baz();

// 3

function foo() {
    try {
        throw new Error('oops');
    } catch (e) {
        console.log('i caught ' + e.message);
    }
}
function bar() {
    foo();
}
function baz() {
    bar();
}
baz();

// 4


function foo() {
    foo();
}
foo();

// 5


function long() {
    var i = 0;
    while (i < 5) {
        console.log('long..');
        i++;
    }
}

function short() {
    console.log('short...');
}

long();
short();

// imp-note : .js-runtime , only one func will execute at any time.

//---------------------------------------------


// 6


/*

    <button class="odd">button-1</button>
    <button class="even">button-2</button>

*/

console.log('start...');

$.on('.odd', 'click', function handler1() {
    console.log('handling clic-event on .odd element');
});

$.on('.even', 'click', function handler2() {
    console.log('handling clic-event on .even element');
});

var i = 0;
while (i < 5) {
    console.log('hello..');
    i++;
}

///


console.log('hello...');

setTimeout(function () {
    console.log('im back..');
}, 5000);

var i = 0;
while (i < 5) {
    console.log('hello..');
    i++;
}