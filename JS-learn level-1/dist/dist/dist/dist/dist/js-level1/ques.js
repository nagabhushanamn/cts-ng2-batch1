"use strict";

// let i = 100;

// function f() {
//     console.log(i);
//     console.log(this.i);
// }

// f();


//------------------

var o = {
    i: 100,
    f: function f() {
        console.log(i); // Reference Error
        // console.log(this.i);
    }
};
o.f();