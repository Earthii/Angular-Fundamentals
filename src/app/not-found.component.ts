import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <p>
        Not Found
        <a href="/">Go home</a>
    </p>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
