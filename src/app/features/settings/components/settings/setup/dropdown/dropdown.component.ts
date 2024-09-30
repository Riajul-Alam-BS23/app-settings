import {  Component, Input, OnInit, Renderer2 } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SettingsCommunicationService } from 'src/app/features/settings/services/settings-communication.service';
import { SettingsService } from 'src/app/features/settings/services/settings.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() options: FormArray|FormControl|FormGroup;
  @Input() selectedOption:FormArray|FormControl|FormGroup;
  @Input() key:any;
  @Input() alert:FormArray|FormControl|FormGroup;
  
  dropdownOpen = false;
  menuBtnClick = false;
  
  constructor(
    private renderer: Renderer2,
    private settingsService:SettingsService,
    private settingsCommunicationService: SettingsCommunicationService
  ) {}
  
  ngOnInit(): void {
    this.renderer.listen('window', 'click', () => {
      if (!this.menuBtnClick) {
        this.dropdownOpen = false;
      }
      this.menuBtnClick = false;
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: any,event:Event) {
    if(this.selectedOption['value']!=option['value']){
      const defaultControl = this.alert.get('default');
      if(defaultControl){
        defaultControl.setValue(option['value']);
        // defaultControl.markAsDirty();
      }
      this.settingsCommunicationService.updateApplyChangesState(true);
      // this.settingsService.updateKeyValueStore(this.key,option['value']);
      console.log("two option selectedOption ",this.options, " ",this.selectedOption)
    }
    this.closeDropdown(event);
  }

  closeDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = false;
  }

  preventCloseOnClick(){
    this.menuBtnClick = true;
  }

  isDropdownOpen() {
    return { 'active': this.dropdownOpen === true };
  }
  // showMe(item:any){
  //   console.log("item ==> ",item)
  // }
  
}
