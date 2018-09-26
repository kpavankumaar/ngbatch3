export namespace Users {
    export class Customers{
        public age;
        private phonenumber;
        protected gender;

        constructor(public name){

        }
        details(){
            this.age = 25;
            this.phonenumber = 9696969696;
            this.gender = 'M'
            console.log(this.name);
        }
    }
    class AutoCustomers extends Customers {
        constructor(){
            super('ravi');
        }
        autoCustDetails(){
            console.log(this.age + " , "+ this.gender + " , " + this.phonenumber)
        }
    }
}
var autoCustomer1 = new Users.AutoCustomers();
var person1 = new Users.Customers('srikanth');
person1.details();
console.log(person1.name);
console.log(person1.age);
console.log(person1.phonenumber);
console.log(person1.gender);
console.log(autoCustomer1.name);
