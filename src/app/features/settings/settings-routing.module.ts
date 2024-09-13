import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountComponent } from './components/account/account/account.component';
import { SetupComponent } from './components/setup/setup/setup.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    children:[
      {
        path:'account',
        component:AccountComponent
      },
      {
        path: 'setup',
        component:SetupComponent
      }
    ]
  },
  { path: '', redirectTo: '/settings/account', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
