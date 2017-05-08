var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UniversityLibrarian = (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
})();
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + ".");
        console.log("Department: " + ReferenceItem.department);
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.department = 'Research';
    return ReferenceItem;
})();
exports.ReferenceItem = ReferenceItem;
var Encyclopedia = (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newTitle, newYear, edition) {
        _super.call(this, newTitle, newYear);
        this.edition = edition;
    }
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: " + this.edition + " (" + this.year + ")");
    };
    Encyclopedia.prototype.printCitation = function () {
        console.log(this.title + " - " + this.year);
    };
    return Encyclopedia;
})(ReferenceItem);
exports.Encyclopedia = Encyclopedia;
//# sourceMappingURL=classes.js.map