import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  title:{title:string,subTitle:string};
  titleType:boolean=true;
  data;
  general:any;
  others:any;
  low_usage:any;
  reports:any;

  activeTab: string = 'account';

  constructor(
    private  settingsService:SettingsService,
    private router:Router,
    private route:ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      this.activeTab=this.route.snapshot.firstChild?.url[0].path;
    })
  }

  switchTab(tab: string) {
    this.activeTab = tab;
    this.router.navigate([`/settings/${tab}`]);
  }

}






