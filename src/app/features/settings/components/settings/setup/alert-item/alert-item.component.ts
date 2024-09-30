import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss']
})
export class AlertItemComponent {
  @Input() titleType:boolean;
  @Input() alert:any;
  @Input() key:string[];

  ngOnInit(){
  }

  isArray(value:any){return Array.isArray(value);}

  getTitle() {
    if (this.alert instanceof FormGroup) {
      const label = this.alert?.get('label')?.value;
      const subLabel = this.alert.get('subLabel')?.value;
      if (label && subLabel) {return { label: label, subLabel: subLabel };}
    }
    return { label: '', subLabel: '' };
  }

  isFormArray(control: any): boolean {
    // if(control instanceof FormArray)console.log("------",control)
    return control instanceof FormArray;
  }

  isFormGroup(control:any){
    return control instanceof FormGroup;
  }
  getControl(data:any){
    return data.get('option');
  }
  getDefault(data:any){
    return data.get('default');
  }
  
}
