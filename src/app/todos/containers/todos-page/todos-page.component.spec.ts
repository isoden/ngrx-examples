import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';

import { TodosPageComponent } from './todos-page.component';
import { TodoComponent } from '../../components/todo/todo.component';
import { TodoFilterComponent } from '../../components/todo-filter/todo-filter.component';
import { TodoInputComponent } from '../../components/todo-input/todo-input.component';
import { reducers, State } from '../../reducers';
import { Add } from '../../actions/todos';

describe('TodosPageComponent', () => {
  let component: TodosPageComponent;
  let fixture: ComponentFixture<TodosPageComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          todos: combineReducers(reducers),
        }),
      ],
      declarations: [
        TodosPageComponent,
        TodoComponent,
        TodoFilterComponent,
        TodoInputComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(TodosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch "Add"', () => {
    const title = 'Learn Angular';

    jest.spyOn(store, 'dispatch');
    component.onAdd(title);

    expect(store.dispatch).toHaveBeenCalledWith(new Add({ title }));
  });
});
