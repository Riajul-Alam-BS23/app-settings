import { Component, Input, OnInit } from '@angular/core';

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
  }
  isArray(value:any){
    return Array.isArray(value);
  }
}
