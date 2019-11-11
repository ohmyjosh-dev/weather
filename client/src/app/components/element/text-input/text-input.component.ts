import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from './../../../directives/input-ref.directive'

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() name: string
  @Input() label: string
  @Input() fieldValue: string
  @Input() hasBtn: boolean = false;

  @ContentChild(InputRefDirective, { static: false })
  input: InputRefDirective

  @HostBinding("class.focus")
  get focus() {
    return this.input ? this.input.focus : false
  }

  constructor() { }

  ngOnInit() {
  }

}
