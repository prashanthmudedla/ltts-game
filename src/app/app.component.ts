import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Ltts Game Control';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor(private cd: ChangeDetectorRef) {

  }

  onTimerEvent(value: string) {
    console.log(value);
    if (!value) { return; }
    const valueAsNumber = parseInt(value);
    if (valueAsNumber % 2 === 0) {
      this.evenNumbers = [...this.evenNumbers, valueAsNumber];
    } else {
      this.oddNumbers = [...this.oddNumbers, valueAsNumber];
    }
    this.cd.markForCheck();
  }
}
