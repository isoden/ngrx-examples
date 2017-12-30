import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
