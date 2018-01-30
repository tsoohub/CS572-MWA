import { Directive, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  @HostBinding("style.text-transform") textupper;

  constructor(private e: ElementRef, private r: Renderer) { 
    // e.nativeElement.style.fontSize = '22px'
    // r.setElementStyle(e.nativeElement, 'text-transform', 'uppercase');
    this.textupper = 'uppercase';
    
  }

}
