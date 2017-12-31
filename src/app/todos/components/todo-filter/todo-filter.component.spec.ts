import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';

import { TodoFilterComponent } from './todo-filter.component';

describe('TodoFilterComponent', () => {
  let component: TodoFilterComponent;
  let fixture: ComponentFixture<TodoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoFilterComponent,
      ],
    })
    .overrideComponent(TodoFilterComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default },
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFilterComponent);
    component = fixture.componentInstance;
    component.filter = 'SHOW_ALL';
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should reflect current filter', () => {
    component.filter = 'SHOW_ACTIVE';
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();

    component.filter = 'SHOW_COMPLETED';
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should emit "filterChange" on button click', () => {
    const button = fixture.debugElement.query(By.css('button:nth-of-type(2)'));
    jest.spyOn(component.filterChange, 'emit');

    button.triggerEventHandler('click', null);

    expect(component.filterChange.emit).toHaveBeenCalledWith('SHOW_ACTIVE');
  });
});
