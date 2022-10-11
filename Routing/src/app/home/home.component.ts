import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
      <h2 class=heading>Redirected to home page!<br>
        <button><a routerLink="/petlover" routerLinkActive="active">Petlover</a></button><br>
        <button><a routerLink="/naturelover" routerLinkActive="active">NatureLover</a></button>
      </h2>
      
  `,
  styles: [`
   
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
