import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter : number = 25;
  componentCounterValue: number = this.counter;

  countChange(event) {
    this.counter = event;
  }


}
