import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petbreed',
  template: `
    
    <h2>Most Popular Dog Breeds of 2021</h2>

    golden retriever.<br>
    labrador retriever.<br>
    french bulldog.<br>
    beagle.<br>
    german shepherd dog.<br>
    poodle.<br>
    bulldog.<br>
    most popular breeds.<br>
    
  `,
  styles: [
  ]
})
export class PetbreedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
