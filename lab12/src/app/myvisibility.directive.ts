import { Directive, Input, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  @HostBinding('style.visibility') visible;

  constructor(private e: ElementRef, private r: Renderer) { }

  @Input('show') show:boolean
  ngOnInit(){
    if(this.show) {
      this.visible='visible';
    }   
    else{
      this.visible='hidden';
    }
  }

}
