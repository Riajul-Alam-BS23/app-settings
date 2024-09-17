import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  userButtonmenuOpen=false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  toggleUserButtonMenu() {
    this.userButtonmenuOpen =!this.userButtonmenuOpen;
  }

}
