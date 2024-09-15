import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    HttpClientModule,
  ],
  exports:[
    FormsModule,    
    LayoutModule,
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
