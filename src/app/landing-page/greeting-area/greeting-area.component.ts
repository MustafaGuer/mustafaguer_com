import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { engHeadline, deHeadline, trHeadline } from 'src/app/shared/const/headlines';
import { MatrixService } from 'src/app/shared/service/matrix/matrix.service';
import { MatrixLetterColors } from 'src/app/shared/enum/matrix-letter-colors';
import { Languages } from 'src/app/shared/enum/languages';
import { greenArrowPath, redArrowPath, blueArrowPath, bluePillPath, greenPillPath, redPillPath } from 'src/app/shared/const/paths';

@Component({
  selector: 'app-greeting-area',
  templateUrl: './greeting-area.component.html',
  styleUrls: ['./greeting-area.component.scss']
})
export class GreetingAreaComponent implements OnInit, AfterViewInit, OnDestroy {

  public matrixLetterColors: any = MatrixLetterColors;
  public languages: any = Languages;
  public activeMatrixLetterColor: string = this.matrixService.activeLetterColor;
  private activeHeadlineLang: string = engHeadline;
  private headlineLetterIndex: number = 0;
  private headlineSpeed: number = 100;
  private headlineTimerId: any;
  public hidden: boolean = false;
  public greenArrow = greenArrowPath;
  public blueArrow = blueArrowPath;
  public redArrow = redArrowPath;
  public greenPill = greenPillPath;
  public bluePill = bluePillPath;
  public redPill = redPillPath;
  public headerTxt: string = '';

  @ViewChild('myCanvas') private myCanvas: ElementRef = {} as ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.matrixService.resizeCtx(this.myCanvas);
  }

  constructor(public translate: TranslateService, public matrixService: MatrixService) { }

  ngOnInit(): void {
    this.loadHeadline();
  }

  ngAfterViewInit(): void {
    this.matrixService.initMatrix(this.myCanvas, this.activeMatrixLetterColor);
  }

  public changeMatrixColor(color: string): void {
    if (color === MatrixLetterColors.BLUE) this.matrixService.changeColor(this.myCanvas, MatrixLetterColors.BLUE);
    else if (color === MatrixLetterColors.RED) this.matrixService.changeColor(this.myCanvas, MatrixLetterColors.RED);
    else if (color === MatrixLetterColors.GREEN) this.matrixService.changeColor(this.myCanvas, MatrixLetterColors.GREEN);
  }

  private async loadHeadline() {
    do {
      this.headerTxt += this.activeHeadlineLang.charAt(this.headlineLetterIndex);
      await this.timer(this.headlineSpeed);
      this.headlineLetterIndex++
    } while (this.headlineLetterIndex < this.activeHeadlineLang.length);
  }

  private timer(ms: number): {} { return new Promise(res => this.headlineTimerId = setTimeout(res, ms)); }

  public changeActiveLang(lang: string) {
    switch (lang) {
      case 'tr':
        this.activeHeadlineLang = trHeadline;
        break;
      case 'de':
        this.activeHeadlineLang = deHeadline;
        break;

      default:
        this.activeHeadlineLang = engHeadline;
        break;
    }

    this.translate.use(lang);

    this.resetHeadlineContainer();
  }

  private resetHeadlineContainer(): void {
    this.headerTxt = '';
    clearTimeout(this.headlineTimerId);
    this.headlineLetterIndex = 0;
    this.loadHeadline();
  }

  ngOnDestroy(): void {
    clearTimeout(this.headlineTimerId);
  }

}
