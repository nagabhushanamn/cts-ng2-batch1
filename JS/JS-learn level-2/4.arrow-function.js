// let getPrice = function () { return 100.00 };

// or

// syntax of arrow function

// let getPrice = () => 100.00;

// let getPrice = (count) => count * 100.00;

// let getPrice = count => count*100.00;

// let getPrice = (count,tax) => (count*100.00)+tax;

// let getPrice = (count,tax) => { 
//     let result = count * 100;
//     result += tax;
//     return result;
// };

//----------------------------------------------------------

// why arroe function required ?


// reason-1  : on which context that arrow function created, using that context's onwer only they execute where ever.
// reason-2  : not bindable to any object dynamically once they created.

//----------------------------------------------------------


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('processing the invoice-'+this.num);
//     }
// };

// invoice.process();

//----------------------------------------------------------

// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('processing invoice num ' + this.num + " partially");

//         // let self = this;
//         // function finalProcess() {
//         //     //console.dir(this);
//         //     console.log('processing invoice num ' + this.num + " completly");
//         // }

//         // or

//        // let finalProcess = () => { console.log('processing invoice num ' + this.num + " completly");}


//         return finalProcess;
//     }
// }

// let finalProcess = invoice.process();
// // finalProcess();

// let newInvoice = { num: 456 };
// finalProcess.call(newInvoice);


//----------------------------------------------------------


// function Person(age) {
//     this.age = age;

//     // function incAge() {
//     //     this.age++;
//     //     console.log(this.age);
//     // }

//     let incAge = () => { this.age++; console.log(this.age) };

//     setInterval(incAge, 1000);



// }

// new Person(0);


//----------------------------------------------------------




// let invoice = {
//     num: 123,
//     process: function () {
//         console.log(this.num);
//     }
// };



// let invoice = {
//     num: 123,
//     process: () => { console.log(this.num);}
// };


// let invoice = {
//     num: 123,
//     process: function () {
//         return () => { console.log(this.num); };
//     }
// };


// invoice.process()();


//----------------------------------------------------------


// let trainer = {
//     name: "Nag",
//     doTeach: function () {
//         console.log(this.name + " teaching....");

//         // function askQues(ques) {
//         //     console.log(this.name + ' answering ' + ques);
//         // }

//         let askQues = (ques) => {  console.log(this.name + ' answering ' + ques); }
        
//         console.log('teaching end..');

//         return askQues;
//     }
// };

// let askQuesFunc = trainer.doTeach();

// askQuesFunc("ques-1");
// askQuesFunc("ques-2");

// let newTrainer = { name: 'Ria' };

// askQuesFunc.call(newTrainer,"ques-3");


//-----------------------------------------------------------------



// quiz


// // function func() {
// //     return this;
// // }

// let func = () => this;


// let o = func();
// console.dir(o);


