import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TodoInputComponent } from './todo-input.component';

describe('TodoInputComponent', () => {
  let component: TodoInputComponent;
  let fixture: ComponentFixture<TodoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ TodoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit "add" if title is entered', () => {
    jest.spyOn(component.add, 'emit');
    component.title.setValue('Learn Angular');
    component.submit();

    expect(component.add.emit).toHaveBeenCalled();
  });

  it('should not emit "add" if title is empty', () => {
    jest.spyOn(component.add, 'emit');

    component.submit();

    expect(component.add.emit).not.toHaveBeenCalled();
  });
});
