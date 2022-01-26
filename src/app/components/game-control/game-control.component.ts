import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnDestroy {
  title = 'Game Control Component';
  @Output() timerEvent = new EventEmitter();
  private timerIntervalRef: any;
  private timerCount = 0;

  ngOnDestroy(): void {
    this.clearTimerInterval();
  }

  startGame(event: Event) {
    if (!event) { return; }
    event.stopPropagation();
    event.preventDefault();
    if (this.timerIntervalRef) { return; } // return if timer has laready started!
    this.timerIntervalRef = setInterval(() => {
      this.timerEvent.emit((++this.timerCount).toString());
    }, 1000);
  }

  pauseGame(event: Event) {
    if (!event) { return; }
    event.stopPropagation();
    event.preventDefault();
    this.clearTimerInterval();
  }

  clearTimerInterval() {
    if (this.timerIntervalRef) {
      this.timerIntervalRef = clearInterval(this.timerIntervalRef);
    }
  }

  get isTimerActive() {
    return !!this.timerIntervalRef;
  }
}
