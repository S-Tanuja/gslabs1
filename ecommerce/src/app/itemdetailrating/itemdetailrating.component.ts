import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemdetailrating',
  template: `
    <p>
      Good Choice!BUY NOW..
     <button><a (click)=buy()></a></button>

    </p>
  `,
  styles: [
  ]
})
export class ItemdetailratingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
buy(){
  
}
}
