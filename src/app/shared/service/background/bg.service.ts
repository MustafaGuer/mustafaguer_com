import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BgService {

  public light: boolean = false;

  constructor() { }

  public changeTheme(): void {
    this.light = !this.light;
  }
}
