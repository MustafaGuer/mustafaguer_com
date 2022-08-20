import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  public ctx: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;

  private katakana: string = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  private latin: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private nums: string = '0123456789';
  private letters: string = this.katakana + this.latin + this.nums;
  private redLetters: string = '#f4427d';
  private boostrapLetters: string = '#7633FA';
  private greenLetters: string = '#0f0';
  private lettersArr: string[] = [];
  private fontSize: number = 16;
  private columns: number = 0;
  private drops: number[] = [];
  private intervalId: any;

  constructor() { }

  public initMatrix(canvas: ElementRef, color: string): void {
    this.setContext(canvas);
    this.setDrops();
    this.draw(canvas, color);
  }

  public setContext(canvas: ElementRef): void {
    this.ctx = canvas.nativeElement.getContext('2d');
    canvas.nativeElement.width = window.innerWidth;
    canvas.nativeElement.height = window.innerHeight;
    this.lettersArr = this.letters.split("");
    this.columns = canvas.nativeElement.width / this.fontSize;
  }

  public setDrops(): void {
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = 1;
    }
  }

  public draw(canvas: ElementRef, color: string): void {
    this.intervalId = setInterval(() => {
      this.ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      this.ctx.fillRect(0, 0, canvas.nativeElement.width, canvas.nativeElement.height);

      for (let i = 0; i < this.drops.length; i++) {
        let text = this.lettersArr[Math.floor(Math.random() * this.lettersArr.length)];

        if (color === 'red') this.ctx.fillStyle = this.redLetters;
        else if (color === 'bootstrap') this.ctx.fillStyle = this.boostrapLetters;
        else if (color === 'green') this.ctx.fillStyle = this.greenLetters;

        this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
        this.drops[i]++;

        if (this.drops[i] * this.fontSize > canvas.nativeElement.height && Math.random() > 0.95) this.drops[i] = 0;
      }
    }, 33)
  }

  public changeColor(canvas: ElementRef, color: string): void {
    clearInterval(this.intervalId);
    this.initMatrix(canvas, color);
  }

}
