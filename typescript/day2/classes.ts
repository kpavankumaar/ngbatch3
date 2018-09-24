class Customer{
    name;
    constructor(public name_1){
        
    }
    details(){
        var run;
        console.log('name of the user: ', this.name_1);
    }
}
var person = new Customer('srikanth');
console.log(person.name_1);
person.details();