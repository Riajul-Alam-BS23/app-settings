import { NgModule } from '@angular/core';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { TitleComponent } from './components/setup/title/title.component';
import { DropdownComponent } from './components/setup/dropdown/dropdown.component';
import { AlertContainerComponent } from './components/setup/alert-container/alert-container.component';
import { SettingsContainerComponent } from './components/setup/settings-container/settings-container.component';
import { SetupComponent } from './components/setup/setup/setup.component';
import { AccountComponent } from './components/account/account/account.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlertItemComponent } from './components/setup/alert-item/alert-item.component';
import { InputComponent } from './components/setup/input/input.component';


@NgModule({
  declarations: [
    SettingsComponent,
    TitleComponent,
    DropdownComponent,
    AlertItemComponent,
    AlertContainerComponent,
    SettingsContainerComponent,
    SetupComponent,
    AccountComponent,
    InputComponent
  ],
  imports: [
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }