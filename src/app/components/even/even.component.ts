import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent {
  title = 'Even Component';
  @Input() value?: number;

  get isNumberEven() {
    return this.value && this.value % 2 === 0;
  }
}
