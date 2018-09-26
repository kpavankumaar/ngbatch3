var Customers = /** @class */ (function () {
    function Customers(name) {
        this.name = name;
    }
    Customers.prototype.details = function () {
        console.log(this.name);
    };
    return Customers;
}());
var person1 = new Customers('srikanth');
person1.details();
