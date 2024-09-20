import {Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { Endpoints } from '../../../models/SetUp';

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
