import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defineColor = 'grey';
  title = 'Ravi';
  srcPath = './favicon.ico';
  color = 'orange';
  width = '500px';
  information='';
  flag = true;
  colorarr = ['pink','green','grey'];
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
