import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Endpoints } from 'src/app/features/settings/models/SetUp';
import { SettingsService } from 'src/app/features/settings/services/settings.service';

@Component({
  selector: 'app-setup-form',
  templateUrl: './setup-form.component.html',
  styleUrls: ['./setup-form.component.scss']
})
export class SetupFormComponent {
  form:FormGroup;

  dropdownOpen = false;
  menuBtnClick = false;
  emailInput: string = '';

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService,
    private renderer: Renderer2
  ){}
  ngOnInit(){
    this.form = this.fb.group({});
    this.settingsService.getAlertsData(Endpoints[Endpoints.settings]).subscribe(data=>{
      this.form=this.buildForm(data);
      console.log('form',this.form);
    });
  }
  buildForm(settings:any){
    const group = this.fb.group({});
    Object.keys(settings).forEach(key => {
      const section=settings[key];
      if(Array.isArray(section)){
        group.addControl(key, this.fb.control(section, Validators.required));
      }
      else 
      if(typeof section === 'object'){
        group.addControl(key, this.buildForm(section));
      } else{
        group.addControl(key, this.fb.control(section, Validators.required));
      }
    });
    return group;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: any,event:Event) {
    // if(this.selectedOption['value']!=option['value']){
    //   const defaultControl = this.alert.get('default');
    //   if(defaultControl){
    //     defaultControl.setValue(option['value']);
    //     // defaultControl.markAsDirty();
    //   }
    // }
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

  addEmail(subSection) {
    const input=subSection.value['value'].default.trim();
    const emails = subSection.value['value'].emails.includes(input);
    if ( input && !emails) {
      subSection.value['value'].emails.push(input);
      subSection.value.get('default')?.setValue('');
    }
  }

  removeEmail(index: number,emails,form1) {
    emails.splice(index, 1);
    form1.value.markAsDirty();
  }
  isObject(data){
    return typeof data.value['value'] === "object";
  }
  onApplyChange(section:any){
    this.settingsService.updateAlertsData(section);
    section.value.markAsPristine();
  }

}
