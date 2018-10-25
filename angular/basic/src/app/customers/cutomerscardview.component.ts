import { Component } from "@angular/core";

@Component({
    selector:'app-customerscardview',
    templateUrl:'customerscardview.component.html'
})
export class CustomersCardViewComponent{
    newProp;
    backgroundColor = 'lightblue';
    updateColor(){
        this.backgroundColor = 'green';
    }
    constructor(){
        this.newProp = 'CardViewcomponent constructor value'
        console.log(this.newProp);
    }
    ngOnInit(){
        this.newProp = 'CardViewcomponent ngOnInit value'
        console.log(this.newProp);
    }
    ngDoCheck(){
        console.log('ngDoCheck background color', this.backgroundColor);
        // this.backgroundColor = 'lightgreen';
    }
}