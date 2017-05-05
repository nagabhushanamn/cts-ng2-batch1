


//  Array destructuring


// let arr = [10, 20, 30];

// let min = arr[0];
// let avg = arr[1];
// let max = arr[2];


// let [min, avg, max] = arr;

// let min, avg, max;
// [min, avg, max] = arr;



// let arr = [10, 20,30];
// let [min, avg, max=50] = arr;


// let arr = [10, 20, [30, 40]];
// let [min, avg, [max1, max2]] = arr;



// Object destructuring



let person = {
    name: 'Nag',
    age:32
};

// let name = person.name;
// let age = person.age;


// let { name, age } = person;
// let { name: myName, age: myAge } = person;

let myName;
let myAge;

({ name:myName, age:myAge } = person);




