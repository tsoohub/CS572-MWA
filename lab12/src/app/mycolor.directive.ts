import { Directive, ElementRef, Renderer,HostListener, HostBinding, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  @HostBinding('style.color') myColor;
  @Output('appMycolor') colorChange :  EventEmitter<string>;

  colors: Array<string> = ["red", "blue", "green", "black"];

  constructor(private e: ElementRef, private r: Renderer) { 
    this.colorChange = new EventEmitter();
  }

  @HostListener('click') foo(){ 
    let cc = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.myColor = cc; 
    this.colorChange.emit(cc);
  }

}
