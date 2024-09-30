import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountComponent } from './components/settings/account/account.component';
import { SetupComponent } from './components/settings/setup/setup/setup.component';
import { TestingComponent } from './components/settings/setup/testing/testing.component';
import { SetupFormComponent } from './components/settings/setup/setup-form/setup-form.component';

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
      },
      {
        path:'testing',
        component:TestingComponent
      },
      {
        path:'setup-form',
        component:SetupFormComponent
      }
    ]
  },
  { path: '', redirectTo: '/settings/setup-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
