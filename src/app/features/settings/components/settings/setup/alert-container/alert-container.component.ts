import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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

  ngOnInit(){
    // console.log(this.key)
  }

  getKey(item:any){
    const currentKey=[...this.key,item.key];
    return currentKey;
  }

  getTitle(){
    // console.log("sfhsjkf *** ",this.alerts)
    return {label:this.alerts.value['controls'].label.value,subLabel:this.alerts.value['controls'].subLabel.value};
  }

  getBackgroundColor(){
    return {
      'background-color': (this.alerts.value.isHighlighted==="true"? '#ECECED': '')
    };
  }
  isFormControl(control: any): boolean {
    return control instanceof FormControl;
  }
}
