import { NgModule } from '@angular/core';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlertContainerComponent } from './components/settings/setup/alert-container/alert-container.component';
import { AlertItemComponent } from './components/settings/setup/alert-item/alert-item.component';
import { TitleComponent } from './components/settings/setup/title/title.component';
import { DropdownComponent } from './components/settings/setup/dropdown/dropdown.component';
import { SettingsContainerComponent } from './components/settings/setup/settings-container/settings-container.component';
import { SetupComponent } from './components/settings/setup/setup/setup.component';
import { AccountComponent } from './components/settings/account/account.component';
import { InputComponent } from './components/settings/setup/input/input.component';
import { TestingComponent } from './components/settings/setup/testing/testing.component';


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
    InputComponent,
    TestingComponent
  ],
  imports: [
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }