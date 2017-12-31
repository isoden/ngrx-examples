import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../../models/index';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoComponent,
      ],
    })
    .overrideComponent(TodoComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default },
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.todo = new Todo(0, 'Learn Angular');
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should display todo title', () => {
    component.todo = new Todo(0, 'Learn Zone.js');
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should render title with strikethrough if todo is completed', () => {
    component.todo = new Todo(0, 'Learn RxJS', true);
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should emit toggle on checked', () => {
    jest.spyOn(component.toggle, 'emit');
    component.onToggle();
    expect(component.toggle.emit).toHaveBeenCalledWith(component.todo.id);
  });
});
