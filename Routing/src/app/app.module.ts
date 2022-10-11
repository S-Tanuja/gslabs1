import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, lover } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetloverovComponent } from './petloverov/petloverov.component';
import { PetbreedComponent } from './petbreed/petbreed.component';

@NgModule({
  declarations: [
    AppComponent,
    lover,
    PetloverovComponent,
    PetbreedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
