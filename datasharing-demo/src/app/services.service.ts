import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

// public subject=new Subject<string>();
public subject=new BehaviorSubject<string>("none");


  constructor() { }

  sendData(data:string){
    this.subject.next(data);
  }
  
}

