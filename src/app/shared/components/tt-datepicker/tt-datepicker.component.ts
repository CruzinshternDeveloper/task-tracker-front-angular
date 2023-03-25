import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tt-datepicker',
  templateUrl: './tt-datepicker.component.html',
  styleUrls: ['./tt-datepicker.component.css']
})
export class TtDatepickerComponent implements OnInit {
  @Input() date: string = '';
  @Output() newDate: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  changeDate(e: any) {
    const newDate = e.target.value;
    this.newDate.emit(newDate);
  }
}
