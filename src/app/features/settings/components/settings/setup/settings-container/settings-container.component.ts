import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingsCommunicationService } from 'src/app/features/settings/services/settings-communication.service';
import { SettingsService } from 'src/app/features/settings/services/settings.service';

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
    // console.log("hahahaha ",this.key)
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



