import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  var1: any;
  var2: any;
  var3: any;

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {

    this.httpservice.getinfo().subscribe(data => this.var1 = data)
    
    // //  post in console
    // this.httpservice.addUser();

    // // post in html
    // this.httpservice.addUser().subscribe(data => {
    //   this.var2 = data;
    //   console.log(data);

    // })

    // // put method
    // this.httpservice.editUser().subscribe(data => {
    //   this.var3 = data;
    //   console.log(data);
    // })

    // this.httpservice.deleteUser().subscribe(data => {
    //   console.log("Deleted data" + data);

    // })



  }

  addUserdetails(value1:string,value2:string){
    this.httpservice.getinfo().subscribe(data=>this.var1=data)

    this.httpservice.addUserdetails(value1,value2).subscribe(data=>console.log(data));
  }


  // editUserdetails()
}

