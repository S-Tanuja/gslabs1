import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import{para}


@Component({
  selector: 'app-fashion',
  template: `
    
      fashion works!
      <ul  *ngFor="let item of items" style="list-style:none">
      <li (click)=onSelect(fashion)><span>{{item.id}}</span><button class=buttonstyle>{{item.name}}</button></li>
     
      </ul>
  
  `,
  styles: [`
  .buttonstyle{
    padding:5px;
    margin-top:2px;
    background-color:aqua;
  }
  buttonstyle:hover{
    opacity:95%;
  }`
  ]
})
export class FashionComponent implements OnInit {
  items=[
    {"id":1,"name":"Clothing"},
    {"id":2,"name":"Beauty"},
    {"id":3,"name":"Footwear"},

  ]
  

  constructor(private router:Router,private route:Router) { }
  public selectedId:any;
  ngOnInit(): void {
    this.selectedId='id';
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=(params.get('id'));
    });
  }
  onSelect(){
    this.router.navigate(['/fashion',item.id]);
  }

}
