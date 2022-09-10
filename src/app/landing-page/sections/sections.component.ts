import { Component, OnInit } from '@angular/core';
import { BgService } from 'src/app/shared/service/background/bg.service';
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  constructor(public bgService: BgService) { }

  ngOnInit(): void {
  }

}
