


// ES5  ==> dynamic string/template

// let person = { name: 'Nag', age: 33 };

// let personString = "Name : " + person.name + " , Age: " + person.age;
// console.log(personString);



// let items = ["biryani", "pizaa", "junk food"];

// let htmlTemplate = "<ul>" +
//     "<li>" + items[0] + "</li>" +
//     "<li>" + items[1] + "</li>" +
//     "<li>" + items[2] + "</li>" +
//     "</ul>"                 

// console.log(htmlTemplate);




// ES5  ==> dynamic string/template

// let person = { name: 'Nag', age: 33 };

// let personString = `Name : ${person.name} , Age : ${person.age}`;
// console.log(personString);



let items = ["biryani", "pizaa", "junk food"];

let htmlTemplate = `

    <ul>
        <li>${items[0]}</li>
    </ul>

`;      

console.log(htmlTemplate);