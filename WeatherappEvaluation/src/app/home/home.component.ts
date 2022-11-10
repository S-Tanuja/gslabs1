import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
date:any;
time:any;

  temperature:any;
  color='no-color';
  text='Add to favorite';
  border='favorite_border';
  cityWeather:any;
  weatherIcon:any;
  count:any=0;
  count1:any=0;
  celsius:boolean=true;
  farhan!:boolean;
  cityDetails:any;
  select:any
  ngOnInit(): void {

    this.cityDetails=localStorage.getItem('currentCity');
    this.cityDetails=JSON.parse(this.cityDetails);
    this.select=localStorage.getItem('FavCities')
    this.select=JSON.parse(this.select);
    for(let data of this.select){
      if(data['name']==this.cityDetails.name){
        this.text='Added to favorite';
        this.color='color';
        this.border='favorite';
      }
      else{
        this.cityDetails=localStorage.getItem('currentCity');
        this.cityDetails=JSON.parse(this.cityDetails)
      }
    }
    this.date=new Date();

    this.cityWeather=localStorage.getItem("cityWeather");
    this.cityWeather=JSON.parse(this.cityWeather);
    console.log(this.cityWeather);
  }
 fav(){
  this.color=='no-color'?this.color='color':this.color='no-color';
  this.text=='Add to favourite'?this.text='Add to favourite':this.text='Added to favourite';
  this.border=='favorite_border'?this.border='favorite':this.border='favorite_border';
 }

 degFar(){
  this.farhan = true;
  this.celsius = false;
 }
degCel(){
  this.farhan = false;
  this.celsius = true;
} 
}

  

