import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as Counter from '../../actions/counter';
import * as fromCounter from '../../reducers';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent implements OnInit {
  /**
   * counter value
   */
  counter$ = this.store.pipe(select(fromCounter.getCounter));

  constructor(
    private store: Store<fromCounter.State>
  ) { }

  ngOnInit() {
  }

  /**
   * dispatch Increment action
   */
  increment() {
    this.store.dispatch(new Counter.Increment());
  }

  /**
   * dispatch Decrement action
   */
  decrement() {
    this.store.dispatch(new Counter.Decrement());
  }
}
