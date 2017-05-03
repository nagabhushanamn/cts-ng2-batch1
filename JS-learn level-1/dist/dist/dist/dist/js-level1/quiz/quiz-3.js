"use strict";

function sessionStart() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching .js");
            var self = this;
            function doLearn() {
                console.log(this.name + " learning .js from " + self.name);
            }
            return doLearn;
        };
    }
    function Employee(name) {
        this.name = name;
    }
    var tnr1 = new Trainer('Nag'); // constructor-invocation
    var e1 = new Employee('A');
    var e2 = new Employee('B');
    var learnFunc = tnr1.doTeach(); // method-invocation
    learnFunc.call(e1); //call invocation
    learnFunc.call(e2);
}

sessionStart(); // function invocation