import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  userButtonmenuOpen=false;
  menuBtnClick = false;
  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'click', () => {
      if (!this.menuBtnClick) {
        this.userButtonmenuOpen = false;
      }
      this.menuBtnClick = false;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  toggleUserButtonMenu() {
    this.userButtonmenuOpen =!this.userButtonmenuOpen;
  }
  preventCloseOnClick(){
    this.menuBtnClick=true;
  }

}
