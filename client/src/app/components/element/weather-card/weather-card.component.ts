import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() weatherClass: string
  @Input() hasSearched: boolean

  constructor() { }

  ngOnInit() {
  }

}
