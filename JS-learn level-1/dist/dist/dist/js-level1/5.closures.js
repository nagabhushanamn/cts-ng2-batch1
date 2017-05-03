'use strict';

/*
 
 A closure is a function having access to the parent scope,
 even after the parent function has closed.

 why we need closure ?

   --> to abstract public-behav of any modules to other modules
   


*/

function teach(sub) {
    //...
    console.log('teach start..');
    var notes = sub + "-notes";

    function learn() {
        console.log('learning ' + sub + " with " + notes);
    }
    // learn();
    console.log('teach ends');
    return learn;
}

var learnFunc = teach('.js'); // teach-context with args & locals
learnFunc();
learnFunc();