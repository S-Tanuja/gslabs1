import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
 refname:string='';
 refdate!: Date | null;
  fun1(name:string){
    this.refname= name;
  }

  fun2(date:Date | null){
    this.refdate=date;
  }
}
