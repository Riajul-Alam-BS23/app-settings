import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  title:{title:string,subTitle:string};
  titleType:boolean=true;

  visited:boolean=false;

  settings:any;

  constructor(private settingsService:SettingsService,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.settingsService.getAlertsData('settings').subscribe(data=>{
      this.settings=data;
      this.settingsService.settings=data;
      this.cdr.detectChanges();
    });
  }

  isObject(value: any): boolean {
    return typeof value === 'object';
  }

  hasNestedStructure(value: any): boolean {
    return value.value.label?false:true;
  }

  getSubObjectKey(value:any){
    const currentKey=['settings'];
    currentKey.push(value.key);
    return [...currentKey];
  }

  getSingleObjectKey(value:any){
    const currentKey=['settings'];
    return [...currentKey];
  }

}
