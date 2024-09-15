import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  activeTab: string = 'account';

  constructor(
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
  }
  activeCheck(tab: string) {
    return { 'active': this.activeTab === tab };
  }

}






