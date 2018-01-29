import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <button (click) = "decrease()" >-</button>
        <span>{{counterValue}}</span>
      <button (click)="increase()" >+</button>
      <p>Component Counter Value = {{comCounter}}</p>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  counterValue:number;
  @Input() count;
  @Input() comCounter;
  @Output() counterChange :  EventEmitter<number>;

  constructor(){
      this.counterChange = new EventEmitter();
  }

  ngOnInit() {
    this.counterValue = this.count || 0;
  }

  increase(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  decrease(){
    this.counterValue--; 
    this.counterChange.emit(this.counterValue);
  }
}
