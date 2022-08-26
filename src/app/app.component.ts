import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as Aos from 'aos';
// import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'mustafaguer_com';

  // public config: PerfectScrollbarConfigInterface = {wheelSpeed: 1.2};
  // @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  // @ViewChild(PerfectScrollbarDirective) directiveRef?: PerfectScrollbarDirective;

  constructor(private translate: TranslateService, public router: Router) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');

  }

  public setToLang(lang: string) {
    this.translate.use(lang);
  }

  public scrollToPos(x: number, y: number): void {
    // this.componentRef?.directiveRef?.scrollTo(x, y, 500);
  }

  ngOnInit(): void {
    Aos.init();
    // Aos.refresh();
  }
}
