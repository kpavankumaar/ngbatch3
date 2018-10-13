import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  name  = new FormControl('');
  lname = new FormControl('');
  constructor() { }
  ngOnInit() {}
  update(){
    this.name.setValue('pavan');
    this.lname.setValue('kumar');
  }
}
