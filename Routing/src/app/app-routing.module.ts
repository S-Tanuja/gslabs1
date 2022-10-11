import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NatureloverComponent } from './naturelover/naturelover.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PetbreedComponent } from './petbreed/petbreed.component';
import { PetinfoComponent } from './petinfo/petinfo.component';
import { PetloverComponent } from './petlover/petlover.component';
import { PetloverovComponent } from './petloverov/petloverov.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'petlover',component:PetloverComponent},
  {path:'pets/:animal',
  component:PetinfoComponent,
  children:[
    {path:'overview',component:PetloverovComponent},
    {path:'breed',component:PetbreedComponent}
  ]

},
  {path:'naturelover',component:NatureloverComponent},
  {path:"home",component:HomeComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const lover=[PetloverComponent,NatureloverComponent,PetinfoComponent,HomeComponent,PetloverovComponent,PetbreedComponent]
