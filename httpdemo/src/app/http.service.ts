import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private httpclient: HttpClient) { }

  //get method
  getinfo() {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/users');
  }
  //method post 
  addUserdetails(value1:string,value2:string) {
    const addedUser = {
      name: value1,
      email: value2,
    }
    return this.httpclient.post('https://jsonplaceholder.typicode.com/users', addedUser)
  }
  
  // //put method
  // editUser() {
  //   const editedUser = {
  //     name: "Tanuja",
  //     email: "tanujas@gmail.com",
  //   }
  //   return this.httpclient.put("https://jsonplaceholder.typicode.com/users/1", editedUser)
  //     // .subscribe(data => {
  //     //   console.log(data);
  //     // })
  // }

  // //delete method
  // deleteUser(){
  //   return this.httpclient.delete("https://jsonplaceholder.typicode.com/users/2")
  // }
  
}


