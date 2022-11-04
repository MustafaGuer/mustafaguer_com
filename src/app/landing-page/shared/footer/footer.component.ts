import { MatrixService } from 'src/app/shared/service/matrix/matrix.service';
import { Languages } from 'src/app/shared/enum/languages';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public selectOpen: boolean = false;
  public year: Date = new Date();
  public languages = Languages;

  constructor(public translate: TranslateService, public matrixService: MatrixService) { }

  ngOnInit(): void {
  }

  public setToLang(lang: string) {
    this.translate.use(lang);
  }

  public foo() {

  }
}
