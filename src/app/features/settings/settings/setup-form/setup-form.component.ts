import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService
  ){}

  ngOnInit(){
    this.form = this.fb.group({});
    this.settingsService.getAlertsData(Endpoints[Endpoints.settings]).subscribe(data=>{
      this.form=this.buildForm(data);
    });
  }

  buildForm(settings:any){
    const group = this.fb.group({});
    Object.keys(settings).forEach(key => {
      const section=settings[key];
      if(Array.isArray(section)){
        group.addControl(key, this.fb.control(section, Validators.required));
      }
      else if(typeof section === 'object'){
        group.addControl(key, this.buildForm(section));
      } else{
        group.addControl(key, this.fb.control(section, Validators.required));
      }
    });
    return group;
  }

  addEmail(subSection) {
    const input=subSection.value['value'].default.trim();
    const emails = subSection.value['value'].emails.includes(input);
    if ( input && !emails) {
      subSection.value['value'].emails.push(input);
      subSection.value.get('default')?.setValue('');
    }
  }

  removeEmail(index: number,emails:any,form1:any) {
    emails.splice(index, 1);
    form1.value.markAsDirty();
  }

  isObject(data:any){
    return typeof data.value['value'] === "object";
  }

  onApplyChange(section:any){
    this.settingsService.updateAlertsData(section);
    section.value.markAsPristine();
  }
  getBackgroundColor(subSection:any){
    return {
      'background-color': (subSection.value['value'].isHighlighted==="true"? '#ECECED': '')
    };
  }
  trackByKey(index: number, item: any): string {
    return item.key;
  }

}
