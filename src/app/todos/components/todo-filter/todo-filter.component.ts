import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { VisibilityFilter } from '../../models';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFilterComponent implements OnInit {
  @Input()
  filter: VisibilityFilter;

  @Output()
  filterChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onFilterChange(visibilityFilter: VisibilityFilter) {
    this.filterChange.emit(visibilityFilter);
  }
}
