import { Component } from "@angular/core";
import { service } from '../core/service/service';
@Component({
    selector:'app-customers',
    templateUrl:'customers.component.html'
})
export class CustomersComponent{
    newProp;
    constructor(){
        this.newProp = 'customerscomponent constructor value'
        console.log(this.newProp);
    }
    ngOnInit(){
        this.newProp = 'customerscomponent ngOnInit value';
        console.log(this.newProp);
    }
    ngDoCheck(){
        console.log('ngDoCheck customers component');
        // this.backgroundColor = 'lightgreen';
    }
}