import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { ChangeDetectionStrategy } from '@angular/core';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .overrideComponent(CounterComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default },
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show current counter', async(() => {
    component.counter = 13;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  }));

  it('should emit "increment"', () => {
    const button = fixture.debugElement.query(By.css('button:nth-of-type(1)'));

    jest.spyOn(component.increment, 'emit');
    button.triggerEventHandler('click', null);

    expect(component.increment.emit).toHaveBeenCalled();
  });

  it('should emit "decrement"', () => {
    const button = fixture.debugElement.query(By.css('button:nth-of-type(2)'));

    jest.spyOn(component.decrement, 'emit');
    button.triggerEventHandler('click', null);

    expect(component.decrement.emit).toHaveBeenCalled();
  });

  it('should emit "increment" async', fakeAsync(() => {
    const button = fixture.debugElement.query(By.css('button:nth-of-type(3)'));

    jest.spyOn(component.increment, 'emit');
    button.triggerEventHandler('click', null);

    expect(component.increment.emit).not.toHaveBeenCalled();

    tick(1000);

    expect(component.increment.emit).toHaveBeenCalled();
  }));

  describe('incrementIfOdd', () => {
    let button: DebugElement;

    beforeEach(() => {
      button = fixture.debugElement.query(By.css('button:nth-of-type(4)'));
      jest.spyOn(component.increment, 'emit');
    });

    it('should not emit "increment" if counter is even', () => {
      component.counter = 0;

      button.triggerEventHandler('click', null);

      expect(component.increment.emit).not.toHaveBeenCalled();
    });

    it('should emit "increment" if counter is odd', () => {
      component.counter = 1;

      button.triggerEventHandler('click', null);

      expect(component.increment.emit).toHaveBeenCalled();
    });
  });

});
