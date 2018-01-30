import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  color: string;
  @Input() items: Array<string> = ["Car", "Watch", "Motorcycle", "Truck"];
  @Output() colorChange :  EventEmitter<string>;

  constructor() {
    this.colorChange = new EventEmitter();
  }

  changeColorToParent(clr){
    this.color = clr;
    this.colorChange.emit(this.color);
  }
  
  ngOnInit() {
  }

}
