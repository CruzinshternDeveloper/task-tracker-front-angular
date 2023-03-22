import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tt-menu',
  templateUrl: './tt-menu.component.html',
  styleUrls: ['./tt-menu.component.scss']
})
export class TtMenuComponent implements OnInit {
  isOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenuState() {
    this.isOpened = !this.isOpened;
    console.log(this.isOpened);
  }

}
