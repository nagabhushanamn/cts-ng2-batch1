/*

    A closure is a function having access to the parent scope,
    even after the parent function has closed.

    why we need closures ?

    --> to abstract public behav of any module
    --> while executing async, to access parent-scoped data

*/

//---------------------------------------------------------------------------------

// function teach(sub) {
//     console.log('teaching ' + sub);
//     let notes = sub + "-notes";
//     let i=100;
//     function learn() {
//         console.log('learning with '+notes);
//     }
//     //learn();
//     console.log('teaching end');
//     return learn;
// }

// let learnFunc=teach('.js'); // teach-context created with args & local then at end context-destroyed

// learnFunc();
// learnFunc();

//---------------------------------------------------------------------------------


// closure use-1  : to abstract public behav of any module


// e.g counter module


// function init() {

//     let count = 0;  // private

//     // public closures    
//     function doCount() {
//         count++;
//     }    
//     function getCount() {
//         return count;
//     }

//     return {
//         doCount: doCount,
//         getCount:getCount
//     };

// }

// let counter = init();


//---------------------------------------------------------------------------------


// closure use-2  : while executing async, to access parent-scoped data


function Person(name, age) {
    this.name = name;
    this.age = age;

    let self = this;


    setInterval(function () {
        //console.dir(this)
        self.age++;
        console.log(self.name + "-->" + self.age);
    }, 5000);

}



let p = new Person("Ria", 0);