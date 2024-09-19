import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss']
})
export class AlertItemComponent {
  @Input() titleType:boolean;
  @Input() alert;
  @Input() key:string[];

  constructor() { }
  
  isArray(value:any){
    return Array.isArray(value);
  }

}
