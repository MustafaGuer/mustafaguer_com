import { BgService } from 'src/app/shared/service/background/bg.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storys',
  templateUrl: './storys.component.html',
  styleUrls: ['./storys.component.scss']
})
export class StorysComponent implements OnInit {

  constructor(public bgService: BgService) { }

  ngOnInit(): void {
  }

}
