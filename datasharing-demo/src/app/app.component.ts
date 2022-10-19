import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datasharing-demo';
  public name:string="";
  public value="";
  public bindvalue="";

  Name:any;
  year:any;
  branch:any;

  parentfunction(data:any){
    this.Name=data.name;
    this.year=data.yearOfPassing;
    this.branch=data.branch;
  }

  name_to_components(value:string){
    this.bindvalue=value;
  }

}
