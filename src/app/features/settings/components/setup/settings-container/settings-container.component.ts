import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { PostData } from '../../../models/PostData';

@Component({
  selector: 'app-settings-container',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss']
})
export class SettingsContainerComponent implements OnInit {
  @Input() objectType;
  constructor(
    private settingsService:SettingsService
  ) { }

  ngOnInit(): void {
  }
  
  onApplyChange(){
    this.settingsService.updateCombineAlertsData(this.objectType);
  }


}
