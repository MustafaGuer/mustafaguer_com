import { BgService } from './../../shared/service/background/bg.service';
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
  public defaultOffset: string = '300';
  public defaultDelay: string = '0';
  public defaultAnchorPlacement: string = 'bottom-bottom';

  constructor(public bgService: BgService) { }

  ngOnInit(): void {
    this.setAnimation();
  }

  private setAnimation(): void {
    // this.skillStack.forEach((skill, index) => this.isEven(index) ? skill.animation = 'fade-down-right' : skill.animation = 'fade-down-left');
    this.skillStack.forEach((skill, index) => this.isEven(index) ? skill.animation = 'flip-right' : skill.animation = 'flip-left');
  }

  private isEven(n: number): boolean {
    return n % 2 == 0;
  }

}
