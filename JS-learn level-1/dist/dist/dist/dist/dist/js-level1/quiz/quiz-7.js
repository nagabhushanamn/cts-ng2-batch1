'use strict';

function func() {
    throw new Error('i hate .js');
}

function teach() {
    console.log('teaching .js');
    var name = "Nag"; // it will moved to Heap
    try {
        //func(); // sync func exe
        setTimeout(function () {
            console.log('after timeout..');
            //throw new Error('i hate .js');
            console.log(name + " will back to session");
        }, 5000);
    } catch (e) {
        console.log('i caught - ' + e.message);
    }
    console.log('teaching end..');
}

teach();