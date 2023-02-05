import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tt-input',
  templateUrl: './tt-input.component.html',
  styleUrls: ['./tt-input.component.scss']
})
export class TtInputComponent implements OnInit {
  @Input() length: 'half' | 'full' = 'full';
  @Input() color: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'number' | 'password' = 'text';
  @Input() label: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleValueChange(event: any) {
    this.valueChange.emit(event.target.value)
  }
}
