import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormArray } from '@angular/forms';
import { SettingsCommunicationService } from 'src/app/features/settings/services/settings-communication.service';
import { SettingsService } from 'src/app/features/settings/services/settings.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() emails: FormArray;
  emailInput: string = '';
  @Input() key:string[];

  constructor(
    private settingsCommunicationService:SettingsCommunicationService,
    private settingsService:SettingsService
  ){}
  ngOnInit(){
    // console.log("input ",this.key)
  }
  // addEmail(event: KeyboardEvent) {
  //   const input = this.emailInput.trim();
  //   const emailExists = this.emails.includes(input);
  //   if (event.key === 'Enter' && input && !emailExists) {
  //       this.emails.push(input);
  //       this.emailInput = '';
  //       this.settingsCommunicationService.updateApplyChangesState(true);
  //       const currentKey = [...this.key];currentKey.pop();
  //       this.settingsService.updateKeyValueStore(currentKey, [...this.emails]);
  //   }
  // }

  // removeEmail(index: number) {
  //   this.emails.splice(index, 1);
  //   this.settingsCommunicationService.updateApplyChangesState(true);
  //   const currentKey = [...this.key];currentKey.pop();
  //   this.settingsService.updateKeyValueStore(currentKey, [...this.emails]);
  // }

}
