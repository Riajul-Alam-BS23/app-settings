import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { SettingsCommunicationService } from '../../../services/settings-communication.service';
import { Subscription } from 'rxjs';

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
  private subscription: Subscription;
  
  constructor(
    private settingsService:SettingsService,
    private communicationService:SettingsCommunicationService
  ) { }

  ngOnInit(): void {
    this.subscription = this.communicationService.getApplyChangesState().subscribe(data=>{
      this.onChangeDetect=data;
    });
  }
  
  onApplyChange(){
    this.settingsService.updateOnApplyChanges(this.key);
    this.communicationService.updateApplyChangesState(false);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}



