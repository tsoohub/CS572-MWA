import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  template: `
    <h2>Welcome to the MUM</h2>
    <img src="https://www.mum.edu/wp-content/themes/MUM/media/home/home_self-exploration_large.jpg" width="90%" />
  `,
  styles: []
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
