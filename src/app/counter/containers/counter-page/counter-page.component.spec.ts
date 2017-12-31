import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { CounterPageComponent } from './counter-page.component';
import { CounterComponent } from '../../components/counter/counter.component';
import { reducers, State } from '../../reducers';
import * as Counter from '../../actions/counter';

describe('CounterPageComponent', () => {
  let component: CounterPageComponent;
  let fixture: ComponentFixture<CounterPageComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          counter: reducers
        }),
      ],
      declarations: [
        CounterPageComponent,
        CounterComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPageComponent);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a increment event', () => {
    const action = new Counter.Increment();

    component.increment();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch a decrement event', () => {
    const action = new Counter.Decrement();

    component.decrement();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
