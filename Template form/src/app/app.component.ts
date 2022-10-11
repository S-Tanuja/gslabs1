import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdfdemo';
  choices=['DigitalWallet','UPI','CreditCard','DebitCard'];
  userModel=new User('Tanuja','tanuja.s@robosoftin.com',1234567890,'21/10/22','','abc xyz',true);
  onSubmit(){
    alert("Submitted successfully");
  }
}
