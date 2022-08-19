import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { engHeadline, engSubHeadline } from '../shared/const/headlines';

@Component({
  selector: 'app-greeting-area',
  templateUrl: './greeting-area.component.html',
  styleUrls: ['./greeting-area.component.scss']
})
export class GreetingAreaComponent implements OnInit {

  private letterIndex: number = 0;
  private speed: number = 100;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.load();
  }

  private async load() {
    do {
      document.getElementById('headline')!.innerHTML += `${engHeadline.charAt(this.letterIndex)}`;
      await this.timer(this.speed);
      this.letterIndex++
    } while (this.letterIndex < engHeadline.length);
    this.showSubHeadline();
  }

  private timer(ms: number) { return new Promise(res => setTimeout(res, ms)); }

  private showSubHeadline(): void {
    for (let i = 0; i < engSubHeadline.length; i++) {
      setTimeout(() => {
        document.getElementById('subHeadline')!.innerHTML += `<b>${engSubHeadline[i]}</b>`;
      }, i * this.speed);
    }
  }

}
