import { BgService } from './../../../shared/service/background/bg.service';
import { Component, OnInit } from '@angular/core';
import { sun, moon } from 'src/app/shared/const/paths';

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
  public sunImg = sun;
  public moonImg = moon;

  constructor(public bgService: BgService) { }

  ngOnInit(): void {
  }

  public toggleMenu() {
    this.opened = !this.opened;
  }

  public toggleCollapse(): void {
    this.collapse = !this.collapse;
  }

  public expand() {

  }

}
