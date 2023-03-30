import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tt-button',
  templateUrl: './tt-button.component.html',
  styleUrls: ['./tt-button.component.scss']
})
export class TtButtonComponent implements OnInit {
  @Input() size: 'large' | 'medium' | 'small' = 'medium';
  @Input() color: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() type: 'submit' | 'button' | 'reset' = 'button'
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
