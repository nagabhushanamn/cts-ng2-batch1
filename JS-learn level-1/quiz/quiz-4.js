


function Person(name,age) {
    this.name = name;
    this.age = age;

    let self = this;    
    setInterval(function () { 
        //console.dir(this)
        self.age++;
        console.log(self.name+"-->"+self.age);
    },1000);

}

let p = new Person("Ria",0);
