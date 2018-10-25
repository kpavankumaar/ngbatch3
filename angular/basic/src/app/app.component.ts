import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newProp
  ngDoCheck(){
    console.log('ngDoCheck app component');
    // this.backgroundColor = 'lightgreen';
  }
  constructor(){
    this.newProp = 'appComponentPropertyInside Construtor';
    console.log(this.newProp);
  }
  defineColor = 'grey';
  title = 'Ravi';
  srcPath = './favicon.ico';
  color = 'orange';
  width = '500px';
  information='';
  flag = true;
  colorarr = ['pink','green','grey'];
  ngOnInit(){
    this.newProp = 'ngOnInit app component initialization ';
    console.log(this.newProp);
    var selfThis = this;
    setTimeout(function(){
      selfThis.defineColor = 'red';
      console.log('selfThis.defineColor',selfThis.defineColor);
    },5000)
    console.log('this.defineColor',this.defineColor);
  }
  toggle(){
    this.color = this.color === 'orange' ? 'lightgrey' : 'orange'
  }
  changeColor(val){
    console.log(val)
    this.color = val;
  }
  update(val){
    console.log(val);
    this.information = val;
  }
  check(){
    this.flag = this.flag === true ? false : true;
  }
  selectcolors = ['red','orange','blue']
}
