import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFormattedDate } from '../../../shared/helpers/format-date.helper';
import { ITask } from '../../../shared/interfaces/tasks.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  form: FormGroup;
  @Output() newFormValue: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      title: ['', [Validators.required]],
      description: '',
      startDate: [getFormattedDate(new Date), [Validators.required]]
    })
  }

  onValueChange(field: string, event: any) {
    this.form.controls[field].setValue(event);
  }

  submitForm() {
    this.newFormValue.emit(this.form.value);
  }
}
