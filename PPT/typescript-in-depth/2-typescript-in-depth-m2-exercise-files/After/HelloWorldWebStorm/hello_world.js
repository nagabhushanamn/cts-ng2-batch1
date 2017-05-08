var HelloWorld = (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
})();
var hello = new HelloWorld('Hello TypeScript');
console.log(hello.message);
function ScopeTest() {
    if (true) {
        var foo = 'use anywhere';
        var bar = 'use in this block';
    }
    console.log(foo); // works!!
    console.log(bar); // error!!
}
//# sourceMappingURL=hello_world.js.map