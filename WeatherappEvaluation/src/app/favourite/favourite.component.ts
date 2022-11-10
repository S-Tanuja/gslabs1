import { Component, OnInit } from '@angular/core';
import { FavDialogComponent } from '../fav-dialog/fav-dialog.component';
import{MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
 favCity:any;
 display:boolean=false;
 fav:any;
 cur:any;
 fCity:any;
  
  constructor(public dialog:MatDialog,public router:Router) { }

  ngOnInit(): void {
    this.favCity=localStorage.getItem('FavCities');
    this.favCity=JSON.parse(this.favCity);
    if(localStorage.getItem('FavCities')){
      this.display=false;
    }
    else{
      this.display=true;
    }

  }
  favDialog(){
    this.dialog.open(FavDialogComponent,{height:'35%',width:'60%'});
  }
  backToHome(){
    this.router.navigate(['/home'])
  }
  removeFav(data:any){
    this.fav=localStorage.getItem('FavCities');
    this.fav=JSON.parse(this.fav);
    for(let f of this.fav){
      if(f['name']==data){
        this.cur=f;
        this.fav.splice(this.fav.indexOf(this.cur,1));
        this.fCity=this.fav;
        localStorage.setItem('FavCities',JSON.stringify(this.fCity))
      }
    }

  }
 

}
