import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { engHeadline, engSubHeadline, deHeadline, deSubHeadline, trHeadline, trSubHeadline } from '../../shared/const/headlines';
import { MatrixService } from 'src/app/shared/service/matrix/matrix.service';
import { MatrixLetterColors } from 'src/app/shared/enum/matrix-letter-colors';

@Component({
  selector: 'app-greeting-area',
  templateUrl: './greeting-area.component.html',
  styleUrls: ['./greeting-area.component.scss']
})
export class GreetingAreaComponent implements OnInit, AfterViewInit {
  private letterIndex: number = 0;
  private speed: number = 100;
  private letterColor: string = MatrixLetterColors.GREEN;

  @ViewChild('myCanvas') private myCanvas: ElementRef = {} as ElementRef;

  constructor(public translate: TranslateService, private matrixService: MatrixService) { }

  ngOnInit(): void {

    this.load();
  }

  ngAfterViewInit(): void {
    this.matrixService.initMatrix(this.myCanvas, this.letterColor);
  }

  public changeLetterColor(color: string): void {

    if(color === MatrixLetterColors.BOOTSTRAP) this.matrixService.changeColor(this.myCanvas, MatrixLetterColors.BOOTSTRAP);
    else if(color === MatrixLetterColors.RED) this.matrixService.changeColor(this.myCanvas, MatrixLetterColors.RED);
    else if(color === MatrixLetterColors.GREEN) this.matrixService.changeColor(this.myCanvas, MatrixLetterColors.GREEN);
  }

  private async load() {
    do {
      document.getElementById('headline')!.innerHTML += `${engHeadline.charAt(this.letterIndex)}`;
      await this.timer(this.speed);
      this.letterIndex++
    } while (this.letterIndex < engHeadline.length);
    this.showSubHeadline();
  }

  private timer(ms: number): {} { return new Promise(res => setTimeout(res, ms)); }

  private showSubHeadline(): void {
    for (let i = 0; i < engSubHeadline.length; i++) {
      setTimeout(() => {
        document.getElementById('subHeadline')!.innerHTML += `<b>${engSubHeadline[i]}</b>`;
      }, i * this.speed);
    }
  }

}
