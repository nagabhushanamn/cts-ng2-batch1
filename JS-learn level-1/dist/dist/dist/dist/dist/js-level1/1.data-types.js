"use strict";

/*

    data-types

    1. simple / primitives  ==> values

     a. string
     b. number
     c. boolean
     d. undefined

    2. complex / reference  ==> objects


*/

//---------------------------------------------------

// a. string 

var name = "Nag";
var selection = 'a';

//---------------------------------------------------

// b. number

var count = 12;
var cost = 12.12;

//---------------------------------------------------

// c. boolean

var found = true;

//---------------------------------------------------

// d. undefined

var v;

//---------------------------------------------------


// reference ==> objects

/*

    How to create objs in .js lang ?

    var ref=new Constructor();


*/

// var person = new Object();
// person.name = "Nag";
// person.age = 32;
// person.doWork = function () {
//     console.log('working....');
// }

// delete person.age;

// console.log(person.age);


//--------------------------------------


// literal-style objects


// 1. Object

var config = new Object(); // obj wrapper
config.url = "http://";
config.method = "GET";
config.dataType = "JSON";

// or

var config = {
    url: 'htpp://',
    method: 'GET',
    dataType: 'JSON'
};

//--------------------------------------

// 2. Array

var arr = new Array();

// or

var arr = [];

//--------------------------------------

// RegExp


var mob = "1234567890";

var re = new RegExp("\\d{10}");

// or

var re = /\d{10}/;

//--------------------------------------

// 4. Function

var add = new Function("n1", "n2", "var r=n1+n2;return r;");

// or

function add(n1, n2) {
    var r = n1 + n2;return r;
}

//--------------------------------------


// How to access obj's properties ?

var person = {
    name: 'Nag',
    "full-name": "Nagabhushanam N"
};

console.log(person.name);
// console.log(person['name']);

console.log(person["full-name"]);