import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss']
})
export class AlertItemComponent {
  @Input() titleType:boolean;
  @Input() alert:any;
  @Input() key:string[];
  
  isArray(value:any){return Array.isArray(value);}

}
