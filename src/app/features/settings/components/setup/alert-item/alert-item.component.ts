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
  @Input() key;
  constructor() { }
  ngOnInit(): void {
    // console.log("Alert Item ",this.key)
  }
}
