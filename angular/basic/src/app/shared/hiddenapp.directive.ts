import { Directive,ElementRef,Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHiddenapp]'
})
export class HiddenappDirective {
  @Input('appHiddenapp') highlight;
  constructor(private el:ElementRef) { 
    console.log('constructor ',this.highlight);

  }
  ngOnInit(){
    console.log('ngOnInit',this.highlight);
    this.el.nativeElement.style.backgroundColor = this.highlight;
  }
  @HostListener('mouseenter') onmouseenter(){
    this.el.nativeElement.style.backgroundColor = 'yellow';
  } 
  @HostListener('mouseleave') onmouseleave(){
    this.el.nativeElement.style.backgroundColor = 'lightgrey';
  } 


}
