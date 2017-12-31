import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInputComponent implements OnInit {
  @Output()
  add = new EventEmitter<string>();

  title = new FormControl('', [
    Validators.required,
  ]);

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if (this.title.invalid) {
      return;
    }

    this.add.emit(this.title.value);
    this.title.setValue('');
  }
}
