import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Endpoints } from 'src/app/features/settings/models/SetUp';
import { SettingsService } from 'src/app/features/settings/services/settings.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  form: FormGroup;
  isDetect:boolean=false;
  constructor(private fb: FormBuilder, private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
  
    this.settingsService.getAlertsData(Endpoints[Endpoints.settings]).subscribe(data => {
      this.settingsService.settings = JSON.parse(JSON.stringify(data));
      this.form=this.buildForm(data);
      console.log(this.form);
    });
  }
  showMe(item:any){
    console.log(item);
   
  }

  buildForm(settings:any){
    const group = this.fb.group({});
    Object.keys(settings).forEach(key => {
      const section=settings[key];
      if(Array.isArray(section)){
        group.addControl(key, this.fb.array(section.map(email => this.fb.control(email))));
      }
      else if(typeof section === 'object'){
        group.addControl(key, this.buildForm(section));
      } else{
        group.addControl(key, this.fb.control(section, Validators.required));
      }
    });
    return group;
  }

  getSubObjectKey(section:any,item:any){
    const currentKey=[section.key,item.key];
    return [...currentKey];
  }

  onApplyChange(sectionKey:any){
    // this.settingsService.updateOnApplyChanges(sectionKey);
  }

}
