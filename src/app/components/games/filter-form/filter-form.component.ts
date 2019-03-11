import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {
  @Input()
  debounceTime = 500;

  filterForm = new FormGroup({
    name: new FormControl(''),
    ordering: new FormControl('')
  });

  @Output()
  onFilter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    const nameField = this.filterForm.get('name');
    nameField.valueChanges
      .pipe(
        debounceTime(this.debounceTime)
      )
      .subscribe(value => {
        this.onFilter.emit(value);
      });
  }

}
