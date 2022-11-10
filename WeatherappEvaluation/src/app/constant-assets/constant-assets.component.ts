import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-constant-assets',
  templateUrl: './constant-assets.component.html',
  styleUrls: ['./constant-assets.component.css']
})
export class ConstantAssetsComponent implements OnInit {
  date:any;
  time:any;
  details:any;
  show:boolean=true;
  showMenu:boolean=false;
  searchBar:boolean=false;
  
  constructor(private info:InfoService,public router:Router) { }
  
  ngOnInit(): void {
    this.date=new Date();
   
 }

 menuBar(){
  this.showMenu=true;
 }

 searchPage(){
    this.searchBar=true;
 }
 backToHome(){
  this.router.navigate(['../home'])
}
  
disPlace(data:any){
  this.info.loadData(data).subscribe(value=>{
    console.log(value);
    localStorage.setItem("cityWeather",(JSON.stringify(value)));
    this.details=value;
    this.addDisPlace(this.details);
    window.location.reload();
  })
}

addDisPlace(data:any){
  let cities=[];
  let cityNeeded:any;
  let displace:any;
  if(localStorage.getItem('Cities')){
    displace=localStorage.getItem('Cities');
    cities=JSON.parse(displace);
    cities=[data,...cities];
  }
  else{
    cities=[data];
  }
  localStorage.setItem('Cities',JSON.stringify(cities));
}
  
}
