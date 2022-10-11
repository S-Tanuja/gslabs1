import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { elementAt } from 'rxjs';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { ItemdetailovComponent } from './itemdetailov/itemdetailov.component';
import { ItemdetailratingComponent } from './itemdetailrating/itemdetailrating.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  {path:'',redirectTo:'/electronics',pathMatch:'full'},
  {path:'electronics',component:ElectronicsComponent},
  {path:'fashion',component:FashionComponent},
  {path:'fashion/:id',
  component:ItemdetailComponent,
  children:[
    {path:'overview',component:ItemdetailovComponent},
    {path:'rating',component:ItemdetailratingComponent}
  ]
},
  {path:'furniture',component:FurnitureComponent},
  {path:'tdf',component:TdfComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const deals=[ElectronicsComponent,FashionComponent,FurnitureComponent,ItemdetailComponent,PagenotfoundComponent,ItemdetailovComponent,ItemdetailratingComponent]
