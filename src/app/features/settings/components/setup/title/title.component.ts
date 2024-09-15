import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title:any;
  @Input() titleType:boolean=false;
  constructor() { }

  ngOnInit(): void {
    // console.log("Title Component initialized",this.title)
  }

}
