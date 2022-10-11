import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-itemdetail',
  template: `
    <p>
      You selected fashion with id={{item.id}};
      <button><a (click)=previous()>Previous</a></button>
      <button><a (click)=next()></a>Next</button>
      <button><a (click)=back()></a>Back</button>
      <button><a (click)=overView()></a>Produt Overview</button>
      <button><a (click)=rating()></a>Produt rating</button>
    </p>
  `,
  styles: [
  ]
})
export class ItemdetailComponent implements OnInit {
  public itemId:any;
  constructor(private route:ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void {
    // let id=this.route.snapshot.paramMap.get('id');
    this.itemId='id';
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=(params.get('id'));
    });
    
  }
  previous(){
    let prevId=this.itemId-1;
    this.router.navigate(['/fashion',prevId]);
  }

  next(){
    let nextId=this.itemId+1;
    this.router.navigate(['/fashion',nextId]);
  }
 back() {
  let selectedId=this.itemId;
  this.router.navigate(['fashion',{id:selectedId}]);
 }
 overView(){
  this.router.navigate(['ov',{relativeTo:this.route}])
 }
 rating(){
  this.router.navigate(['rating',{relativeTo:this.route}])
 }
}
