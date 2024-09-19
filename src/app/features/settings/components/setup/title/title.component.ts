import { Component, Input, OnInit } from '@angular/core';
import { Title } from '../../../models/SetUp';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() title:Title;
  @Input() titleType:boolean=false;

  getTitleType(){
    return this.titleType==true?'h2title':'h2item';
  }
}
