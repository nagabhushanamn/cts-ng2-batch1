// enum Category { LANGUAGE, FRAMEWORK, OTHER };
var Java = (function () {
    function Java() {
        this.name = ".java";
    }
    return Java;
}());
var JS = (function () {
    function JS() {
        this.name = ".js";
    }
    return JS;
}());
var Trainer = (function () {
    function Trainer() {
    }
    Trainer.prototype.getSubject = function () {
        return this.subject;
    };
    return Trainer;
}());
var javaTnr = new Trainer();
javaTnr.subject = new Java();
var jsTnr = new Trainer();
jsTnr.subject = new JS();
// javaTnr.subject = new Array();
console.log(javaTnr.getSubject().name);
//# sourceMappingURL=app.js.map