import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.scss']
})
export class AlertContainerComponent implements OnInit {
  @Input() backgroundColor:string;
  @Input() alerts;
  @Input() key:string[];
  constructor() { }

  ngOnInit(): void {
    this.key.push(this.alerts.key);
    if(this.alerts.value.label){
    }
    // console.log("********** ==> ",this.key)
  }
  isObject(value: any): boolean {
    return (typeof value === 'object');
  }
  isHighlighted(){
    return this.alerts.value.isHighlighted==="true"?true:false;
  }
  getKey(item:any){
    const currentKey=[...this.key];
    currentKey.push(item.key);
    return currentKey;
  }
  
}
