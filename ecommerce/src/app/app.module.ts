import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, deals } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLinkActive } from '@angular/router';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { ItemdetailovComponent } from './itemdetailov/itemdetailov.component';
import { ItemdetailratingComponent } from './itemdetailrating/itemdetailrating.component';
import { TdfComponent } from './tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    deals,
    ItemdetailovComponent,
    ItemdetailratingComponent,
    TdfComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
