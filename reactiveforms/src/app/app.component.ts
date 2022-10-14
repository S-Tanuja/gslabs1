import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { vaccineidValidator } from './shared/vaccineid.validator';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='reactiveForm';

get addLoc(){
    return this.regForm.get('addLoc') as FormArray;
}  

 add(){
  this.addLoc.push(this.fb.control(null));
}
constructor(private fb:FormBuilder){}

  regForm=this.fb.group({
    name:['',[Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]],
    contact:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10)]],
    email:['',Validators.required],
    age:[''],
    vaccinationId:['',Validators.required],
    confirmVaccinationId:['',Validators.required],
    location:['',Validators.required],
    addLoc:this.fb.array([])
  },{validator:vaccineidValidator});

//  regForm=new FormGroup({
//   name:new FormControl('hhh'),
//   contact:new FormControl(''),
//   email:new FormControl('')
// }) 
load(){
  this.regForm.patchValue({
    name:'Tanuja',
    contact:'1234567890'
  });
}

register(){
  const vac = this.regForm.get('vaccinationId')?.value;
  const conf = this.regForm.get('confirmVaccinationId')?.value;
  if(vac !== conf){
    alert("password doest match")
  }
  
  else{
    alert(
      "Register sucessfull"
    )
  }
}

}
