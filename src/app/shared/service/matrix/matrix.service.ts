import { MatrixLetterColors } from './../../enum/matrix-letter-colors';
import { Injectable, ElementRef } from '@angular/core';
import { katakana, latin, nums } from '../../const/matrixLetter';
import { redLetters, blueLetters, greenLetters } from '../../const/matrixLetterColors';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  public ctx: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;

  private letters: string = katakana + latin + nums;

  public activeLetterColor: string = MatrixLetterColors.GREEN;
  private lettersArr: string[] = [];
  private fontSize: number = 16;
  private columns: number = 0;
  private drops: number[] = [];
  private intervalId: any;

  constructor() { }

  public initMatrix(canvas: ElementRef, color: string = MatrixLetterColors.GREEN): void {
    this.setContext(canvas);
    this.setDrops();
    this.draw(canvas, color);
    this.activeLetterColor = color;
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

        if (color === MatrixLetterColors.RED) this.ctx.fillStyle = redLetters;
        else if (color === MatrixLetterColors.BLUE) this.ctx.fillStyle = blueLetters;
        else if (color === MatrixLetterColors.GREEN) this.ctx.fillStyle = greenLetters;

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

  public clearCanvas(): void {
    clearInterval(this.intervalId);
  }

  public resizeCtx(canvas: ElementRef, ) {
    clearInterval(this.intervalId);

    this.initMatrix(canvas, this.activeLetterColor);
  }

}
