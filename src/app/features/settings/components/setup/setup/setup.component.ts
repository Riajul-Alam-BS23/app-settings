import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  title:{title:string,subTitle:string};
  titleType:boolean=true;

  settings:any;

  constructor(private  settingsService:SettingsService) { }

  ngOnInit(): void {
    this.settingsService.getAlertsData('settings').subscribe(data=>{
      this.settings=data.settings;
    });
  }

}
