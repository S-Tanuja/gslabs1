import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  template: `
  <form class=main action="">
  <h2 id="align">Check-out Page</h2>
  <div class="forminfo">
    <label for="name">Name</label><br>
    <input class=forminfo type="text" name="name"><br>
  </div>

  <div class="forminfo">
  <label class=forminfo for="gender">Gender</label><br>
  <input type="radio" name="gender" value="Male">Male
  <input type="radio" name="gender" value="Female">Female
  <input type="radio" name="gender" value="Others">Others
  </div>

  <div class="forminfo">
    <label for="email">Email</label><br>
    <input class=forminfo type="email" name="email"><br>
 </div>

  <div class="forminfo">
    <label for="number">Contact number</label><br>
    <input class=forminfo type="text"><br>
  </div>

  <div class="forminfo">
    <label for="date">Expected delivery date</label><br>
    <input class=forminfo type="date" name="date"><br>
  </div>
  <div class="forminfo" >
    <label for="payment">Payment<br>
      <select name="payment">
        <option *ngFor="let choice of choices">{{choice}}</option>
      </select><br>
    </label><br>
    <div class="forminfo">
      <label for="address">Address</label><br>
      <input class=forminfo type="message" name="message"><br>
    </div>
  </div>

  <footer text-align="center"><input class=form-info type="checkbox">I agree for terms and conditions</footer>
 
 

</form>
<button id=submit type="submit">Submit</button>


  `,
  styles: [`
  forminfo{
    padding: 8px;
    box-sizing: border-box;
    border-radius: 2px;
    margin-top: 2px;
}


.main{
    border:2px solid black;
    border-radius: 10px;
    background-color: rgb(133, 164, 189);
    margin:30px  auto;
    margin-top: 100px;
    padding: 20px;
    width:55%;
    text-decoration-color:white;
    /* display:block; */

}
#align{
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-style: normal;
   
}
#submit{
    background-color: rgb(48, 68, 94);
    font: 20px bold;
    width: 60%;
    margin-left: 20%;
    padding: 10px;
   
}
#submit:hover{

    background-color: rgb(75, 75, 145);
}
  `]
})
export class TdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
