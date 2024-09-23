import {Component, OnInit } from '@angular/core';
import { Endpoints } from 'src/app/features/settings/models/SetUp';
import { SettingsService } from 'src/app/features/settings/services/settings.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  settings:any;

  constructor(
    private settingsService:SettingsService
  ){}

  ngOnInit(): void {
    this.settingsService.getAlertsData(Endpoints[Endpoints.settings]).subscribe(data=>{
        this.settings = data;
        this.settingsService.settings = JSON.parse(JSON.stringify(data));
    });
  }

  getSubObjectKey(value:any,value2:any){
    const currentKey=[value.key,value2.key];
    return [...currentKey];
  }

}
