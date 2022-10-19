import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import{MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


const MaterialComponents=[
MatButtonModule,
MatExpansionModule,
MatFormFieldModule,
MatInputModule,
MatTabsModule,
MatCheckboxModule,
MatRadioModule,
MatTooltipModule,
MatToolbarModule,
MatIconModule
];

@NgModule({

  imports: [MaterialComponents
   ],
   exports:[MaterialComponents]
})
export class MaterialModule { }
