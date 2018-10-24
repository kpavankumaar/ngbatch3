import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateNameField } from '../service/validations';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  // name  = new FormControl('');
  // lname = new FormControl('');
  // test = 'testcontent';
  // profileGroup = new FormGroup({
  //   name:new FormControl(''),
  //   lname:new FormControl(''),
  //   city:new FormControl(''),
  //   state:new FormControl('')
  // })
  validationForLname = /[a-z]/g
  profileGroup = this.fb.group({
    name:this.fb.control(''),
    lname:new FormControl('',validateNameField(this.validationForLname)),
    address: this.fb.group({
      city:[''],
      state:['']
    })
    
  })
  formBuilder_1;
  constructor(private fb:FormBuilder) {
    this.formBuilder_1 = new FormBuilder();
  }
  ngOnInit() {}
  // update(){
  //   this.name.setValue('pavan');
  //   this.lname.setValue('kumar');
  // }
  profileUpdate(val){
    console.log(val);
  }
}
