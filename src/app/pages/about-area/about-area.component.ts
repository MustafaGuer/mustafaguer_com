import { Skills } from './../../shared/interfaces/skills';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-area',
  templateUrl: './about-area.component.html',
  styleUrls: ['./about-area.component.scss']
})
export class AboutAreaComponent implements OnInit {

  public skillStack: Skills[] = [{name: 'JavaScript', url: '../../../assets/logos/javascript.svg'}, {name: 'Angular', url: '../../../assets/logos/angular.svg'}];
// 'JavaScript', 'Angular', 'HTML5', 'CSS3', 'TypeScript', 'ReactJS', 'PHP', 'SCRUM', 'REST API', 'FIREBASE', 'GIT', 'GITHUB'
  constructor() { }

  ngOnInit(): void {
  }

}
