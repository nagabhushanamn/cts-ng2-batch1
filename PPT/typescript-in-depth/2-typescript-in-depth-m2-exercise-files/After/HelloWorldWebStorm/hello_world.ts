class HelloWorld {
    constructor(public message: string) { }
}

var hello = new HelloWorld('Hello TypeScript');
console.log(hello.message);


function ScopeTest() {

    if(true) {

        var foo = 'use anywhere';
        let bar = 'use in this block';

        // do some more stuff
    }

    console.log(foo); // works!!
    console.log(bar); // error!!
}