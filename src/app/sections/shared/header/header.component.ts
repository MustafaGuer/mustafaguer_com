import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public opened: boolean = false;
  public collapse: boolean = false;
  public expanded: boolean = false;
  public isMenuCollapsed: boolean = true;
  public selectOpen: boolean = false;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  public toggleMenu() {
    this.opened = !this.opened;
  }

  public setLangToGer() {
    this.translate.use('de');
  }

  public setLangToEng() {
    this.translate.use('en');
  }

  public toggleCollapse(): void {
    this.collapse = !this.collapse;
  }

  public expand() {

  }

}
