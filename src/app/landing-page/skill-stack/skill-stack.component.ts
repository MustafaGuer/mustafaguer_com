import { Component, OnInit } from '@angular/core';
import { Skills } from './../../shared/interfaces/skills';
import { skillsStack } from 'src/app/shared/const/skillStack';

@Component({
  selector: 'app-skill-stack',
  templateUrl: './skill-stack.component.html',
  styleUrls: ['./skill-stack.component.scss']
})
export class SkillStackComponent implements OnInit {

  public skillStack: Skills[] = skillsStack;
  public skillsOffset: string = '200';

  constructor() { }

  ngOnInit(): void {
  }

}
