import { Component, Input, OnInit } from '@angular/core';
import { SingleAlert } from '../../../models/SetUp';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss']
})
export class AlertItemComponent implements OnInit {
  @Input() titleType:boolean;
  @Input() alert;
  constructor() { }

  ngOnInit(): void {
  }
  createTitle(title:string,subTitle){
    const currenTitle:{
      title:string,
      subTitle:string
    }={
      title:title,
      subTitle:subTitle
    };
    return currenTitle;
  }

}
