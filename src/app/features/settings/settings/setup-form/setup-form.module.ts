import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SetupFormRoutingModule } from './setup-form-routing.module';
import { SetupFormComponent } from './setup-form.component';



@NgModule({
  declarations: [
    SetupFormComponent
  ],
  imports: [
    SharedModule,
    SetupFormRoutingModule
  ]
})
export class SetupFormModule {  }
