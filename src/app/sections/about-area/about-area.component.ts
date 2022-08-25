import { Skills } from './../../shared/interfaces/skills';
import { skillsStack } from 'src/app/shared/const/skillStack';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-area',
  templateUrl: './about-area.component.html',
  styleUrls: ['./about-area.component.scss']
})
export class AboutAreaComponent implements OnInit {

  public skillStack: Skills[] = skillsStack;
  public skillsOffset:string = '200';

  constructor() { }

  ngOnInit(): void {
  }

}
