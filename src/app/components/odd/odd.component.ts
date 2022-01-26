import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent {
  title = 'Odd Component';
  @Input() value?: number;

  get isNumberOdd() {
    return this.value && this.value % 2 !== 0;
  }
}
