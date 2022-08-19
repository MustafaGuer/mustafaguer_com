import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { headline, subHeadline } from '../shared/const/headlines';

@Component({
  selector: 'app-greeting-area',
  templateUrl: './greeting-area.component.html',
  styleUrls: ['./greeting-area.component.scss']
})
export class GreetingAreaComponent implements OnInit {

  private letterIndex: number = 0;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.load();
  }

  private showSubHeadline(): void {
    for (let i = 0; i < subHeadline.length; i++) {
      setTimeout(() => {
        document.getElementById('subHeadline')!.innerHTML += `<b>${subHeadline[i]}</b>`;
      }, i * 170);
    }
  }

  private async load() {
    do {
      document.getElementById('headline')!.innerHTML += `${headline.charAt(this.letterIndex)}`;
      await this.timer(170);
      this.letterIndex++
    } while (this.letterIndex < headline.length);
    this.showSubHeadline();
  }

  private timer(ms: number) { return new Promise(res => setTimeout(res, ms)); }
}
