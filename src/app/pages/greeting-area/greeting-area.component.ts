import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting-area',
  templateUrl: './greeting-area.component.html',
  styleUrls: ['./greeting-area.component.scss']
})
export class GreetingAreaComponent implements OnInit {
  private headline: string = `Hi, I\'m Mustafa Gür!`;
  private subHeadline: string = `I\'m a Frontend Web Developer!`;
  private letterIndex: number = 0;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    // for (let i = 0; i < this.headline.length; i++) {
    //   setTimeout(() => {
    //     document.getElementById('headline')!.innerHTML += `<b>${this.headline[i]}</b>`;
    //   }, i * 170);
    // }
    this.load();
  }

  private showSubHeadline(): void {
    for (let i = 0; i < this.subHeadline.length; i++) {
      setTimeout(() => {
        document.getElementById('subHeadline')!.innerHTML += `<b>${this.subHeadline[i]}</b>`;
      }, i * 170);
    }
  }

  private async load() {
    // for(let i = 0; i < this.headline.length; i++) {
    //   document.getElementById('headline')!.innerHTML += `<b>${this.headline[i]}</b>`;
    //   await this.timer(170);
    // }
    // for (let i = 0; i < this.headline.length; i++) {
    //   document.getElementById('headline')!.innerHTML += `${this.headline.charAt(i)}`;
    //   await this.timer(170);
    //   if(i === this.headline.length) {
    //     this.showSecondHeadline();
    //   }
    // }
    do {
      document.getElementById('headline')!.innerHTML += `${this.headline.charAt(this.letterIndex)}`;
      await this.timer(170);
      this.letterIndex++
    } while (this.letterIndex < this.headline.length);
    this.showSubHeadline();
  }

  private timer(ms: number) { return new Promise(res => setTimeout(res, ms)); };
}
