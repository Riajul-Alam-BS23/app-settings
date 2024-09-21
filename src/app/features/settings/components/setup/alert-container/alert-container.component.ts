import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.scss']
})
export class AlertContainerComponent {
  @Input() backgroundColor:string;
  @Input() alerts:any;
  @Input() key:string[]=[];
  constructor() { }

  isObject(value: any): boolean {return (typeof value === 'object');}

  getKey(item:any){
    const currentKey=[...this.key,item.key];
    return currentKey;
  }

  getTitle(){
    return {label:this.alerts.value.label,subLabel:this.alerts.value.subLabel};
  }

  getBackgroundColor(){
    return {
      'background-color': (this.alerts.value.isHighlighted==="true"? '#ECECED': '')
    };
  }
  
}
