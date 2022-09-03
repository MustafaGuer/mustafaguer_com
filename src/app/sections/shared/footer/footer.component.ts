import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public selectOpen: boolean = false;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  public setLangToGer() {
    this.translate.use('de');
  }

  public setLangToEng() {
    this.translate.use('en');
  }

}
