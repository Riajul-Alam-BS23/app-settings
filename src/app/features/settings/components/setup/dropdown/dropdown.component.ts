import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() options: string[];
  @Input() selectedOption;
  @Input() alertObject;

  dropdownOpen = false;
  menuBtnClick = false;
  
  constructor(
    private renderer: Renderer2
  ) {}
  
  ngOnInit(): void {
    this.renderer.listen('window', 'click', () => {
      if (!this.menuBtnClick) {
        this.dropdownOpen = false;
      }
      this.menuBtnClick = false;
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  selectOption(option: string,event:Event) {
    this.selectedOption = option;
    this.alertObject.default=option;
    this.closeDropdown(event);
  }
  closeDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = false;
  }

  preventCloseOnClick(){
    this.menuBtnClick = true;
  }
}
