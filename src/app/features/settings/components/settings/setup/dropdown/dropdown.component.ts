import {  Component, Input, OnInit, Renderer2 } from '@angular/core';
import { SettingsCommunicationService } from 'src/app/features/settings/services/settings-communication.service';
import { SettingsService } from 'src/app/features/settings/services/settings.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() options: string[];
  @Input() selectedOption:string;
  @Input() key:string[];
  
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

  selectOption(option: string,event:Event) {
    if(this.selectedOption!=option){
      this.selectedOption = option;
      this.settingsCommunicationService.updateApplyChangesState(true);
      this.settingsService.updateKeyValueStore(this.key,option);
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
  
}
