import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naturelover',
  template: `
    <p>
      naturelover works!
    </p>
  `,
  styles: [`
  *{
  background-image:url('../../assets/nature.jpeg');
  height:1000px;
  width:1000px;
  background-repeat:no-repeat;
  }
`]
})
export class NatureloverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
