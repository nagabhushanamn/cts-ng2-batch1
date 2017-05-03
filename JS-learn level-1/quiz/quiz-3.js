function sessionStart() {

    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching .js");
            let self = this;
            function doLearn() {
                console.log(this.name + " learning .js from " + self.name);
            }
            return doLearn;
        }
    }
    function Employee(name) {
        this.name = name;
    }
    let tnr = new Trainer('Nag');  // constructor invocation
    let tnr2 = new Trainer('Ria');  // constructor invocation

    let e1 = new Employee('A');
    let e2 = new Employee('B');

    let doLearn = tnr.doTeach();  // method invocation

    doLearn.call(e1);  // call/apply/bind invocation
    doLearn.call(e2);
}

sessionStart();  // function invocation