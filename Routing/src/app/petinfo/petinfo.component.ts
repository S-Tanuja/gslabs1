import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-petinfo',
  template: `

     
      <h3> Your favourite pet animal is  {{animal}} ! </h3>
      <p>
          <button (click)=showView()>Overview</button>
          <button (click)=breed()>Breed</button>
      </p>
      
      
      <router-outlet></router-outlet>
    <p>
      <button> <a (click)="previous()">Previous Page</a></button>
      <button><a (click)="next()">Next Page</a></button><br><br>
      <button><a (click)="goBack()">Back</a></button>
    </p>
  
  `,
  styles: [
  ]
})
export class PetinfoComponent implements OnInit {
  public animal:any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=(params.get('animal'));
      this.animal=id;});
    
  }

  previous(){
    let previousPage=this.animal-1;
    this.router.navigate(['/petlover',previousPage])
  }
  next(){
    let nextPage=this.animal+1;
    this.router.navigate(['/petlover',nextPage])
 }
 goBack(){
  let selectedId=this.animal;
  this.router.navigate(['/petlover',{animal:selectedId}])
 }
 showView(){
  this.router.navigate(['overview'],{relativeTo:this.route})
 }
 breed(){
  this.router.navigate(['breed'],{relativeTo:this.route})
 }

}
