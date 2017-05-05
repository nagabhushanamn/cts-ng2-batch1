let trainer = {
    name: 'Nag',
    doTeach: function () {

        console.log(this.name + " teaching .js");

        let self = this;

        function doLearn() {
            console.log(this.name + ' learning .js from ' + self.name);
        }
        // doLearn();

        let emp = {
            name: 'cts'
        };
        doLearn.call(emp);

    }
};

// trainer.doTeach();

let oldTrainer = trainer;
trainer = {
    name: 'Ria'
};

oldTrainer.doTeach();