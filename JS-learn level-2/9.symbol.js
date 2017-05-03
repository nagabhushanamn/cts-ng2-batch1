/*

    Symbol
    --------
    unique & immutable identifier, used as a obeject's property

*/

// let s1 = Symbol('my-label');
// let s2 = Symbol('my-label');

// let s1 = Symbol.for('key1');
// let s2 = Symbol.for('key1');

//------------------------------------------------------------------



// let person = {
//     name: 'Nag',
//     [Symbol.for('my-family')]: "dad"
// };

// let person2 = {
//     name: 'Ria',
//     [Symbol.for('my-family')]: 'daughter'
// };


// let person3 = {
//     name: 'Anonymous',
//     [Symbol.for('other-family')]: '...'
// };

// if (person3[Symbol.for('my-family')]) {
//     console.log('that person is my-family obj');
// }

//--------------------------------------------------------------------


var idMaker = {
    [Symbol.iterator]: function () { 
        let id = 0;
        return {
            next: function () {
                id++;
                return {value:id,done:id<=10?false:true}
            }
        }
    }
};


//  Es6 - new for loop to loop iterable objects

// for (let id of idMaker) {
//     console.log(id);
// }


// let ids = [...idMaker];

let [id1, id2, id3] = idMaker;