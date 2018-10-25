import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  constructor() { }
  ngDoCheck(){
    console.log('ngDoCheck orders component');
    // this.backgroundColor = 'lightgreen';
  }
}
