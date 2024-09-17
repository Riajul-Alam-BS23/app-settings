import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { SettingsCommunicationService } from '../../../services/settings-communication.service';

@Component({
  selector: 'app-settings-container',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss'],
  providers:[
    SettingsCommunicationService
  ]
})
export class SettingsContainerComponent implements OnInit {
  @Input() key:any;
  onChangeDetect=false;
  constructor(
    private settingsService:SettingsService,
    private communicationService:SettingsCommunicationService
  ) { }

  ngOnInit(): void {
    this.communicationService.getShowApplyChanges().subscribe(data=>{
      this.onChangeDetect=data;
    });
    console.log("app setting key =>",this.key)
  }
  
  onApplyChange(){
    console.log("Applying change for key: ", this.key);
    this.settingsService.updateOnApplyChanges(this.key);
    this.communicationService.updateApplyChanges(false);
  }
}



