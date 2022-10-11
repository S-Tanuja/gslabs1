import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute ,ParamMap} from '@angular/router';

@Component({
  selector: 'app-petlover',
  template: `
  <div class=main>
   <h1 id=align>Wohoo!!Are you a pet lover?</h1>
   <h3>Which is your favourite pet?</h3>
   <ul class="hoverstyle">
    <li (click)="onSelect(pet)" [class.selected]="isSelected(pet)" *ngFor="let pet of pets">
      <button>{{pet.animal}}</button>
    </li>
  </ul>
  </div>
  `,
  styles: [`

  .main{
    border:2px black solid;
    padding: 10px;
    margin-top: 20px;
    text-align: center;
    background-image: url('../../assets/animals.jpeg');
    z-index: 1;
    background-repeat: no-repeat;
  
}

  `]
})
export class PetloverComponent implements OnInit {
  public selectedId:any;
pets=[
  {"animal":"dog","name":"Scooby"},
  {"animal":"cat","name":"Suzie"},
  {"animal":"bird","name":"Pickoo"}
]
  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void { 
     this.route.paramMap.subscribe((params:ParamMap)=>{
    let id=params.get('animal');
    this.selectedId=id;
  });
  

  }
onSelect(pet:any){
  this.router.navigate(['/pets',pet.animal])

}
isSelected(petlover:any){
  return petlover.animal===this.selectedId;
}
}
