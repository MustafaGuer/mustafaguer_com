import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { engHeadline, engSubHeadline, deHeadline, deSubHeadline, trHeadline, trSubHeadline } from 'src/app/shared/const/headlines';
import { MatrixService } from 'src/app/shared/service/matrix/matrix.service';
import { MatrixLetterColors } from 'src/app/shared/enum/matrix-letter-colors';


@Component({
  selector: 'app-greeting-area',
  templateUrl: './greeting-area.component.html',
  styleUrls: ['./greeting-area.component.scss']
})
export class GreetingAreaComponent implements OnInit, AfterViewInit {

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.matrixService.resizedCtx(this.myCanvas);
  }

  public MatrixLetterColors: any;
  private activeHeadlineLang: string = engHeadline;
  private activeSubHeadLang: string = engSubHeadline;
  private letterIndex: number = 0;
  private speed: number = 100;
  private letterColor: string = MatrixLetterColors.GREEN;
  private showId: any;
  private timerId: any;
  private headlineDone: boolean = false;

  @ViewChild('myCanvas') private myCanvas: ElementRef = {} as ElementRef;

  constructor(public translate: TranslateService, private matrixService: MatrixService) { }

  ngOnInit(): void {

    this.load();
  }

  ngAfterViewInit(): void {
    this.matrixService.initMatrix(this.myCanvas, this.letterColor);
  }

  public changeLetterColor(color: string): void {

    if (color === MatrixLetterColors.BOOTSTRAP) this.matrixService.changeColor(this.myCanvas, MatrixLetterColors.BOOTSTRAP);
    else if (color === MatrixLetterColors.RED) this.matrixService.changeColor(this.myCanvas, MatrixLetterColors.RED);
    else if (color === MatrixLetterColors.GREEN) this.matrixService.changeColor(this.myCanvas, MatrixLetterColors.GREEN);
  }

  private async load() {
    do {
      document.getElementById('headline')!.innerHTML += `${this.activeHeadlineLang.charAt(this.letterIndex)}`;
      await this.timer(this.speed);
      this.letterIndex++
    } while (this.letterIndex < this.activeHeadlineLang.length);
    this.showSubHeadline();
  }

  private timer(ms: number): {} { return new Promise(res => this.timerId = setTimeout(res, ms)); }

  private showSubHeadline(): void {
    for (let i = 0; i < this.activeSubHeadLang.length; i++) {
      this.showId = setTimeout(() => {
         document.getElementById('subHeadline')!.innerHTML += `<b>${this.activeSubHeadLang[i]}</b>`;
       }, i * this.speed);
     }
  }

  public changeLang(lang: string) {
    switch (lang) {
      case 'tr':
        this.activeHeadlineLang = trHeadline;
        this.activeSubHeadLang = trSubHeadline;
        break;
      case 'de':
        this.activeHeadlineLang = deHeadline;
        this.activeSubHeadLang = deSubHeadline;
        break;

      default:
        this.activeHeadlineLang = engHeadline;
        this.activeSubHeadLang = engSubHeadline;
        break;
    }

    this.translate.use(lang);
    document.getElementById('headline')!.innerHTML = '';
    document.getElementById('subHeadline')!.innerHTML = '';
    clearTimeout(this.showId);
    clearTimeout(this.timerId);
    this.letterIndex = 0;
    this.load();
  }

}
