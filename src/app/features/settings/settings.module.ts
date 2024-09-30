import { NgModule } from '@angular/core';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountComponent } from './components/settings/account/account.component';
import { SetupFormComponent } from './components/settings/setup/setup-form/setup-form.component';


@NgModule({
  declarations: [
    SettingsComponent,
    AccountComponent,
    SetupFormComponent
  ],
  imports: [
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }