import { Component, OnInit } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RecentDialogComponent } from '../recent-dialog/recent-dialog.component';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {

  date:any;
  time:any;
  recentCity:any;
  constructor(public dialog:MatDialog,public router:Router ) { }

  ngOnInit(): void {
    this.date=new Date();
    this.recentCity=localStorage.getItem('Cities');
    this.recentCity=JSON.parse(this.recentCity);
    console.log(this.recentCity);
   
  }
  recentDialog(){
    this.dialog.open(RecentDialogComponent,{height:'35%',width:'70%'});
  }
  backToHome(){
    this.router.navigate(['/favourite'])
  }
}
