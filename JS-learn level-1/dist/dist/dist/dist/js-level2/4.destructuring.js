'use strict';

// a.Array destructuring


//--------------------------------------

// var salaries = [1000, 2000, 3000];

// var min, avg, max;
// min = salaries[0];
// avg = salaries[1];
// max = salaries[2];

// or

// var [min, avg, max] = salaries;


//--------------------------------------


// var salaries = [1000, 2000];
// var [min, avg, max] = salaries;

//--------------------------------------

// var salaries = [1000, 2000];
// var [min, avg, max=5000] = salaries;

//--------------------------------------

// var salaries = [1000, 2000,3000];
// var [min, ,max] = salaries;

//--------------------------------------

// var min;
// var avg;
// var max;

// var salaries = [1000, 2000,3000];

// [min, avg, max] = salaries;


//--------------------------------------


// a.Object destructuring


var person = {
    myName: 'Nag',
    age: 32
};

//--------------------------------------

// var name = person.name;
// var age = person.age;


// or

// var { myName:name, age } = person;

//--------------------------------------

// var name;
// var age;

// ({ myName: name, age }=person);

//-------------------------------------