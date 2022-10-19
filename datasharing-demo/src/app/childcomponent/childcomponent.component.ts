import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  @Input() public parentData: string = "";
  @Output() public childEvent = new EventEmitter();
  // @Input() public bindvalue:string="";

  public details ={
    name: "Tanuja",
    yearOfPassing: "2022",
    branch: "CS"
  };
  public name="";
  public yearOfPassing="";
  public branch="";


  
  constructor(private service:ServicesService) { }

  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit(this.details);
  }

  component1Data(){
    this.service.sendData('Component1');
  }

  

}
