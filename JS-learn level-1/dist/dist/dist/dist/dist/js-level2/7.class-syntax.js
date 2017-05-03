'use strict';

var _typeof4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
};

var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;if (getter === undefined) {
            return undefined;
        }return getter.call(receiver);
    }
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

// Es5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }

// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

//----------------------------------------

// Es6

var Person = function () {
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
        console.log('Person:constructor()');
    }

    _createClass(Person, [{
        key: 'sayName',
        value: function sayName() {
            console.log('im ' + this.name);
        }
    }, {
        key: 'sayAge',
        value: function sayAge() {
            console.log('im ' + this.age);
        }
    }]);

    return Person;
}();

// var p = new Person('Nag',32);

var Employee = function (_Person) {
    _inherits(Employee, _Person);

    function Employee(name, age, skill, salary) {
        _classCallCheck(this, Employee);

        var _this = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this));

        _this.skill = skill;
        _this.salary = salary;
        console.log('Employee:constructor()');
        return _this;
    }

    _createClass(Employee, [{
        key: 'saySkill',
        value: function saySkill() {
            console.log('i know ' + this.skill);
        }
    }, {
        key: 'getBonus',
        value: function getBonus() {
            return this.salary * 0.02;
        }
    }]);

    return Employee;
}(Person);

// var emp = new Employee('Nag',32,'.js',1000);

var Boss = function (_Employee) {
    _inherits(Boss, _Employee);

    function Boss() {
        _classCallCheck(this, Boss);

        return _possibleConstructorReturn(this, (Boss.__proto__ || Object.getPrototypeOf(Boss)).apply(this, arguments));
    }

    _createClass(Boss, [{
        key: 'getBonus',
        value: function getBonus() {
            return this.salary * 0.2 + _get(Boss.prototype.__proto__ || Object.getPrototypeOf(Boss.prototype), 'getBonus', this).call(this);
        }
    }]);

    return Boss;
}(Employee);

var boss = new Boss('Murgaih', 32, '.js', 1000);

//---------------------------------------------


var Laptop = function () {
    function Laptop() {
        _classCallCheck(this, Laptop);

        console.log('Laptop instance created...');
        Laptop.totalCount++;
    }

    _createClass(Laptop, null, [{
        key: 'staMethod',
        value: function staMethod() {
            console.log("static method...");
        }
    }]);

    return Laptop;
}();

Laptop.totalCount = 0; // sattic var

var a = new Laptop();
var b = new Laptop();

console.log(Laptop.totalCount);