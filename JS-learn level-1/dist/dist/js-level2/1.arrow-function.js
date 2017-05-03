'use strict';

//var getPrice = function () { return 100.00 };


// var getPrice = () => 100.00;
// var getPrice = (count) => count*100.00;
// var getPrice = count => count*100.00;
// var getPrice = (count,tax) => (count*100.00)+tax;
// var getPrice = (count, tax) => { var price = (count * 100.00) + tax; return price; };


//------------------------------------------------


var trainer = {
    name: 'Nag',
    doTeach: function doTeach(sub) {
        var _this = this;

        console.log(this.name + ' teaching ' + sub);

        // var self = this;
        // function askQues(ques) {
        //     console.dir(this);
        //     console.log(self.name+ ' answering '+ques +' on '+sub);
        // }

        // or using arrow-function

        var askQues = function askQues(ques) {
            console.dir(_this);
            console.log(_this.name + ' answeing ' + ques + ' on ' + sub);
        };

        return askQues;
    }
};

// var askQues = trainer.doTeach('.js');

// askQues('Q1');


// var newTrainer = { name: 'Praveen' };
// trainer.doTeach.call(newTrainer,'Java')('Q2');


//-----------------------------------------------------------------


// var invoice = {
//     num: 123,
//     process: () => { console.dir(this); console.log(this.num)}
// }


// invoice.process();

//---------------------------------------------------------

// var invoice = {
//     num: 123,
//     process: function () {
//         return () => { console.dir(this); console.log(this.num) };
//     }
// }


// // invoice.process()();

// var newInvoice = { num: 321 };
// var f=invoice.process();
// f.call(newInvoice);


//------------------------------------------------------


function Person(name, age) {
    this.name = name;
    this.age = age;

    var self = this;
    // setInterval(function () { 
    //     self.age++;
    //     console.log(self.name+"==>"+self.age);
    // },1000);

    var ageInc = function ageInc() {
        self.age++;console.log(self.age);
    };
    // var ageInc = () => { this.age++; console.log(this.age) }


    //setInterval(ageInc,1000);
}

new Person('Ria', 0);