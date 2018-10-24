import { Component } from "@angular/core";

@Component({
    selector:'app-customerscardview',
    template:`<h2> customers card view </h2>`
})
export class CustomersCardViewComponent{
    newProp;
    constructor(){
        this.newProp = 'CardViewcomponent constructor value'
        console.log(this.newProp);
    }
    ngOnInit(){
        this.newProp = 'CardViewcomponent ngOnInit value'
        console.log(this.newProp);
    }
}