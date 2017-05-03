"use strict";

// es6


function f() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;


    // if (!a) {
    //     a = 1;
    // }    
    // if (!b) {
    //     b = 2;
    // }

    // or

    // a = a || 1;
    // b = b || 2;

    console.log(a);
    console.log(b);
}

f(undefined, 20);