import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  /**
   * counter value
   */
  @Input()
  counter: number;

  /**
   * EventEmitter for increment event
   */
  @Output()
  increment = new EventEmitter<void>();

  /**
   * EventEmitter for decrement event
   */
  @Output()
  decrement = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * emit increment event after 1000ms
   */
  incrementAsync() {
    setTimeout(() => this.increment.emit(), 1000);
  }

  /**
   * if a counter value is odd, emit increment event
   */
  incrementIfOdd() {
    if (this.counter % 2 !== 0) {
      this.increment.emit();
    }
  }
}
