import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Todo } from '../../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  toggle = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.toggle.emit(this.todo.id);
  }
}
