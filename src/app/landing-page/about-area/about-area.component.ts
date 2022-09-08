import { BgService } from './../../shared/service/background/bg.service';
import { Skills } from './../../shared/interfaces/skills';
import { skillsStack } from 'src/app/shared/const/skillStack';
import { Component, OnInit } from '@angular/core';
import { birthDate } from 'src/app/shared/const/myBirthdate';

@Component({
  selector: 'app-about-area',
  templateUrl: './about-area.component.html',
  styleUrls: ['./about-area.component.scss']
})
export class AboutAreaComponent implements OnInit {

  public skillStack: Skills[] = skillsStack;
  public skillsOffset: string = '0';

  private bdTs: number = new Date(birthDate).getTime();
  private timeDiff: number = Math.abs(Date.now() - this.bdTs);
  public myAge: number = Math.floor((this.timeDiff / (1000 * 3600 * 24)) / 365.25);;

  constructor(public bgService: BgService) { }

  ngOnInit(): void {
  }

}
