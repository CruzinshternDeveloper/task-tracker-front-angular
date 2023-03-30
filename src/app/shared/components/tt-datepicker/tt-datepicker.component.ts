import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getFormattedDate } from '../../helpers/format-date.helper';

@Component({
  selector: 'tt-datepicker',
  templateUrl: './tt-datepicker.component.html',
  styleUrls: ['./tt-datepicker.component.css']
})
export class TtDatepickerComponent implements OnInit {
  @Input() date: string = '';
  @Output() newDate: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    if(!this.date) this.date = getFormattedDate(new Date);
  }

  ngOnInit(): void {}

  changeDate(e: any) {
    const newDate = e.target.value;
    this.newDate.emit(newDate);
  }
}
