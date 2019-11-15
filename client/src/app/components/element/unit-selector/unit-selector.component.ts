import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'unit-selector',
  templateUrl: './unit-selector.component.html',
  styleUrls: ['./unit-selector.component.scss']
})
export class UnitSelectorComponent implements OnInit {

  @Input() labels: any[] = [null, null]
  @Input() ids: any[] = [null, null]

  constructor() { }

  ngOnInit() {
  }

}
