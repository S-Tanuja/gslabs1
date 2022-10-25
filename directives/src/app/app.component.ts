import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  display=true;
  val=true;
 

  // bool=true;
  // admin='Tanuja';

 

  // compare(refUser:string){
  //   console.log(refUser);
    
  //   if(refUser.localeCompare(this.admin))
  //    return true;
  //   else
  //     return false;
  // }

   choices:any=['Angular','React','Vue'];
 


}
