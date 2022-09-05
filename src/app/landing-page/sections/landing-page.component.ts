import { Component, OnInit } from '@angular/core';
import { BgService } from 'src/app/shared/service/background/bg.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public bgService: BgService) { }

  ngOnInit(): void {
  }

}
