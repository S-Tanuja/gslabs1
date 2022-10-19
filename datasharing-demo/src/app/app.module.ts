import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { ServicesService } from './services.service';
import { Childcomponent2Component } from './childcomponent2/childcomponent2.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ChildcomponentComponent,
    Childcomponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
