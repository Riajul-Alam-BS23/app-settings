import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
  ],
  exports:[
    FormsModule,    
    LayoutModule,
    CommonModule,
  ]
})
export class SharedModule { }
