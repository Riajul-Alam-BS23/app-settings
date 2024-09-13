import { Component, Input, OnInit } from '@angular/core';
import { AlertOptions } from '../../../models/SetUp';

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.scss']
})
export class AlertContainerComponent implements OnInit {
  @Input() backgroundColor:string;
  @Input() alerts;
  constructor() { }

  ngOnInit(): void {
    console.log("Alerts in alert container ==> ",this.alerts)
  }
  createTitle(label:string,subLabel:string){
    const item:{title:string,subTitle:string}={
      title: label,
      subTitle: subLabel
    };
    return item;
  }
  getAlertKeys(alerts: any): string[] {
    return Object.keys(alerts).filter(key => key !== 'label' && key !== 'subLabel');
  }

}
