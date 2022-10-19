import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-childcomponent2',
  templateUrl: './childcomponent2.component.html',
  styleUrls: ['./childcomponent2.component.css']
})


export class Childcomponent2Component implements OnInit {
  @Input() public parentData: string = "";
  
  datareceived: string = "";

  constructor(private  service: ServicesService) { }

  ngOnInit(): void {
    this.service.subject.subscribe(data => this.datareceived = data);
  }

}
