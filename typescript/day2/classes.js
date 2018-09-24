var Customer = /** @class */ (function () {
    function Customer(name_1) {
        this.name_1 = name_1;
    }
    Customer.prototype.details = function () {
        console.log('name of the user: ', this.name_1);
    };
    return Customer;
}());
var person = new Customer('srikanth');
console.log(person.name_1);
person.details();
