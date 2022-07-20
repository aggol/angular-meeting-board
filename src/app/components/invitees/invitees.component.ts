import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitees',
  templateUrl: './invitees.component.html',
  styleUrls: ['./invitees.component.css'],
})
export class InviteesComponent implements OnInit {
  constructor() {}
  isButtonBoardActive: boolean = true;
  isButtonGuestsActive: boolean = false;

  ngOnInit() {}

  activeButton(value1: boolean, value2: boolean): void {
    this.isButtonBoardActive = value1;
    this.isButtonGuestsActive = value2;
  }
}
