import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tt-textarea',
  templateUrl: './tt-textarea.component.html',
  styleUrls: ['./tt-textarea.component.scss']
})
export class TtTextareaComponent implements OnInit {
  @Input() length: 'half' | 'full' = 'full';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleValueChange(event: any) {
    this.valueChange.emit(event.target.value)
  }

}
